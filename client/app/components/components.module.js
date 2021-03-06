import angular from 'angular';

import Weather from './weather/weather.module'

import ForecastDay from './weather/forecastDay/forecastDay.module'
import ForecastList from './weather/forecastList/forecastList.module'

let componentModule = angular.module('root.components', [
  Weather
])
.name;

export default componentModule;
