(function() {
  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    const vm = this;
    vm.form = false;
    vm.showForm = function () {
      vm.form = true;
    }
    coffeeService.getAllCoffee()
    .then((coffee) => {vm.coffee = coffee.data.data;})
    .catch((err) => {console.log(err);});

  }
})();
