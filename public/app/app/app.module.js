import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularLoadingBar from 'angular-loading-bar';
import 'angular-bootstrap';
import 'ng-table';
import 'ngStorage';
import 'lodash';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

//styles
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/main.scss';

import routing from './app.routes';
import run from './app.run';

//services
import LoginService from '../login/login.service';
import ChooseGymModal from '../shared/chooseGymModal/chooseGymModal.service';
import AuthService from '../shared/Auth.service';
import FakeService from '../services/fake.service';
import MembersService from '../services/member.service';

//controllers
import ChooseGymController from '../chooseGym/chooseGym.controller';
import DashboardController from '../dashboard/dashboard.controller';
import LoginController from '../login/login.controller';
import MenuController from '../menu/menu.controller';

//components
import ChooseGymModalController from '../shared/chooseGymModal/chooseGymModal.component';

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
  .service('chooseGymModal', ChooseGymModal)
  .service('LoginService', LoginService)
  .service('FakeService', FakeService)
  .service('MembersService', MembersService)
  .controller('chooseGymController', ChooseGymController)
  .controller('dashboardController', DashboardController)
  .controller('loginController', LoginController)
  .controller('menuController', MenuController)
  .component('chooseGymModalComponent', ChooseGymModalController)
  .name;