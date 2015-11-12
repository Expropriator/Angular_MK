angular.module('factoryExample')
    .controller('PersonListCtrl', function($scope, personsFactory) {
        $scope.persons = personsFactory.list;
        $scope.remove = function(id) {
            personsFactory.remove(id);
        }
    })
    .controller('PersonAddCtrl', function($scope, personsFactory) {
        $scope.person = {};

        $scope.add = function() {
            personsFactory.add($scope.person);
            $scope.person = {};
        }
    })
    .controller('PersonEditCtrl', function() {

    });