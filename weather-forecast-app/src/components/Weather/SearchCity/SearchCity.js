import './SearchCity.css'
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import { fetchWeatherByCity } from '../../../Services/WeatherService';

const SearchCity = (props) => {
    const [city, setCity] = useState('')
    

    const onCityInputChange = (event) => {
        const value = event.target.value
        setCity(value)
    }

    const onSearchButtonClick = async () => {   
        const weatherData = await fetchWeatherByCity(city)
        props.search(weatherData)
       
    }

    return (
        <div className='search'>
            <input type='text' placeholder='Search City...' onChange={onCityInputChange} value={city}/>
            <button onClick={onSearchButtonClick}><FcSearch/></button>
        </div>
    )
}

export default SearchCity