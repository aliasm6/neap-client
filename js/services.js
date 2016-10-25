(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService)
    .service('userService', userService);

  coffeeService.$inject = ['$http'];
  userService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://secret-peak-70898.herokuapp.com/';
    this.getAllCoffee = function() {
      return $http.get(baseURL);
    };
    this.addCoffee = function(coffee) {
      return $http({
        method: 'POST',
        url: baseURL + 'coffee',
        data: coffee,
        headers: {'Content-Type': 'application/json'}
      });
    };
    this.greeting = 'hie';
  }
  function userService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://secret-peak-70898.herokuapp.com/user/' ;
    this.test = 'hi';
    this.login = function(user) {
      $http({
        method: 'POST',
        url: baseURL + 'login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      })
    };
    this.register = function(user) {
      $http({
        method: 'POST',
        url: baseURL + 'register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      })
    }
  }
})();
