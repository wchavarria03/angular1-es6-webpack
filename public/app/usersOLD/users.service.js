(function () {
  'use strict';
  angular.module('app')
    .service('UsersService', [
      '$http',
      'NOHCONFIG',
      '$localStorage',
      UsersService]);

  function UsersService($http, NOHCONFIG, $localStorage) {

    function getUser(id) {
      return $http.get(NOHCONFIG.URL + NOHCONFIG.API + 'user/' + id);
    }

    function getClients() {
      return $http.get(NOHCONFIG.URL + NOHCONFIG.API + 'user/GetClientsByGymId?gymId=' + $localStorage.userData.gym.id);
    }

    function getEmployees() {
      return $http.get(NOHCONFIG.URL + NOHCONFIG.API + 'user/GetEmployeesByGymId?gymId=' + $localStorage.userData.gym.id);
    }

    function getRoles() {
      return $http.get(NOHCONFIG.URL + NOHCONFIG.API + 'role/GetAll');
    }

    function createUser(user) {
      return $http.post(NOHCONFIG.URL + NOHCONFIG.API + 'user/Create', user);
    }

    return {
      getUser: getUser,
      getClients: getClients,
      getEmployees: getEmployees,
      getRoles: getRoles,
      createUser: createUser
    };
  }
})();
