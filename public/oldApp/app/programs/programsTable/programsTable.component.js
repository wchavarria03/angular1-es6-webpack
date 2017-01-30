(function() {
  'use strict';

  angular.module('app')
    .component('programsTable', {
      bindings: {
        programs: '='
      },
      controller: 'ProgramsTableController',
      controllerAs: 'programsTable',
      restrict: 'E',
      templateUrl: 'app/programs/programsTable/programsTable.html'
    })
    .controller('ProgramsTableController', [
      '$filter',
      '$scope',
      'NgTableParams',
      'nohMessages',
      'NOHCONFIG',
      function ProgramsTableController(
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
            counts: vm.programs.length > 10 ? NOHCONFIG.TABLE.CONFIG.PERPAGE : [],
            total: vm.programs.length,
            getData: function(params) {
              var data = vm.programs;
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


      }]);
})();