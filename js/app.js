var app = angular.module('factoryExample', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'personList.html'
        })
        .otherwise({ redirectTo: '/' });
});