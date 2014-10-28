'use strict';

angular.module('angularJsexampleApp')
    .controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Product', function ($scope, $routeParams, Product) {
        $scope.product = Product.get({id: $routeParams.id});

        $scope.addComment = function() {
            /*
             * drop mongodb _id else it's not possible to update the product
             */
            $scope.product._id = undefined;
            if($scope.product.comments == undefined) {
                $scope.product.comments = [];
            }

            $scope.product.comments.push($scope.comment);
            $scope.product.$update({id:$routeParams.id});
        }
    }]);
