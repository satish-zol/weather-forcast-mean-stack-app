'use strict';

angular.module('core').factory('GeolocationService', ['$q', '$window', '$rootScope',
	function($q, $window, $rootScope) {
		// Geolocation service service logic

		return function() {
			var deferred = $q.defer();
            if(!$window.navigator){
                $rootScope.$apply(function(){
                    deferred.reject(new Error('Geolocation is not supported by this browser!'));
                });
            }else{
                $window.navigator.geolocation.getCurrentPosition(function(position){
                    $rootScope.$apply(function(){
                        deferred.resolve({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        });
                    });
                }, function(error){
                    $rootScope.$apply(function(){
                        deferred.reject(error);
                    });
                });
            }
            return deferred.promise;
		};
	}]);
