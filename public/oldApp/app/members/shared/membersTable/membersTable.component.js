(function() {
  'use strict';
  angular.module('app')
    .component('membersTable', {
      templateUrl: 'app/members/shared/membersTable/membersTable.html',
      restrict: 'E',
      bindings: {
        members: '='
      },
      controller: 'membersTableController',
      controllerAs: 'membersTable'
    })
    .controller('membersTableController', [
      '$filter',
      '$scope',
      'NgTableParams',
      'nohMessages',
      'NOHCONFIG',
      function MembersTableController(
        $filter,
        $scope,
        NgTableParams,
        nohMessages,
        NOHCONFIG
      ) {
        var vm= this;
        vm.emptyResults = nohMessages.TABLE.RESULTS.EMPTY;
        vm.search = '';

        ///////////////////////////////
        /////     VM METHODS      /////
        ///////////////////////////////

        vm.tableParams = new NgTableParams(
          {
            data: [],
            page: 1,
            count: 10,
            sorting: {name: 'asc'}
          },
          {
            counts: vm.members.length > 10 ? NOHCONFIG.TABLE.CONFIG.PERPAGE : [],
            total: vm.members.length,
            getData: function(params) {
              var data = vm.members;
              data = _formatData(data);
              params.total(data.length);
              data = $filter('orderBy')(data, params.orderBy());
              data = params.filter() ? $filter('filter')(data, params.filter()) : data;
              return data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            }
          }
        );

        vm.searchEvent = function searchEvent(data) {
          vm.tableParams.filter({name: vm.search});
        };

        ///////////////////////////////
        /////  PRIVATE FUNCTIONS  /////
        ///////////////////////////////

        function _formatData(data) {
          _.each(data, function(item) {
            item.fullName = `${item.name} ${item.lastname}`;
          });
          return data;
        }
      }
    ]);
})();
