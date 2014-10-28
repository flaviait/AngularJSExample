'use strict';

angular.module('angularJsexampleApp')
    .factory('Product', ['Config', '$resource',
        function (Config, $resource) {
            return $resource(Config.service + '/products/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            });
        }]);
