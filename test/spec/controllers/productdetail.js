'use strict';

describe('Controller: ProductdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexampleApp'));

  var ProductdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdetailCtrl = $controller('ProductdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
