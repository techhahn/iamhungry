'use strict';

angular.module('iamhungryApp')
	.controller('ProfileCtrl', function($scope, fbAuth, $location) {

		var autoToJSON = ['loggedIn', 'user'];

		angular.forEach(autoToJSON, function(varName) {
			$scope.$watch(varName, function(val) {
				$scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
			}, true);
		});

		$scope.$on('updateUser', function() {
			$scope.loggedIn = fbAuth.user.loggedIn;
			$scope.user = fbAuth.user.loggedUser;
		});
	});