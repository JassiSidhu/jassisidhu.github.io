/*
    File Name: aboutme.server.controller.js
    Author Name: Jaswinder Sidhu
    Website Name: jaswindersidhu
    File Description: controller file for about me page
*/
exports.render = function (req, res) {

    res.render('aboutme', {
        title: 'Jaswinder Sidhu'
    });

};