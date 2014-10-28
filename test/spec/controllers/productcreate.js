'use strict';

describe('Controller: ProductcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexampleApp'));

  var ProductcreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductcreateCtrl = $controller('ProductcreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
