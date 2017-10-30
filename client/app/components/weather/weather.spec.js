import WeatherModule from './weather.module'
import WeatherFactory from './weather.factory'

let weatherService,
    deferred,
    _$rootScope,
    _$httpBackend,
    _$q,
    mockFiveDayForecastResponse;

describe('WeatherFactory', () => {
  beforeEach(angular.mock.module(WeatherModule));

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
    }

    _$q            = $injector.get('$q');
    _$httpBackend  = $injector.get('$httpBackend');
    _$rootScope    = $injector.get('$rootScope').$new();
    weatherService = $injector.get('WeatherFactory');

    deferred = _$q.defer();
  }));

  beforeEach(() => {
    spyOn(weatherService, 'getFiveDayForecast').and.returnValue(deferred.promise);
  });

  it('should get the weather', (done) => {
    deferred.resolve(mockFiveDayForecastResponse);

    weatherService
      .getFiveDayForecast()
      .then((res) => {
        if (res.cod == 200) { done(); }
      });

    _$rootScope.$apply();
  });
});
