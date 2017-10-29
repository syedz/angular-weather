import template from './forecast.html';
import controller from './forecast.controller';
import './forecast.scss';

let forecastComponent = {
  bindings: {
    weather: '<'
  },
  template,
  controller
};

export default forecastComponent;
