import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import weatherModule from '../weather.module';
import forecastListComponent from './forecastList.component';

let forecastListModule = angular.module(weatherModule)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('forecast', {
        url: '/forecast',
        component: 'forecastList',
        resolve: {
          fiveDayForecast: (WeatherFactory) => WeatherFactory.getFiveDayForecast()
        }
      });
  })
  .component('forecastList', forecastListComponent)
  .name;

export default forecastListModule;
