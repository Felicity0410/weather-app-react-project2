import './SearchCity.css'
import { FcSearch } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../../../Services/WeatherService';
// import { getUserIpLocation } from '../../../Services/Ipgeolation';
// import { getUserIpCity } from '../../../Services/Ip2location';




const SearchCity = (props) => {
    const [city, setCity] = useState('')
    const [button, setButton] = useState(false)
    const [check, setCheck] = useState(false)
    

    const onCityInputChange = (event) => {
        const value = event.target.value       
            setCity(value)   
        }

    // const onCityInputChange = async (searchData) => { 
    //     const cityInfo = searchData.label
    //     const cityInfoArray = cityInfo.split(' ')
    //     const citySpecificInfo = cityInfoArray[0]   
    //     console.log(citySpecificInfo);  
    //     setCity(citySpecificInfo)
    //     const weatherData = await fetchWeatherByCity(city)
    //     props.search(weatherData)
    //     props.setCheckBox(check)
    // }

    // const loadOptions =  async (inputValue) => {
    //     const cityData =  await fetchGeoCity(inputValue)

    //     return {
    //         options : cityData.data.map((city) => {
    //             return {label: `${city.name} ${city.countryCode}`}                
    //         })
    //     }                      
    // }

     
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

    useEffect(() => {
        props.setCheckBox(check)
    }, [check, props])

    
    // useEffect(() => {
    //     const getCityByIp = async () => {
    //         props.setLoading(true) 
    //         // const city = await getUserIpLocation()
    //         const city = await getUserIpCity()         
    //         const weatherData = await fetchWeatherByCity(city)
    //         if(weatherData.error) {
    //             props.setSearchError(weatherData.error.message)
    //             props.setLoading(false)
    //             return
    //         }
    //         props.search(weatherData)
    //         props.setCheckBox(false)
    //         props.setLoading(false)
    //     }
    //     getCityByIp()
    // }, [])


    const onSearchButtonClick = async (event) => { 
        event.preventDefault()
        props.setLoading(true) 
        // if (check) {
        //     props.setCheckBox(check)
        // }
        const weatherData = await fetchWeatherByCity(city)
        if(weatherData.error) {
            props.setSearchError(weatherData.error.message)
            props.setLoading(false)
            return
        }
        props.search(weatherData)
        props.setCheckBox(check)
        props.setLoading(false)

        // try {
        //     const weatherData = await fetchWeatherByCity(city)
        //     props.search(weatherData)
        //     props.setCheckBox(check)
        // } catch (error) {
        //     console.error('Failed to fetch city weather due to error: ', error)
        // } finally {
        //     props.setLoading(false)
        // } 
                  
    }

    

    return (          
        <form onSubmit={onSearchButtonClick} className='search'>
            <div className='search-input'>
                <input type='text' placeholder='Search City...' onChange={onCityInputChange} value={city} minLength='2'/>
                
                {/* <AsyncPaginate className='input-paginate'
                    placeholder='Search for city'
                    debounceTimeout={600}
                    value={city}  
                    onChange={onCityInputChange} 
                    loadOptions={loadOptions}
                /> */}
                <button type='submit' disabled={button}><FcSearch/></button>
            </div>
              
            <label className='search-checkbox'>
                <input type='checkbox' onClickCapture={onCheckBoxClick} value={check}/>      
                Show air quality   
            </label>
        </form>        
    )
}

export default SearchCity