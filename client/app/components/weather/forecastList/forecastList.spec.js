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

  });

  describe('Template', () => {

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
