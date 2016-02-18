
    var weatherData = {};
$(document).ready(function(){
  var baseUrl = 'https://api.forecast.io/forecast/';

  $('#get-weather').on('click', getWeather);


  function buildUrl(lat, lon){
    // return 'https://api.forecast.io/forecast/9a1a8e934b9478b1ba2b389e84e45d06/37.8267,-122.423'
      return baseUrl + apiKey+'/'+lat+','+lon;
  }

  function getWeather(){
    var lat = $('#latitude').val();
    var lon = $('#longitude').val();
    var options = {
      url: buildUrl(lat, lon),
      dataType: 'jsonp',
      success: successHandler,
      error: errorHandler
    };

    $.ajax(options);
  }

  function successHandler(data){
    weatherData = data;
    $('#output').text(JSON.stringify(data));
    console.log(data);
  }

  function errorHandler(err){
    console.log(err);
  }
});
