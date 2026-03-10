const pool = require("../config/db");

async function getServices({ page, limit, search }) {
    const offset = (page - 1) * limit;

    let query = `SELECT * FROM services`;
    let countQuery = `SELECT COUNT(*) FROM services`;
    let values = [];

    if (search) {
        query += ` WHERE LOWER(title) LIKE $1`;
        countQuery += ` WHERE LOWER(title) LIKE $1`;
        values.push(`%${search.toLowerCase()}%`);
    }

    query += ` ORDER BY id LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;

    values.push(limit, offset);

    const servicesResult = await pool.query(query, values);

    const countResult = await pool.query(
        countQuery,
        search ? [`%${search.toLowerCase()}%`] : []
    );

    return {
        data: servicesResult.rows,
        total: parseInt(countResult.rows[0].count)
    };
}

module.exports = {
    getServices
};