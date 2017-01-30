const NOHMESSAGES = {
  TABLE: {
    RESULTS: {
      EMPTY : 'No se encontró información'
    }
  }
};

export default angular.module('noh.messages', [])
  .constant('nohMessages', NOHMESSAGES)
  .name;