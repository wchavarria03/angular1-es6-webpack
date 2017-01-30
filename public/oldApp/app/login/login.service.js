(function () {
  'use strict';
  angular.module('app').service('LoginService', [
    '$http',
    'NOHCONFIG',
    LoginService]);

  function LoginService($http, NOHCONFIG) {
    function login(credentials) {
      var url = NOHCONFIG.URL + NOHCONFIG.ACCOUNT;
      return $http.post(url, credentials);
    }

    function logout() {
      //TODO: clean all localstorage and do a $state.go('login')
    }

    return {
      login: login,
      logout: logout
    };
  }
})();
