const api = require('../config/api');
const fetch = require('node-fetch');

async function getAllTournaments() {
    const response = await fetch(api.api.tournaments);
    return await response.json();
}

module.exports = {
    getAllTournaments
}