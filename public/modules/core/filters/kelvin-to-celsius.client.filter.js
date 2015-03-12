'use strict';

angular.module('core').filter('kelvinToCelsius', [
	function() {
		return function(input) {
			// Kelvin to celsius directive logic
			// ...
			return parseFloat(input) - 273.15;
		};
	}
]);
