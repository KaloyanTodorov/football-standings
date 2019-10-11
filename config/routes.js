const pagesController = require('../controllers/pagesConstroller');
const tournamentController = require('../controllers/tournamentController');

module.exports = (app) => {

    app.get('/about', pagesController.about);
    app.get('/not-found', pagesController.notFound);
    
    app.get('/standings/:id', tournamentController.showTrounamentById);

    app.get('/', pagesController.home);
}