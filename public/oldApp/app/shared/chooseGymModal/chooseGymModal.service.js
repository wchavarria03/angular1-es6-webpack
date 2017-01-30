(function() {
  'use strict';
  angular.module('app')
    .service('chooseGymModal', [
      '$uibModal',
      function chooseGymModal($uibModal) {
        this.open = function(items, isFromLogin) {
          return $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: !isFromLogin,
            component: 'chooseGymModalComponent',
            resolve: {
              items: function() {
                return items;
              },
              isFromLogin: function() {
                return isFromLogin || false;
              }
            },
            size: 'md'
          });
        };
      }
    ]);
})();