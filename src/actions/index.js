import axios from 'axios';

const API_KEY = '35ab16ce21b847a36ece6eaba0df9244';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) { 
    console.log(city);
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request)
    return {
        type: 'FETCH_WEATHER',
        payload: request   
    }
}


