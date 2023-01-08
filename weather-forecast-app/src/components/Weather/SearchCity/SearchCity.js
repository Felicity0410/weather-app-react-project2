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

    const onSearchButtonClick = async (event) => { 
        event.preventDefault()
        const weatherData = await fetchWeatherByCity(city)
        props.search(weatherData)
       
    }

    return (          
        <form onSubmit={onSearchButtonClick} className='search'>
            <div className='search-input'>
                <input type='text' placeholder='Search City...' onChange={onCityInputChange} value={city}/>
                <button type='submit'><FcSearch/></button>
            </div>
              
            <label className='search-checkbox'>
                <input type='checkbox' />      
                Show air quality   
            </label>
        </form>        
    )
}

export default SearchCity