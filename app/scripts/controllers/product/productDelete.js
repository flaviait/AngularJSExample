'use strict';

angular.module('angularJsexampleApp')
  .controller('ProductDeleteCtrl', ['$scope', '$routeParams', '$location', 'Product', function ($scope, $routeParams, $location, Product) {
        $scope.product = Product.delete({id: $routeParams.id}, function() {
            $location.path('/products');
        });
    }]);
