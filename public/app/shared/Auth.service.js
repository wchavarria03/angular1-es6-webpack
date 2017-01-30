class AuthService {
  constructor($localStorage) {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
    this.$localStorage = $localStorage;
  }

  isUserLoggedId() {
    let userData = this.$localStorage.userData;
    return userData && !_.isEmpty(userData);
  }
}

AuthService.$inject = ['$localStorage'];
export default AuthService;