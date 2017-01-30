class LoginService {
  constructor($http, NOHCONFIG) {
    this.$http = $http;
    this.NOHCONFIG = NOHCONFIG;
  }

  login(credentials) {
    let url = this.NOHCONFIG.URL + this.NOHCONFIG.ACCOUNT;
    return this.$http.post(url, credentials);
  }

  logout() {
    //TODO: clean all localstorage and do a $state.go('login')
  }
}

LoginService.$inject = ['$http', 'NOHCONFIG',];

export default LoginService;