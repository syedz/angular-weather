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
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/forecast');
  })
  .constant('CONFIG', {
    apiKey: '8caa3a62ba1f3b52d931888f38d1bc75',
    openWeatherBaseUrl: 'https://api.openweathermap.org/data/2.5/'
  })
  .component('root', AppComponent);
