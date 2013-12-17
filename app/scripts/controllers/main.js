'use strict';

angular.module('iamhungryApp')
	.controller('MainCtrl', function($scope, fbAuth) {

		/*
			user login variables
			used to hide the add recepic button if user is not logged in.
		*/

		$scope.loggedIn = fbAuth.user.loggedIn;
		$scope.$on('updateUser', function() {
			$scope.loggedIn = fbAuth.user.loggedIn;
		});



		$scope.awesomeThings = [{
			name: 'HTML5 Boilerplate',
			desc: '',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElMr28UYTn-w81xpXNZu55N1jNPlWHGmxAS-xt5hw-OslcTWRzw'
		}, {
			name: 'angular',
			desc: '',
			img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvm21E6gxtNTHOlI9CzSP_fgNovRhRr0auTdWqKURIira2O1RggMzTzNPL'
		}, {
			name: 'Yeoman',
			desc: '',
			img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0FpwrH1U556_FrFdjYuWVB3jpAke17z6YEZl9AOTYtGlhHQf4'
		}, {
			name: 'backbone',
			desc: '',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSX8_5FoQ-oUmz9HjunHRb0IO77YOe93-kmL9Ai6wuIDCklKNIeQ'
		}, {
			name: 'Laravel',
			desc: '',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7W5IZjHtaPDVwo82mr6FpZN7cLaB92nEe8j5wgL3BX1-CoDVIA'
		}, {
			name: 'Node',
			desc: '',
			img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIWiFexux37JvNdnWfXknUJ_7-NsswEC1PFE8jnwD_cHtqOBW6'
		}];
	});