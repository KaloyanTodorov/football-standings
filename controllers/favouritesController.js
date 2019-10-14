const teamModel = require('../models/team');

function getFavouriteTeams(req, res) {
    res.render('favourite-teams.hbs');
}

function postFavouriteTeams(req, res, next) {
    const { team, user } = req.body;
    
    
    teamModel.find({ name: team }).then(t => {

        const currTeam = t[0]; 
        
        if(currTeam) {
            const count = ++currTeam.count;
            currTeam.users.push(user);
            teamModel.findByIdAndUpdate(currTeam.id, { $set: { count: count, users: currTeam.users } }).then(result => {
                console.log(result);
            });

            res.redirect('/fav-table');
            return;
        }
        
        teamModel.create({ name: team, count: 1, users: [user]});
        res.redirect('/fav-table');
    })
}

function getTable(req, res, next) {
    teamModel.find({}).then(foundTeams => {
        const sortedTable = foundTeams.sort( (a, b) => b.count - a.count);
        sortedTable.forEach((team, index) => {
            team.rank = index + 1;
        });

        res.render('table.hbs', { sortedTable });
        
    })
}

module.exports = {
    getFavouriteTeams,
    postFavouriteTeams,
    getTable
}