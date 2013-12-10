'use strict';

angular.module('iamhungryApp')
	.controller('AuthCtrl',
		function($scope, $FB) {
			var autoToJSON = ['loginStatus', 'apiMe'];
			angular.forEach(autoToJSON, function(varName) {
				$scope.$watch(varName, function(val) {
					$scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
				}, true);
			});

			function updateLoginStatus(more) {
				$FB.getLoginStatus(function(res) {
					$scope.loginStatus = res;

					(more || angular.noop)();
				});
			}

			function updateApiMe() {
				$FB.api('/me', function(res) {
					$scope.apiMe = res;
				});
			}
			updateLoginStatus(updateApiMe);

			$scope.login = function() {
				$FB.login(function(res) {
					/**
					 * no manual $scope.$apply, I got that handled
					 */
					if (res.authResponse) {
						updateLoginStatus(updateApiMe);
					}
				}, {
					scope: 'email,user_likes'
				});
			};

			$scope.logout = function() {
				$FB.logout(function() {
					updateLoginStatus(updateApiMe);
				});
			};
		});