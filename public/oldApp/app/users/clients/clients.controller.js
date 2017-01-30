(function() {
  'use strict';
  angular.module('app')
    .controller('clientsController', [
      '$state',
      'UsersService',
      Clients]);

  function Clients($state, UsersService) {
    var vm = this;

    vm.clients = [];

    vm.goAdd = function goAdd() {
      $state.go('app.userClient');
    };

    function getClients() {
      UsersService.getClients()
        .then(function(response){
          var data = response.data;

          if (data) {
            vm.clients = data.result;
          }
        })
        .catch(function (error){
          //TODO: display an error
        });
    }

    function activate() {
      getClients();
    }

    activate();
  }
})();
