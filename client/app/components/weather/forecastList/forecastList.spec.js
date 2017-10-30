import ForecastListModule from './forecastList.module';
import ForecastListController from './forecastList.controller';
import ForecastListComponent from './forecastList.component';
import ForecastListTemplate from './forecastList.html';

describe('ForecastList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForecastListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForecastListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ForecastListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ForecastListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ForecastListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ForecastListController);
    });
  });
});
