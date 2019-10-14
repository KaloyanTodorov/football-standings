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

            res.redirect('/');

            return;
        }
        
        teamModel.create({ name: team, count: 1, users: [user]});
        res.redirect('/');
    })
}

function _incrementTeamCount(id) {
    teamModel.findById(id).then(t => {
        t.update( { count: t.count++, users: [...user]});
    })
}

module.exports = {
    getFavouriteTeams,
    postFavouriteTeams
}