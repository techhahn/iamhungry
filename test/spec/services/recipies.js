'use strict';

describe('Service: Recipies', function () {

  // load the service's module
  beforeEach(module('iamhungryApp'));

  // instantiate service
  var Recipies;
  beforeEach(inject(function(_Recipies_) {
    Recipies = _Recipies_;
  }));

  it('should do something', function () {
    expect(!!Recipies).toBe(true);
  });

});
