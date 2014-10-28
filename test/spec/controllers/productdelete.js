'use strict';

describe('Controller: ProductdeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexampleApp'));

  var ProductdeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdeleteCtrl = $controller('ProductdeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
