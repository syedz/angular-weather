import angular from 'angular';

import weatherModule from '../weather.module';
import forecastListComponent from './forecastList.component';

let forecastListModule = angular.module(weatherModule)
  .config(($stateProvider, $urlRouterProvider) => {
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

    $urlRouterProvider.otherwise('/forecast?degree=C&city=Toronto');
  })
  .component('forecastList', forecastListComponent)
  .name;

export default forecastListModule;
