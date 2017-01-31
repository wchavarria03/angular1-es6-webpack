(function () {
  'use strict';
  angular.module('app')
    .controller('dashboardController', [
      '$state',
      Dashboard]);

  function Dashboard($state) {
    var vm = this;
    vm.goToMembers = function goToMembers() {
      $state.go('members');
    };
  }
})();
