import nohConfig from './noh.config/noh.config.module';
import nohMessages from './noh.messages/noh.messages.module';

export default angular.module('noh.settings',
  [
    nohConfig,
    nohMessages
  ])
  .name;