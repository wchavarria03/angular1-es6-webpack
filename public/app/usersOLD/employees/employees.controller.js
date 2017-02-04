(function() {
  'use strict';
  angular.module('app')
    .controller('employeesController', [
      '$state',
      'UsersService',
      Employees]);

  function Employees($state, UsersService) {
    var vm = this;

    vm.employees = [];

    vm.goAdd = function goAdd() {
      $state.go('app.userEmployee');
    };

    function getEmployees() {
      UsersService.getEmployees()
        .then(function(response){
          var data = response.data;

          if (data) {
            vm.employees = data.result;
          }
        })
        .catch(function (error){
          //TODO: display an error
        });
    }

    function activate() {
      getEmployees();
    }

    activate();
  }
})();
