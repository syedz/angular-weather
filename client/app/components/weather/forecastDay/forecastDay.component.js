import template from './forecastDay.html';
import controller from './forecastDay.controller';
import './forecastDay.scss';

let forecastDayComponent = {
  bindings: {
    day: '<',
    degree: '@'
  },
  template,
  controller
};

export default forecastDayComponent;
