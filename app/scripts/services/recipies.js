'use strict';

angular.module('iamhungryApp')
  .factory('recipies', [function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function() {
        return meaningOfLife;
      }
    };
  }]);
