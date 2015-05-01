'use strict';

angular.module('starter')
.controller('HomeTodayCtrl', function($scope, $timeout, $http, dateFilter, WeatherService) {

  $scope.updateTime = function() {
    $timeout(function() {
      $scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
      $scope.updateTime();
    }, 1000);
  };

  $scope.updateTime();

  WeatherService.getData()
  .then(function(data) {
    $scope.city = data.location.city;
    var day = [];
    for (var i = 0; i < 4; i++) {
      day.push({
        image: data.forecast.simpleforecast.forecastday[i].icon_url,
        high_f: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
        low_f: data.forecast.simpleforecast.forecastday[i].low.fahrenheit,
        humidity: data.forecast.simpleforecast.forecastday[i].avehumidity,
        description: data.forecast.simpleforecast.forecastday[i].conditions,
        weekday: data.forecast.simpleforecast.forecastday[i].date.weekday
      });
    }
                //console.log(day);
                $scope.everyday = day;
              })
  .catch(function() {
    console.log('Failed to get weather!');
  });
});
