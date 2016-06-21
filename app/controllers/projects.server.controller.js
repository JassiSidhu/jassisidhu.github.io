/*
    File Name: projects.server.controller.js
    Author Name: Jaswinder Sidhu
    Website Name: jaswindersidhu
    File Description: controller file for projects page
*/
exports.render = function (req, res) {
    
   
    res.render('projects', {
        title: 'Jaswinder Sidhu'
    });

};