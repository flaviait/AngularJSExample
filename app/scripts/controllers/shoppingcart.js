'use strict';

angular.module('angularJsexampleApp')
  .controller('ShoppingcartCtrl', ['Shoppingcart', '$scope', function(Shoppingcart, $scope) {
        $scope.shoppingcart = Shoppingcart.items;

        $scope.removeItem = function(product) {
            Shoppingcart.remove(product);
        };
  }]);
