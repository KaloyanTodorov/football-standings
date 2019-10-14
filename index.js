const dbConntector = require('./config/database');

dbConntector().then(() => {
    
    const express = require('express');
    
    const env = process.env.NODE_ENV || 'dev';
    const config = require('./config/config')[env];
    global.__globalDir = __dirname;
    
    const app = express();
    
    require('./config/express')(app);
    require('./config/routes')(app);
    
    
    app.listen(config.port, console.log(`Server is up and running on port ${config.port}`));
    
    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send(err.message)
    })
})
