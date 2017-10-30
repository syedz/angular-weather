import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import weatherModule from '../weather.module';
import forecastListComponent from './forecastList.component';

let forecastListModule = angular.module(weatherModule)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('forecast', {
        url: '/forecast?degree&city',
        component: 'forecastList',
        params: {
          degree: {
            value: 'C'
          },
          city: {
            value: 'Toronto, CA'
          }
        },
        resolve: {
          degree: ($transition$) => $transition$.params().degree,
          city: ($transition$) => $transition$.params().city
        }
      });
  })
  .component('forecastList', forecastListComponent)
  .name;

export default forecastListModule;
