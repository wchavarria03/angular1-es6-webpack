(function() {
  'use strict';
  angular.module('noh.config')
    .constant('NOHCONFIG', {
      TABLE: {
        CONFIG: {
          PERPAGE: [10, 25, 50, 100]
        }
      },
      URL: 'http://localhost:8082/',
      API: 'api/services/app/',
      ACCOUNT: 'Account/Login'
    });
})();