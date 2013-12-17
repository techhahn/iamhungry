'use strict';

angular.module('iamhungryApp')
	.controller('ProfileCtrl', function($scope, fbAuth, $location) {
		
		 // initialize $scope variables
		 // without initializeing here $scope wont be able to get user details.
		 // need to log out n log in to supply the correct vales to the scope

		$scope.loggedIn = fbAuth.user.loggedIn;
		$scope.user = fbAuth.user.loggedUser;

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