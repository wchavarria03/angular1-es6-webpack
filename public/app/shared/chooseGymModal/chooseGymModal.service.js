class ChooseGymModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }
  open(items, isFromLogin) {
    return this.$uibModal.open({
      animation: true,
      backdrop: 'static',
      keyboard: !isFromLogin,
      component: 'chooseGymModalComponent',
      resolve: {
        items: function() {
          return items;
        },
        isFromLogin: function() {
          return isFromLogin || false;
        }
      },
      size: 'md'
    });
  }
}

ChooseGymModalService.$inject = ['$uibModal'];

export default ChooseGymModalService;