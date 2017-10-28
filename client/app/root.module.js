import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common.module';
import Components from './components/components.module';
import AppComponent from './root.component';
import 'normalize.css';

angular.module('root', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('root', AppComponent);
