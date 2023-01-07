import './Weather.css'

import { useState } from 'react';
import SearchCity from './SearchCity/SearchCity';
import WeatherResult from './WeatherResult/WeatherResult';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                <Card.Body>
                    <div>
                        {weather && <WeatherResult weather={weather}/>}
                    </div>                  
                </Card.Body>
                <Card.Footer className="text-muted">By Zhenhong Liu</Card.Footer>
            </Card>
            {/* <div className='weather'>
                <header className='weather-header'>
                    <h1>Weather Forecast 🌤️</h1>
                    <SearchCity search={onSearch}/>              
                </header>
                <div>
                {weather && <WeatherResult weather={weather}/>}
                </div>
            </div> */}
        </>
    );
}

export default Weather