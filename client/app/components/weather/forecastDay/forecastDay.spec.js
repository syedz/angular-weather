import WeatherModule from '../weather.module'

import ForecastDayModule from './forecastDay.module'
import ForecastDayController from './forecastDay.controller';
import ForecastDayComponent from './forecastDay.component';
import ForecastDayTemplate from './forecastDay.html';

describe('ForecastDay', () => {
  beforeEach(angular.mock.module(WeatherModule));

  describe('Controller', () => {
    let $componentController,
        controller,
        mockDay = {
           "dt":1509382800,
           "temp":{
              "day":6.19,
              "min":4.89,
              "max":6.19,
              "night":4.89,
              "eve":6.19,
              "morn":6.19
           },
           "pressure":996.25,
           "humidity":80,
           "weather":[
              {
                 "id":800,
                 "main":"Clear",
                 "description":"sky is clear",
                 "icon":"01n"
              }
           ],
           "speed":8.97,
           "deg":258,
           "clouds":0
        },
        mockDegree = 'C';

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');

      controller = $componentController('forecastDay',
        { $scope: {} },
        {
          day: mockDay,
          degree: mockDegree
        }
      );
    }));

    it('should set the day property', () => {
      controller.$onChanges(mockDay);

      expect(controller.day).toBeDefined();
      expect(controller.day).toEqual(mockDay);
    });

    it('should set the degree property', () => {
      controller.$onChanges(mockDay);

      expect(controller.degree).toBeDefined();
      expect(controller.degree).toEqual(mockDegree);
    });
  });

  describe('Template', () => {
    it('has day in template', () => {
      expect(ForecastDayTemplate).toMatch(/\$ctrl\.day/g);
    });

    it('has degree in template', () => {
      expect(ForecastDayTemplate).toMatch(/\$ctrl\.degree/g);
    });
  });

  describe('Component', () => {
    let component = ForecastDayComponent;

    it('includes the intended template', () => {
      expect(component.template).toBe(ForecastDayTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toBe(ForecastDayController);
    });
  });
});
