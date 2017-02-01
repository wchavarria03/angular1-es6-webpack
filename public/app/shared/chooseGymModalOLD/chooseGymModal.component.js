(function() {
  'use strict';
  angular.module('app')
    .component('chooseGymModalComponent', {
      templateUrl: 'app/shared/chooseGymModalOLD/chooseGymModalOLD.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: 'chooseGymModalController',
      controllerAs: 'vm'
    })
    .controller('chooseGymModalController', [
      function ChooseGymModalController() {
        var vm = this;

        vm.$onInit = function() {
          vm.items = vm.resolve.items;
          vm.isFromLogin = vm.resolve.isFromLogin;
          vm.selected = {
            item: vm.items[0]
          };
        };

        vm.selectGym = function() {
          if (vm.selected.item) {
            vm.close({$value: {gym: vm.selected.item}});
          }
        };

        vm.cancel = function() {
          vm.dismiss({$value: 'cancel'});
        };
      }
    ]);
})();