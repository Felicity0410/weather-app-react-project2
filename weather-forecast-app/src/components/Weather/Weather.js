import './Weather.css'

import { useState } from 'react';
import SearchCity from './SearchCity/SearchCity';
import WeatherResult from './WeatherResult/WeatherResult';
import Card from 'react-bootstrap/Card';
import HourlyResult from './HourlyResult/HourlyResult';

const Weather = () => {

    const [weather, setWeather] = useState(undefined)
    //初始时，还没有city，更不会有weather，所以不用''空string，而是undefined，还没有被定义的

    const onSearch = (weatherData) => {
        setWeather(weatherData)
    }

    return (
        <>
            <Card className="text-center weather-card">
                <Card.Header className="weather-header">
                    <h1>Weather Forecast 🌤️</h1>
                    <SearchCity search={onSearch}/>  
                </Card.Header>
                <Card.Body className='weather-body'>
                    <div className='weather-main'>
                        {weather && <WeatherResult weather={weather}/>}
                    </div>
                    <div className='weather-hourly'>
                        {weather && <HourlyResult weather={weather}/>}
                    </div>                  
                </Card.Body>                
                <Card.Footer className="text-muted">By Zhenhong Liu</Card.Footer>
            </Card>

        </>
    );
}

export default Weather