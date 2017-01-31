class DashboardController {
  constructor($state) {
    this.$state = $state;
  }

  goToMembers () {
    console.log('In progress...');
    //this.$state.go('members');
  }
}
DashboardController.$inject = ['$state'];

export default DashboardController;