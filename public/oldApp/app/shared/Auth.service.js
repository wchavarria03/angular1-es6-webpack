(function () {
  'use strict';
  angular.module('app').service('AuthService', [
    '$localStorage',
    AuthService]);

  function AuthService($localStorage) {
    function isUserLoggedId() {
        var userData = $localStorage.userData;
        if(userData && !_.isEmpty(userData)) {
            return true;
        }
        return false;
    }

    return {
      isUserLoggedId: isUserLoggedId
    };
  }
})();
