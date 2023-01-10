const API_KEY = '321b01d18ab84f87b0050745230301'
const FETCH_CITY_WEATHER_URL = 'http://api.weatherapi.com/v1/forecast.json'

export const fetchWeatherByCity = async (city) => {
    const url = new URL(FETCH_CITY_WEATHER_URL)
    url.searchParams.append('key', API_KEY)
    url.searchParams.append('q', city)
    url.searchParams.append('days', '3')
    url.searchParams.append('aqi', 'yes')
    url.searchParams.append('alerts', 'yes')


    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('from weather services',error);
    }
    
}



