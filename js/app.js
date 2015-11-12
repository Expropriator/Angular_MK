var app = angular.module('factoryExample', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'personList.html'
        })
        .when('/edit/:personId', {
            templateUrl: 'personEdit.html',
            controller: 'PersonEditCtrl'
        })
        .otherwise({ redirectTo: '/' });
});