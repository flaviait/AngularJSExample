'use strict';

angular.module('angularJsexampleApp')
  .controller('ProductCreateCtrl', ['$scope', '$location', 'Product', function ($scope, $location, Product) {
        $scope.product = new Product;

        $scope.save = function() {
            $scope.product.$save(function() {
                $location.path('/products');
            });
        }
    }]);

