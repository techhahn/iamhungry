'use strict';

angular.module('iamhungryApp')
  .factory('fbAuth', function ($FB) {
    // Service logic
    // ...

    var user = {};

    user.loggedIn = 'unknown';

    user.loggedUser = null;

    // Public API here
        return {
          user: user
    };
  });
