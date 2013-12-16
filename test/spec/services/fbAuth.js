'use strict';

describe('Service: Fbauth', function () {

  // load the service's module
  beforeEach(module('iamhungryApp'));

  // instantiate service
  var Fbauth;
  beforeEach(inject(function (_Fbauth_) {
    Fbauth = _Fbauth_;
  }));

  it('should do something', function () {
    expect(!!Fbauth).toBe(true);
  });

});
