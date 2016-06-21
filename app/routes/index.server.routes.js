/*
    File Name: index.server.routes.js
    Author Name: Jaswinder Sidhu
    Website Name: jaswindersidhu
    File Description: routes file to describe all the routes
*/
//Defning routes for all the pages
module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    var contactme = require('../controllers/contactme.server.controller');
    var aboutme = require('../controllers/aboutme.server.controller');
    var projects = require('../controllers/projects.server.controller');
    var services = require('../controllers/services.server.controller');

    app.get('/', index.render);
    app.get('/contactme', contactme.render);
    app.get('/aboutme', aboutme.render);
    app.get('/projects', projects.render);
    app.get('/services', services.render);
};