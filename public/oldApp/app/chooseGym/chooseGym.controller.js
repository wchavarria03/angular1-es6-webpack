(function () {
  'use strict';
  angular.module('app')
    .controller('chooseGymController', [
      'chooseGymModal',
      '$state',
      '$stateParams',
      function chooseGymController(
        chooseGymModal,
        $state,
        $stateParams
      ) {
        var vm = this;

        var isFromLogin = true;
        vm.gyms = [];

        function openChooseModal() {
          chooseGymModal.open(vm.gyms, isFromLogin)
            .result
            .then(function(data) {
              if (data.gym) {
                //TODO Save the Gym information in the localstorage
                $state.go('app.dashboard');
              }
            },
            function(data) {
              console.log('closed modal');
            });
        }

        vm.$onInit = function() {
          vm.gyms = $stateParams.gyms || [];
          openChooseModal();
        };
      }]);
})();