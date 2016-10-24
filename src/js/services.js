(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://localhost:8000/coffee';
    this.getAllCoffee = function() {
      return $http.get(baseURL);
    };
    this.addCoffee = function(coffee) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: coffee,
        headers: {'Content-Type': 'application/json'}
      });
    }
    this.greeting = 'hie';
  }
})();
