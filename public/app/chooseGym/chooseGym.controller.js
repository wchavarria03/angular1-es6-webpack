class ChooseGymController {
  constructor(chooseGymModal, $state, $stateParams) {
    this.chooseGymModal = chooseGymModal;
    this.$state = $state;
    this.$stateParmas = $stateParams;
    this.isFromLogin = true;
    this.gyms = [];
  }

  openChooseModal() {
    this.chooseGymModal.open(this.gyms, this.isFromLogin)
      .result
      .then((data) => {
          if (data.gym) {
            //TODO Save the Gym information in the localstorage
            this.$state.go('app.dashboard');
          }
        },
        (data) => {
          console.log('closed modal');
        });
  }

  $onInit () {
    this.gyms = this.$stateParams.gyms || [];
    this.openChooseModal();
  }
}

ChooseGymController.$inject = ['chooseGymModal', '$state', '$stateParams'];

export default ChooseGymController;