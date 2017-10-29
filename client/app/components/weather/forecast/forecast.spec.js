import ForecastModule from './forecast';
import ForecastController from './forecast.controller';
import ForecastComponent from './forecast.component';
import ForecastTemplate from './forecast.html';

describe('Forecast', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForecastModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForecastController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a weather property', () => {
      let controller = makeController();
      expect(controller).to.have.property('weather');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has weather in template', () => {
      expect(ForecastTemplate).to.match(/{{\s?\$ctrl\.weather\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ForecastComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ForecastTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ForecastController);
    });
  });
});
