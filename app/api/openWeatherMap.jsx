var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=39082f3563753b074cfedf739479e663';

//39082f3563753b074cfedf739479e663

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(response) {
			// if(response.data.cod && response.data.message) {
			if((response.data.cod && response.data.message !== 'accurate') || !response.data.list[0]) {
				throw new Error('Unable to fetch weather for that location');
			} else {
				return response.data.list[0].main.temp;
			}

		}, function(response) {
			throw new Error('Unable to fetch weather for that location');
		});
	}
};