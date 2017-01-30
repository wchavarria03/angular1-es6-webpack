class LoginController {
  constructor($state, $localStorage, LoginService) {
    this.name = 'World';
    this.credentials = {};
    this.error = false;
    this.rememberMe = false;
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.LoginService = LoginService;
  }

  login() {
    this.error = false;
    LoginService.login(this.credentials)
      .then((response) => {
        let data = response.data;
        if (data) {
          let user = data.result;
          /* TODO REMOVE remove/comment the following code if dont  want to force the select gym*/
          user.gyms.push({
            address: 'Ciudad Quesada, Alaljuela',
            creationDate: '2017-01-26T00:00:00',
            creatorUserId: 1,
            deleterUserId: null,
            deletionDate: null,
            emailAddress: 'fitcenter2@gmail.com',
            id: 3,
            isActive: true,
            isCustomPay: false,
            isDeleted: false,
            lastModificationDate: null,
            lastModifierUserId: null,
            name: 'Fitness Center 2',
            payDate: null,
            phoneNumber: '24534455'
          });
          /*TODO REMOVE*/

          if (user.gyms.length === 1) {
            $localStorage.userData = {
              name: user.userName,
              userId: user.userId,
              gym: user.gyms[0],
              rol: '', //TODO: save rol info
              rememberMe: vm.rememberMe
            };
            $state.go('app.dashboard');
          } else if (user.gyms.length > 1) {
            //TODO Need to save the gym information to the localStorage
            $state.go('chooseGym', {gyms: user.gyms});
          } else if (_.isEmpty(user.gyms)) {
            this.error = true;
            this.errorMsg = 'You does not have associated gyms.';
          } else {
            this.error = true;
            this.errorMsg = 'An error occurred, please contact support';
          }
        }
      })
      .catch((error) => {
        this.credentials.password = '';
        this.error = true;
        this.errorMsg = 'Incorrect username or password.';
      });
  }
}

LoginController.$inject = ['$state', '$localStorage', 'LoginService'];

export default LoginController;