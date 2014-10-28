'use strict';

describe('Controller: ProducteditCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexampleApp'));

  var ProducteditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProducteditCtrl = $controller('ProducteditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
