'use strict';

let ChooseGymModalComponent = {
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: ChooseGymModalController,
  controllerAs: 'vm',
  template: require('../chooseGymModal/chooseGymModal.html')
};

class ChooseGymModalController {
  constructor () {
    this.name = 'david';
    this.items = this.resolve.items;
    this.isFromLogin = this.resolve.isFromLogin;
    this.selected = {
      item: this.items[0]
    };
  }

  selectGym () {
    if (this.selected.item) {
      this.close({$value: {gym: this.selected.item}});
    }
  }

  cancel() {
    this.dismiss({$value: 'cancel'});
  }
}

export default ChooseGymModalComponent;