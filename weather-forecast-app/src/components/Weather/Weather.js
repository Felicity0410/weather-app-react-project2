import './Weather.css'
import { useEffect, useState } from 'react';
import SearchCity from './SearchCity/SearchCity';
import WeatherResult from './WeatherResult/WeatherResult';
import Card from 'react-bootstrap/Card';
import HourlyResult from './HourlyResult/HourlyResult';
import DailyResult from './DailyResult/DailyResult';
import Spinner from '../Spinner/Spinner';
import WeatherAlert from './WeatherAlert/WeatherAlert';
import AirQuality from './AirQuality/AirQuality';

const alters = {
    "alert":[
        {
        "headline":"Flood Warning issued January 05 at 9:47PM EST until January 07 at 6:15AM EST by NWS",
        "msgtype":"Alert",
        "severity":"Moderate",
        "urgency":"Expected",
        "areas":"Calhoun; Lexington; Richland",
        "category":"Met",
        "certainty":"Likely",
        "event":"Flood Warning",
        "note":"Alert for Calhoun; Lexington; Richland (South Carolina) Issued by the National Weather Service",
        "effective":"2021-01-05T21:47:00-05:00",
        "expires":"2021-01-07T06:15:00-05:00",
        "desc":"...The Flood Warning continues for the following rivers in South\nCarolina...\nCongaree River At Carolina Eastman affecting Richland, Calhoun\nand Lexington Counties.\nCongaree River At Congaree National Park-Gadsden affecting\nCalhoun and Richland Counties.\nNorth Fork Edisto River At Orangeburg affecting Orangeburg County.\n...The Flood Warning is now in effect until Thursday morning...\nThe Flood Warning continues for\nthe Congaree River At Carolina Eastman.\n* Until Thursday morning.\n* At 9:28 PM EST Tuesday the stage was 115.6 feet.\n* Flood stage is 115.0 feet.\n* Minor flooding is occurring and minor flooding is forecast.\n* Recent Activity...The maximum river stage in the 24 hours ending\nat 9:28 PM EST Tuesday was 118.2 feet.\n* Forecast...The river will rise to 115.7 feet just after midnight\ntonight. It will then fall below flood stage tomorrow morning to\n114.2 feet and begin rising again tomorrow evening. It will rise\nto 114.3 feet early Thursday morning. It will then fall again and\nremain below flood stage.\n* Impact...At 115.0 feet, Flooding occurs in low lying areas of the\nCarolina Eastman Facility and at the Congaree National Park.\n* Flood History...This crest compares to a previous crest of 116.3\nfeet on 12/03/2020.\n&&",
        "instruction":"A Flood Warning means that flooding is imminent or occurring. All\ninterested parties should take necessary precautions immediately.\nMotorists should not attempt to drive around barricades or drive\ncars through flooded areas.\nCaution is urged when walking near riverbanks.\nAdditional information is available at www.weather.gov.\nThe next statement will be issued Wednesday morning at 1000 AM EST."
        },
        {
        "headline":"Flood Warning issued January 05 at 9:47PM EST until January 09 at 4:00AM EST by NWS",
        "msgtype":"Alert",
        "severity":"Moderate",
        "urgency":"Expected",
        "areas":"Calhoun; Richland",
        "category":"Met",
        "certainty":"Likely",
        "event":"Flood Warning",
        "note":"Alert for Calhoun; Richland (South Carolina) Issued by the National Weather Service",
        "effective":"2021-01-05T21:47:00-05:00",
        "expires":"2021-01-09T04:00:00-05:00",
        "desc":"...The Flood Warning continues for the following rivers in South\nCarolina...\nCongaree River At Carolina Eastman affecting Richland, Calhoun\nand Lexington Counties.\nCongaree River At Congaree National Park-Gadsden affecting\nCalhoun and Richland Counties.\nNorth Fork Edisto River At Orangeburg affecting Orangeburg County.\n...The Flood Warning is now in effect until early Saturday morning...\nThe Flood Warning continues for\nthe Congaree River At Congaree National Park-Gadsden.\n* Until late Friday night.\n* At 9:00 PM EST Tuesday the stage was 16.5 feet.\n* Flood stage is 15.0 feet.\n* Minor flooding is occurring and minor flooding is forecast.\n* Recent Activity...The maximum river stage in the 24 hours ending\nat 9:00 PM EST Tuesday was 17.2 feet.\n* Forecast...The river is expected to fall below flood stage early\nFriday morning and continue falling to 12.4 feet Sunday evening.\n* Impact...At 15.0 feet, Flooding begins in the Congaree National\nPark. This will begin to produce flooding of portions of the lower\nboardwalk.\n* Impact...At 17.0 feet, The access road to the Sandy Run\nsubdivision becomes flooded. The lower boardwalk in the Congaree\nNational Park becomes flooded by Cedar Creek.\n* Impact...At 18.0 feet, Several homes in the Sandy Run subdivision\nalong the river become flooded. At 18 feet the river covers the\nWeston Lake overlook in the Congaree National Park. Between 18 and\n18.5 feet the river begins to cover sections of the elevated\nboardwalk.\n* Flood History...This crest compares to a previous crest of 16.3\nfeet on 12/03/2020.\n&&",
        "instruction":"A Flood Warning means that flooding is imminent or occurring. All\ninterested parties should take necessary precautions immediately.\nMotorists should not attempt to drive around barricades or drive\ncars through flooded areas.\nCaution is urged when walking near riverbanks.\nAdditional information is available at www.weather.gov.\nThe next statement will be issued Wednesday morning at 1000 AM EST."
        }
    ]
}


const Weather = () => {
    const [loading, setLoading] = useState(false)
    const [weather, setWeather] = useState(undefined)
    //初始时，还没有city，更不会有weather，所以不用''空string，而是undefined，还没有被定义的
   const [alter, setAlert] = useState(undefined)
   const [airQuality, setAirQuality] = useState(undefined)

    const onSearch = (weatherData) => setWeather(weatherData)
    const onSetLoading = (loading) => setLoading(loading)
    const onSetCheckBox= (check) => {
        setAirQuality(check)
        console.log('from weather', check);
    } 
    
    useEffect(() => {
        setAlert(alters)
    }, [weather])
    
    let weatherResult = <h4>Please submit a search... </h4>
    if(loading) {
        weatherResult = <Spinner/>
    } else if (weather){

    //    if (weather.alters) {
    //         setAlert(weather.alters)
    //    }
        
        
        weatherResult = <>
        <div className='weather-main'>
            <WeatherResult weather={weather}/>
            {airQuality && <AirQuality weather={weather}/>}
            {alter && <WeatherAlert alterInfo={alter}/>}
        </div>
        <div>                    
            <div className='weather-hourly'>
                <HourlyResult weather={weather}/>
            </div> 
            <div className='weather-daily'>
                <DailyResult weather={weather}/>
            </div>   
        </div> 
    </>
    }

    return (
        <>
            <Card className="text-center weather-card">
                <Card.Header className="weather-header">
                    <h1>Weather Forecast 🌤️</h1>
                    <SearchCity search={onSearch} setLoading={onSetLoading} setCheckBox={onSetCheckBox} />  
                </Card.Header>
                <Card.Body className='weather-body'>
                   {weatherResult}                                          
              </Card.Body>
                        
                <Card.Footer className="text-muted">By Zhenhong Liu</Card.Footer>
            </Card>

        </>
    );
}

export default Weather