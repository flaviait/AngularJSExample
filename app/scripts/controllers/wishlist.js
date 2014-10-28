'use strict';

angular.module('angularJsexampleApp')
    .controller('WishlistCtrl', ['Wishlist', '$scope', function (Wishlist, $scope) {
        $scope.wishlist = Wishlist.items;

        $scope.removeItem = function(product) {
            Wishlist.remove(product);
        };
    }]);
