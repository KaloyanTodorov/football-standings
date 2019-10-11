const tournamentsModel = require('../models/tournaments');

function home(req, res, next) {
    tournamentsModel.getAllTournaments().then(data => {
        const tournaments = data.tournaments;
        console.log(tournaments);
        
        res.render('home.hbs',  { tournaments });
    }).catch(next);

}

function notFound(req, res) {
    res.render('404.hbs');
}

function about(req, res) {
    res.render('about.hbs');
}

module.exports = {
    home,
    notFound,
    about
}