var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=eeccd3aebb094cb514242400529e1adb&units=metric';


module.exports = {
  getWeatherDetails: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error('Unable to find city');
      } else {
        return {
          temp:res.data.main.temp,
          icon:res.data.weather[0].icon,
        };
      }
    }, function(res){
      throw new Error('Unable to find city');
    });
},

  }
