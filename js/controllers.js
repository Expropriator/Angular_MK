angular.module('factoryExample')
    .controller('PersonListCtrl', function($scope, personsFactory) {
        $scope.persons = personsFactory.list;
        $scope.remove = personsFactory.remove;
    })
    .controller('PersonAddCtrl', function($scope, personsFactory) {
        $scope.person = {};

        $scope.add = function() {
            personsFactory.add($scope.person);
            $scope.person = {};
        }
    })
    .controller('PersonEditCtrl', function($window, $scope, $routeParams, personsFactory) {
        var id = $routeParams['personId'];
        $scope.person = personsFactory.get(id);

        $scope.save = function() {
            personsFactory.save();
            $window.location.hash = '/';
        };
    });