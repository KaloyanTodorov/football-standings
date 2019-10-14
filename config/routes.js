const pagesController = require('../controllers/pagesConstroller');
const tournamentController = require('../controllers/tournamentController');
const favouritesController = require('../controllers/favouritesController');

module.exports = (app) => {

    app.get('/about', pagesController.about);
    app.get('/not-found', pagesController.notFound);
    
    app.get('/standings/:id', tournamentController.showTrounamentById);
    app.get('/favourite-team', favouritesController.getFavouriteTeams);
    app.post('/favourite-team', favouritesController.postFavouriteTeams);
    

    app.get('/', pagesController.home);
}