(function() {
  'use strict';
  angular.module('app')
    .controller('programsController', [
      '$stateParams',
      'ProgramsService',
      function ProgramsController(
        $stateParams,
        ProgramsService
      ) {
        var vm = this;
        vm.userId = $stateParams.userId || 0;

        ///////////////////////////////
        /////   PRIVATE METHODS   /////
        ///////////////////////////////
        function _getProgramsByUserId() {
          vm.loading = true;
          ProgramsService.getProgramsByUserId(vm.userId)
            .then(function(response) {
              vm.programs = response.data;
            })
            .catch(function(error) {
              //TODO: Change the console.log for something more user friendly
              console.error(error);
            })
            .finally(function(){
              vm.loading = false;
            });
        }

        ///////////////////////////////
        /////    INIT METHODS     /////
        ///////////////////////////////
        function _activate() {
          _getProgramsByUserId();
        }

        _activate();
      }
    ]);
})();