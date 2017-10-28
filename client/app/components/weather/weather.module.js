import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import WeatherFactory from './weather.factory';

let weatherModule = angular.module('components.weather', [
  uiRouter
])
.factory({
  WeatherFactory
})
.name;

export default weatherModule;
