'use strict';

angular
    .module('angularJsexampleApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/products', {
                templateUrl: 'views/products/list.html',
                controller: 'ProductListCtrl'
            })
            .when('/products/create', {
                templateUrl: 'views/products/create.html',
                controller: 'ProductCreateCtrl'
            })
            .when('/products/edit/:id', {
                templateUrl: 'views/products/edit.html',
                controller: 'ProductEditCtrl'
            })
            .when('/products/delete/:id', {
                templateUrl: 'views/products/list.html',
                controller: 'ProductDeleteCtrl'
            })
            .when('/products/:id', {
                templateUrl: 'views/products/detail.html',
                controller: 'ProductDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
