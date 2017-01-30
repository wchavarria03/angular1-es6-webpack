(function() {
  'use strict';
  angular.module('app')
    .controller('menuController', [
      '$state',
      '$localStorage',
      '$rootScope',
      Menu]);

  function Menu(
    $state,
    $localStorage,
    $rootScope
  ) {
    var vm = this;

    vm.states = [];
    vm.currentMenuName = $state.current.menu;

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      vm.currentMenuName = toState.menu;
    });

    vm.logout = function logout() {
      $localStorage.userData = {};
      $state.go('login');
    };

    function getStateList() {
      var menus = $state.get();
      var result = _.filter(menus, function(menu) {
        if (menu.showInMenu) {
          return menu;
        }
      });

      return result;
    }

    function activate() {
      vm.states = getStateList();
    }

    activate();
  }
})();
