/*
    File Name: services.server.controller.js
    Author Name: Jaswinder Sidhu
    Website Name: jaswindersidhu
    File Description: controller file for services page
*/
exports.render = function (req, res) {
    
   
    res.render('services', {
        title: 'Jaswinder Sidhu'
    });

};