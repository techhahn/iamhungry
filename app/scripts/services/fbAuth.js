'use strict';

angular.module('iamhungryApp')
  .factory('fbAuth', function ($rootScope) {
    // Service logic
    // ...

    var user = {};
    user.loggedIn = 'unknown';
    user.loggedUser = null;

    user.loggedStatusBroadcast = function(user){
      this.loggedIn = user;
      this.broadcast();
    }

    user.userDetailsBroadcast = function(user){
      this.loggedUser = user;
      this.broadcast();
    }

    user.broadcast = function() {
      $rootScope.$broadcast('updateUser');
    }

    // Public API here
        return {
          user: user
    };
  });
