'use strict';

angular.module('iamhungryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ezfb'
])
.config(['$routeProvider', '$FBProvider',
function ($routeProvider, $FBProvider) {
    $FBProvider.setInitParams({
      appId: '559648674122615'
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
