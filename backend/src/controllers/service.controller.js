const serviceService = require("../services/service.service");

async function getServices(req, res, next) {
    try {
        const result = await serviceService.fetchServices(req.query);

        res.json({
            success: true,
            ...result
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getServices
};