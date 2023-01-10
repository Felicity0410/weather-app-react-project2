import './SearchCity.css'
import { FcSearch } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../../../Services/WeatherService';


const SearchCity = (props) => {
    const [city, setCity] = useState('')
    const [button, setButton] = useState(false)
    const [check, setCheck] = useState(false)
    

    const onCityInputChange = (event) => {
        const value = event.target.value       
            setCity(value)   
        }
     
    useEffect(() => {
        if(city) {
            setButton(false)
        } else {
            setButton(true)
        }
    }, [city])

   

    const onCheckBoxClick = (event) => {
        const value = event.target.checked;
        console.log('from searchCity', value);
        setCheck(value)
        // setCheck(true)      
    }
    const onSearchButtonClick = async (event) => { 
        event.preventDefault()
        props.setLoading(true) 
        if (check) {
            props.setCheckBox(check)
        }

        try {
            const weatherData = await fetchWeatherByCity(city)
            props.search(weatherData)
        } catch (error) {
            console.error('Failed to fetch city weather due to error: ', error)
        } finally {
            props.setLoading(false)
        } 
                  
    }

    

    return (          
        <form onSubmit={onSearchButtonClick} className='search'>
            <div className='search-input'>
                <input type='text' placeholder='Search City...' onChange={onCityInputChange} value={city} minLength='2'/>
                <button type='submit' disabled={button}><FcSearch/></button>
            </div>
              
            <label className='search-checkbox'>
                <input type='checkbox' onClickCapture={onCheckBoxClick}/>      
                Show air quality   
            </label>
        </form>        
    )
}

export default SearchCity