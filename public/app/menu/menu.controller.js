class MenuController {
  constructor($state, $localStorage, $rootScope) {
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.$rootScope = $rootScope;
    this.states = [];
    this.currentMenuName = this.$state.current.menu;

    this.activate();
  }

  logout () {
    this.$localStorage.userData = {};
    this.$state.go('login');
  }

  getStateList() {
    let menus = this.$state.get();
    return _.filter(menus, function(menu) {
      if (menu.showInMenu) {
        return menu;
      }
    });
  }

  activate() {
    this.$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      this.currentMenuName = toState.menu;
    });
    this.states = this.getStateList();
  }
}

MenuController.$inject = ['$state', '$localStorage', '$rootScope',];

export default MenuController;
