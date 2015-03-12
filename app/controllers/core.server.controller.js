'use strict';

/**
 * Module dependencies.
 */

var request = require('request');

exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.weatherForecast = function(req, res, next){
    var openWeatherMapApi = {app_id: '8aa0ef8cd732f666844de7830ae2b810',
        api_url: 'http://api.openweathermap.org/data/2.5/forecast/daily'
    };
    var city = req.body.city;
    var cnt = 14;
    var url = openWeatherMapApi.api_url+'?q='+city+'&cnt='+cnt+'&APPID='+ openWeatherMapApi.app_id;
    console.log(url);
    request.get(url, function(err, response){
        if(err){
            res.status(400).send(err);
        }else{
            res.json(response);

        }
    });

};
