'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $scope.getWeather = function(){
            $http.post('/forecast', $scope.weatherReports).success(function(data, status, headers, config){
                //alert(data.body);
                $scope.weather = JSON.parse(data.body);
            }).error(function(data, status, headers, config){
                $scope.error = data.message;
            });
        };
	}
]);
