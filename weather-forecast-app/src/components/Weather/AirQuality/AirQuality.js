import './AirQuality.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const US_EPA_STANDARD = ['', 'Good', 'Moderate', 'Unhealthy for sensitive group', 'Unhealthy', 'Very Unhealthy', 'Hazardous']

const AirQuality = (props) => {

    // const airQualityData = props.weather.forecast.forecastday[0].hour[0].air_quality
    const airQualityData = props.weather.current.air_quality
  

    const usEpaIndex = airQualityData["us-epa-index"]
    const co = parseInt(airQualityData.co)
    const no2 = parseInt(airQualityData.no2)
    const o3 = parseInt(airQualityData.o3)
    const so2 = parseInt(airQualityData.so2)
    const pm2 = parseInt(airQualityData["pm2_5"])
    const pm10 = parseInt(airQualityData.pm10)
    const airQuality = US_EPA_STANDARD[Number(usEpaIndex)]
    return (
   
        <div className='air-quality-info'>
            <div className='air-quality-info-title'>
                <label>Band:</label>
                <h4>{airQuality}</h4>
            </div>
            <div className='air-quality-info-index'>
                <label>AQI:</label>
                <ProgressBar now={usEpaIndex} label={`${usEpaIndex}`} min="0" max="6" className='progress-bar'/>
            </div>

            <label>Pollutants:</label> 
            <div className='pollutants'>
                <div className='pollutants-group'>
                    <div>
                        <p>CO:</p>
                        <p>{co}</p>
                    </div>
                    <div>
                        <p>O<sub>3</sub>:</p>
                        <p>{o3}</p>
                    </div>

                    <div>
                        <p>NO<sub>2</sub>:</p>
                        <p>{no2}</p>
                    </div>
                </div>
                <div className='pollutants-group'>
                    <div>
                        <p>SO<sub>2</sub>:</p>
                        <p>{so2}</p>
                    </div>
                    <div>
                        <p>PM<sub>2.5</sub>:</p>
                        <p>{pm2}</p>
                    </div>
                    <div>
                        <p>PM<sub>10</sub>:</p>
                        <p>{pm10}</p>
                    </div>
                </div>
            </div>
            
        </div>

    );
}

export default AirQuality