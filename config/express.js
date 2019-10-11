const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app) => {
    // Setup the view engine
    app.engine('.hbs', handlebars({ extname: '.hbs' }));
    app.set('views', path.resolve(__globalDir, 'views'));

    // Setup the body-parser
    app.use(bodyParser.urlencoded( { extended: false }));

    // Setup the static files
    app.use(express.static(path.resolve(__globalDir, 'static')));
}