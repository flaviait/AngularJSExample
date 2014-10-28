'use strict';

describe('Service: wishlist', function () {

  // load the service's module
  beforeEach(module('angularJsexampleApp'));

  // instantiate service
  var wishlist;
  beforeEach(inject(function (_wishlist_) {
    wishlist = _wishlist_;
  }));

  it('should do something', function () {
    expect(!!wishlist).toBe(true);
  });

});
