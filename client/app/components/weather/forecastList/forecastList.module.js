import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import weatherModule from '../weather.module';
import forecastListComponent from './forecastList.component';

let forecastListModule = angular.module(weatherModule)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('forecast', {
        url: '/forecast?degree',
        component: 'forecastList',
        params: {
          degree: {
            value: 'C'
          }
        },
        resolve: {
          fiveDayForecast: (WeatherFactory, $transition$) => {
            const degree = $transition$.params().degree;
            return WeatherFactory.getFiveDayForecast(degree);
          },
          degree: ($transition$) => $transition$.params().degree
        }
      });
  })
  .component('forecastList', forecastListComponent)
  .name;

export default forecastListModule;
