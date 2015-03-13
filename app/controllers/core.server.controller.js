'use strict';

/**
 * Module dependencies.
 */

var request = require('request');
var openWeatherMapApi = {app_id: '8aa0ef8cd732f666844de7830ae2b810',
                         api_url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
                        cnt: 14
};

exports.index = function(req, res) {
    res.render('index', {
		user: req.user || null,
		request: req
	});

};

exports.getCurrentCityWeather = function(req, res){
    var lat = req.body.lat;
    var lon = req.body.lon;

    var url = openWeatherMapApi.api_url+'?lat='+lat+'&lon='+lon+'&cnt='+openWeatherMapApi.cnt+'&APPID='+ openWeatherMapApi.app_id;
    console.log(url);
    request.get(url, function(err, response){
        if(err){
            res.status(400).send(err);
        }else{
            res.json(response);
        }
    });
};


exports.weatherForecast = function(req, res){
    var city = req.body.city;

    var url = openWeatherMapApi.api_url+'?q='+city+'&cnt='+openWeatherMapApi.cnt+'&APPID='+ openWeatherMapApi.app_id;
    console.log(url);
    request.get(url, function(err, response){
        if(err){
            res.status(400).send(err);
        }else{
            res.json(response);
        }
    });
};
