'use strict';

angular.module('angularJsexampleApp')
    .controller('ProductListCtrl', ['$scope', 'Product', 'Shoppingcart', 'Wishlist', function ($scope, Product, Shoppingcart, Wishlist) {
        $scope.products = Product.query();
        $scope.shoppingcart = Shoppingcart.items;
        $scope.wishlist = Wishlist.items;

        $scope.addToWishlist = function(product) {
            Wishlist.add(product);
        };

        $scope.addToCart = function(product) {
            Shoppingcart.add(product);
        };
    }]);
