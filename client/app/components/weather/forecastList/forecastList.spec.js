import WeatherModule from '../weather.module'
import WeatherFactory from '../weather.factory';

import ForecastListModule from './forecastList.module'
import ForecastListController from './forecastList.controller';
import ForecastListComponent from './forecastList.component';
import ForecastListTemplate from './forecastList.html';

let mockFiveDayForecastResponse,
    mockDegree,
    mockCity,
    weatherFactory,
    deferred,
    _$location,
    _$rootScope,
    _$state,
    _$q;

describe('ForecastList', () => {
  beforeEach(angular.mock.module(WeatherModule));

  beforeEach(() => {
    angular.mock.module({
      $stateProvider: jasmine.createSpyObj('$stateProvider',
        ['state']
      )
    });
  });

  beforeEach(() => {
    angular.mock.module({
      CONFIG: jasmine.createSpy('CONFIG',
        {
          apiKey: 'some-api-key',
          openWeatherBaseUrl: 'https://someurl.com/api/'
        }
      )
    });
  });

  beforeEach(inject(($injector) => {
    _$state        = $injector.get('$state');
    _$q            = $injector.get('$q');
    _$location     = $injector.get('$location');
    _$rootScope    = $injector.get('$rootScope').$new();
    weatherFactory = $injector.get('WeatherFactory');

    mockDegree = 'C',
    mockCity   = 'Toronto, CA',
    deferred   = _$q.defer(),
    mockFiveDayForecastResponse = {
       "city":{
          "id":6167865,
          "name":"Toronto",
          "coord":{
             "lon":-79.4163,
             "lat":43.7001
          },
          "country":"CA",
          "population":0
       },
       "cod":"200",
       "message":0.2772952,
       "cnt":7,
       "list":[
          {
             "dt":1509382800,
             "temp":{
                "day":6.61,
                "min":5.09,
                "max":6.61,
                "night":5.09,
                "eve":6.28,
                "morn":6.61
             },
             "pressure":993.44,
             "humidity":79,
             "weather":[
                {
                   "id":500,
                   "main":"Rain",
                   "description":"light rain",
                   "icon":"10d"
                }
             ],
             "speed":10.62,
             "deg":256,
             "clouds":48
          }
       ]
    };
  }));

  describe('Module', () => {
    xit('default component should be forecastList', () => {
      _$location.url('/');
      _$rootScope.$digest();
      console.log(_$state.current);
      expect(_$state.current.component).toEqual('forecastList');
    });
  });

  describe('Controller', () => {
    let $componentController,
        controller;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');

      controller = $componentController('forecastList',
        { $scope: {} },
        {
          degree: mockDegree,
          city: mockCity
        }
      );
    }));

    it('should set the _$state property', () => {
      expect(controller._$state).toBeDefined();
      expect(controller._$state).toEqual(_$state);
    });

    it('should set the _WeatherFactory property', () => {
      expect(controller._WeatherFactory).toBeDefined();
      expect(controller._WeatherFactory).toEqual(weatherFactory);
    });

    it('should set the degree property', () => {
      expect(controller.degree).toBeDefined();
      expect(controller.degree).toEqual(mockDegree);
    });

    it('should set the city property', () => {
      expect(controller.city).toBeDefined();
      expect(controller.city).toEqual(mockCity);
    });

    it('should call updateCity from $onInit', () => {
      spyOn(controller, 'updateCity').and.callThrough();
      controller.$onInit();

      expect(controller.updateCity).toHaveBeenCalled();
    });

    it('should call weatherFactory from updateCity', () => {
      spyOn(controller, 'updateCity').and.callThrough();
      spyOn(weatherFactory, 'getFiveDayForecast').and.callThrough();

      controller.updateCity();

      expect(controller.updateCity).toHaveBeenCalled();
      expect(weatherFactory.getFiveDayForecast).toHaveBeenCalled();
    });

    it('should set fiveDayForecast from updateCity', () => {
      deferred.resolve(mockFiveDayForecastResponse);
      spyOn(controller, 'updateCity').and.callFake(() => {
        controller.fiveDayForecast = mockFiveDayForecastResponse;
        controller.error = null;
      });

      controller.$onInit();

      expect(controller.updateCity).toHaveBeenCalled();
      expect(controller.fiveDayForecast).toBeDefined();
      expect(controller.fiveDayForecast).toEqual(mockFiveDayForecastResponse);
    });
  });

  describe('Template', () => {
    it('has fiveDayForecast in template', () => {
      expect(ForecastListTemplate).toMatch(/\$ctrl\.fiveDayForecast/g);
    });

    it('has degree in template', () => {
      expect(ForecastListTemplate).toMatch(/\$ctrl\.degree/g);
    });

    it('has city in template', () => {
      expect(ForecastListTemplate).toMatch(/\$ctrl\.city/g);
    });

    it('has error in template', () => {
      expect(ForecastListTemplate).toMatch(/\$ctrl\.error/g);
    });
  });

  describe('Component', () => {
    let component = ForecastListComponent;

    it('includes the intended template',() => {
      expect(component.template).toBe(ForecastListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toBe(ForecastListController);
    });
  });
});
