import Weather from '../models/Weather';

const getWeather = (lat:number, long:number):Promise<Weather>=>{
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=49f8541c5e9d0758175574596d1f532e`
    ).then(resp=>resp.json());
}

export { getWeather};