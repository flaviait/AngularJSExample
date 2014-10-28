'use strict';

describe('Service: shoppingcart', function () {

  // load the service's module
  beforeEach(module('angularJsexampleApp'));

  // instantiate service
  var shoppingcart;
  beforeEach(inject(function (_shoppingcart_) {
    shoppingcart = _shoppingcart_;
  }));

  it('should do something', function () {
    expect(!!shoppingcart).toBe(true);
  });

});
