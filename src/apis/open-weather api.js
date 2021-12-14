import axios from 'axios';
const API_KEY = 'd3a38fc9337b84f9ac63a811a32f9468';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';
const appIdQueryParam = `appid=${API_KEY}`
function getCurrentWeather(Location){


return axios.get(

    `weather?q=${Location}&units=imperial&${appIdQueryParam}`
);

}
function getForecast(lat,lon){
return axios.get(
`onecall?lat=${lat}&lon=${lon}&units=imperial&${appIdQueryParam}`
)
}

function getForecasts(lat,lon){
    return axios.get(
    `onecall?lat=${lat}&lon=${lon}&units=imperial&${appIdQueryParam}`
    )
    }
export{
    getCurrentWeather,
    getForecast,
    getForecasts,
}