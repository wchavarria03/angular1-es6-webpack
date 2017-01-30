(function() {
  'use strict';
  angular.module('app')
    .controller('loginController', ['$state', '$localStorage', 'LoginService', Login]);

  function Login($state, $localStorage, LoginService) {
    var vm = this;

    vm.credentials = {};
    vm.error = false;
    vm.rememberMe = false;

    vm.login = function login() {
      vm.error = false;
      LoginService.login(vm.credentials)
        .then(function(response) {
          var data = response.data;
          if (data) {
            var user = data.result;
            /* TODO REMOVE remove/comment the following code if dont  want to force the select gym*/
            user.gyms.push({
              address: 'Ciudad Quesada, Alaljuela',
              creationDate: '2017-01-26T00:00:00',
              creatorUserId: 1,
              deleterUserId: null,
              deletionDate: null,
              emailAddress: 'fitcenter2@gmail.com',
              id: 3,
              isActive: true,
              isCustomPay: false,
              isDeleted: false,
              lastModificationDate: null,
              lastModifierUserId: null,
              name: 'Fitness Center 2',
              payDate: null,
              phoneNumber: '24534455'
            });
            /*TODO REMOVE*/

            if (user.gyms.length === 1) {
              $localStorage.userData = {
                name: user.userName,
                userId: user.userId,
                gym: user.gyms[0],
                rol: '', //TODO: save rol info
                rememberMe: vm.rememberMe
              };
              $state.go('app.dashboard');
            } else if (user.gyms.length > 1) {
              //TODO Need to save the gym information to the localStorage
              $state.go('chooseGym', {gyms: user.gyms});
            } else if (_.isEmpty(user.gyms)) {
              vm.error = true;
              vm.errorMsg = 'You does not have associated gyms.';
            } else {
              vm.error = true;
              vm.errorMsg = 'An error occurred, please contact support';
            }
          }
        })
        .catch(function (error) {
          vm.credentials.password = '';
          vm.error = true;
          vm.errorMsg = 'Incorrect username or password.';
        });
    };
  }
})();
