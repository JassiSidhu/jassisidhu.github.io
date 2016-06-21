/*
    File Name: index.server.controller.js
    Author Name: Jaswinder Sidhu
    Website Name: jaswindersidhu
    File Description: controller file for home page
*/
exports.render = function (req, res) {
    
   
    res.render('index', {
        title: 'Jaswinder Sidhu'
    });

};