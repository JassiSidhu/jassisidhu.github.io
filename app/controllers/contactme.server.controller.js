/*
    File Name: contactme.server.controller.js
    Author Name: Jaswinder Sidhu
    Website Name: jaswindersidhu
    File Description: controller file for contact me page
*/
exports.render = function (req, res) {
    
   
    res.render('contactme', {
        title: 'Jaswinder Sidhu'
    });

};