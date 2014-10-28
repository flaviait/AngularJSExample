'use strict';

angular.module('angularJsexampleApp')
  .service('Wishlist', function() {
        return {
            items: [],

            add: function (product) {
                if(!this.contains(product)) {
                    this.items.push(product);
                }
            },

            contains: function(product) {
                for (var i = 0; i < this.items.length; i++) {
                    if (this.items[i]._id === product._id) {
                        return true;
                    }
                }
            },

            remove: function(product) {
                this.items.splice(this.items.indexOf(product), 1);
            }
        };
  });
