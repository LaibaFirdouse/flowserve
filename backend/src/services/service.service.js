const serviceRepository = require("../repositories/service.repository");

async function fetchServices(params) {

    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 10;
    const search = params.search || "";

    const result = await serviceRepository.getServices({
        page,
        limit,
        search
    });

    return {
        page,
        limit,
        total: result.total,
        data: result.data
    };
}

module.exports = {
    fetchServices
};