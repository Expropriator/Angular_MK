angular.module('factoryExample')
    .factory('personsFactory', function() {

        if(!localStorage.getItem('persons'))
            localStorage.setItem('persons', JSON.stringify([]));

        var persons = JSON.parse(localStorage.getItem('persons'));

        function save() {
            localStorage.setItem('persons', JSON.stringify(persons));
        }

        function get(id) {
            var result;
            angular.forEach(persons, function(person, i) {
                if(person.id == id) {
                    result = person;
                }
            });
            return result;
        }

        function add(person) {
            persons.push(person);
            save();
        }

        function remove(id) {
            angular.forEach(persons, function(person, i) {
                if(person.id == id) {
                    persons.splice(i, 1);
                }
            });
            save();
        }

        return {
            list: persons,
            add: add,
            remove: remove,
            get: get
        }
    });