(function() {
  'use strict';
  angular.module('app')
    .component('nohTabs', {
      controller: 'nohTabsController',
      templateUrl: 'app/shared/noh-tabs/noh-tabs.html',
      transclude: true
    })
    .controller('nohTabsController', [
      function nohTabsController() {
        var vm = this;
        var tabs = vm.tabs = [];

        vm.setTab = function(newTab) {
          angular.forEach(tabs, function(tab) {
            tab.selected = false;
          });
          newTab.selected = true;
        };

        vm.addTab = function(tab) {
          if (tabs.length === 0) {
            vm.setTab(tab);
          }
          tabs.push(tab);
        };
      }])
    .component('nohTab', {
      bindings: {
        title: '@'
      },
      controller: 'nohTabController',
      require: {
        tabsCtrl: '^nohTabs'
      },
      transclude: true,
      template: '<div class="tab-pane" ng-show="$ctrl.selected" ng-transclude></div>'
    })
    .controller('nohTabController', [function NohTabController() {
      this.$onInit = function() {
        this.tabsCtrl.addTab(this);
      };
    }]);
})();