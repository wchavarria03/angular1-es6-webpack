routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
  //TODO: add a resolve function for each route and valid if logged in user have permissons
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('../login/login.html'),
      controller: 'loginController',
      controllerAs: 'login',
      showInMenu: false
    })
    .state('app', {
      url: '/app',
      template: require('../menu/menu.html'),
      controller: 'menuController',
      controllerAs: 'menu',
      abstract: true,
      showInMenu: false
    })
    .state('app.dashboard', {
      url: '/dashboard',
      template: require('../dashboard/dashboard.html'),
      controller: 'dashboardController',
      controllerAs: 'dashboard',
      menu: 'Dashboard',
      showInMenu: true
    })
    .state('chooseGym', {
      url: '/chooseGym',
      template: require('../chooseGym/chooseGym.html'),
      controller: 'chooseGymController',
      controllerAs: 'chooseGym',
      params: {gyms: null},
      showInMenu: false
    })/*
    .state('app.clients', {
      url: '/clients',
      templateUrl: 'app/users/clients/clients.html',
      controller: 'clientsController',
      controllerAs: 'clients',
      menu: 'Clients',
      showInMenu: true
    })
    .state('app.employees', {
      url: '/employees',
      templateUrl: 'app/users/employees/employees.html',
      controller: 'employeesController',
      controllerAs: 'employees',
      menu: 'Employees',
      showInMenu: true
    })
    .state('app.userClient', {
      url: '/client/:id',
      templateUrl: 'app/users/user/user.html',
      controller: 'userController',
      controllerAs: 'user',
      menu: 'Clients',
      showInMenu: false
    })
    .state('app.userEmployee', {
      url: '/employee/:id',
      templateUrl: 'app/users/user/user.html',
      controller: 'userController',
      controllerAs: 'user',
      menu: 'Employees',
      showInMenu: false
    })
  /*.state('programs', {
   url: '/programs/:userId',
   templateUrl: 'app/programs/programs.html',
   controller: 'programsController',
   controllerAs: 'programs'
   })
   .state('user', {
   url: '/user/:id',
   templateUrl: 'app/user/user.html',
   controller: 'userController',
   controllerAs: 'user'
   })*/;

  $urlRouterProvider.otherwise('/login');
}