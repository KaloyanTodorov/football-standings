const tournamentModel = require('../models/tournament');

function showTrounamentById(req, res, next) {
    const id = req.params.id;

    tournamentModel.getTournamentById(id).then(tournament => {
        console.log(tournament);

        const group = tournament.standings[0].groups;


        res.render('standings.hbs', { tournament, group });
        
    }).catch(next);

}

module.exports = {
    showTrounamentById
}