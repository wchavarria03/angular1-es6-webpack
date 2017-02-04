(function() {
  'use strict';
  angular.module('app')
    .controller('userController', ['UsersService', '$state', '$stateParams', '$localStorage', User]);

  function User(UsersService, $state, $stateParams, $localStorage) {
    var vm = this;
    var userId = $stateParams.id;
    var state = $state.current.name;

    vm.user = {};
    vm.showFields = false;
    vm.roles = [];

    vm.showFieldsToUpdate = function showFieldsToUpdate(show){
      vm.showFields = show;
      if (show) {
        vm.userCopy = angular.copy(vm.user);
      } else {
        if(userId){
          vm.user = angular.copy(vm.userCopy);
        } else {
          var toState = state === 'app.userClient' ? 'app.clients' : 'app.employees';
          $state.go(toState);
        }
      }
    };

    vm.create = function create(){
      var userToCreate = angular.copy(vm.user);
      userToCreate.userName = userToCreate.emailAddress;
      userToCreate.surname = userToCreate.name;
      userToCreate.password = 'password';
      userToCreate.userGymRelation = {
        userId: 0,
        gymId: $localStorage.userData.gym.id,
        isPaid: true,
        isActive: true,
        payDate: new Date()
      };
      UsersService.createUser(userToCreate)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          //TODO: use a frendly way to show the user that an error ocurred
        });
    };

    vm.update = function update() {
      //TODO: call service to send data to update
    };

    function getUser(id) {
      vm.loading = true;
      UsersService.getUser(id)
        .then(function(response) {
          var data = response.data;

          if (data) {
            vm.user = data;
          }
        })
        .catch(function(error) {
          //TODO: use a frendly way to show the user that an error ocurred
          $state.go('dashboard');
        });
    }

    function setViewByCurrentState() {
      vm.userName = state === 'app.userClient' ? 'Client' : 'Employee';
      vm.isClientView = state === 'app.userClient';
    }

    function getRoles() {
      UsersService.getRoles()
        .then(function(response) {
          var data = response.data;
          if (data) {
            vm.roles = _.filter(data.result, function(role) {
              if (_.lowerCase(role.name) !== 'admin') {
                return role;
              }
            });
          }
        })
        .catch(function (error) {
          //TODO: use a frendly way to show the user that an error ocurred
        });
    }

    function activate(){
      setViewByCurrentState();
      getRoles();
      if (userId) {
        getUser(userId);
        vm.showFields = false;
        vm.isCreating = false;
      }	else {
        vm.showFields = true;
        vm.isCreating = true;
      }
    }

    activate();
  }
})();