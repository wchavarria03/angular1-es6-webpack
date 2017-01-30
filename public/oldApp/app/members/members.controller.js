(function() {
  'use strict';
  angular.module('app')
    .controller('membersController', [
      'MembersService',
      '$state',
      function MembersController(
        MembersService,
        $state
      ) {
        var vm = this;

        vm.members = [];
        vm.todos = [];

        vm.goCreate = function goCreate(){
          $state.go('user');
        };

        ///////////////////////////////
        /////   PRIVATE METHODS   /////
        ///////////////////////////////
        function _getMembers() {
          vm.loading = true;
          MembersService.member.getMembers()
            .then(function(response) {
              vm.members = response.data;
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
          _getMembers();
        }

        _activate();
      }]);
})();
