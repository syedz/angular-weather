import template from './forecastList.html';
import controller from './forecastList.controller';
import './forecastList.scss';

let forecastListComponent = {
  restrict: 'E',
  bindings: {
    degree: '@',
    city: '@'
  },
  template,
  controller
};

export default forecastListComponent;
