import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularLoadingBar from 'angular-loading-bar';
import 'angular-bootstrap';
import 'ng-table';
import 'ngStorage';

import routing from './app.routes';
import run from './app.run';


import LoginService from '../login/login.service';
import AuthService from '../shared/Auth.service';
import ChooseGymModal from '../shared/chooseGymModal/chooseGymModal.service';
import LoginController from '../login/login.controller';
import MenuController from '../menu/menu.controller';
import NohSettings from '../config/noh.settings.module';

export default angular.module('app', [
  uirouter,
  'ui.bootstrap',
  angularLoadingBar,
  'ngTable',
  NohSettings,
  'ngStorage'
])
  .config(routing)
  .run(run)
  .service('AuthService', AuthService)
  .service('LoginService', LoginService)
  .service('chooseGymModal', ChooseGymModal)
  .controller('loginController', LoginController)
  .controller('menuController', MenuController)
  .name;