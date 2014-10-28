'use strict';

angular.module('angularJsexampleApp')
  .controller('ProductEditCtrl', ['$scope','$routeParams', '$location', 'Product', function ($scope, $routeParams, $location, Product) {
        $scope.product = Product.get({id:$routeParams.id});

        $scope.edit = function() {
            /*
             * drop mongodb _id else it's not possible to update the product
             */
            $scope.product._id = undefined;

            $scope.product.$update({id:$routeParams.id}, function() {
                $location.path('/products');
            });
        }
    }]);