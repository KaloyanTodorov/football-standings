const api = require('../config/api');
const fetch = require('node-fetch');

async function getAllTournaments() {

    const response = await fetch(api.api.tournaments);
    return await response.json();
}

async function getTournamentById(id) {
     const response = await fetch(api.api.tournamentById(id));
     return await response.json();
}

module.exports = {
    getAllTournaments,
    getTournamentById
}