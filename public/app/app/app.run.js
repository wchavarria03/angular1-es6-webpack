run.$inject = ['$rootScope', '$state', 'AuthService'];

export default function run($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    if(!AuthService.isUserLoggedId() && next.name !== 'login') {
      event.preventDefault();
      $state.go('login');
    }
    if(AuthService.isUserLoggedId() && next.name === 'login') {
      event.preventDefault();
    }
  });
};