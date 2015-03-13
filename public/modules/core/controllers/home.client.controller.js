'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', '$location', 'Authentication', 'GeolocationService',
	function($scope, $http, $location, Authentication, geolocation) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.currentCityWeather = function(){
            $scope.position = null;
            geolocation().then(function(position){
                $http.post('/weather', {lat: position.lat, lon:position.lon}).success(function(data, status, headers, config){
                    $scope.weather = JSON.parse(data.body);
                }).error(function(data, status, headers, config){
                    $scope.error = data.message;
                });
            });
        };

        $scope.getWeather = function(){
            $http.post('/forecast', $scope.weatherReports).success(function(data, status, headers, config){
                $scope.weather = JSON.parse(data.body);
            }).error(function(data, status, headers, config){
                $scope.error = data.message;
            });
        };
	}
]);
