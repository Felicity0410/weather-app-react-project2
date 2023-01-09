import './WeatherResult.css'

const WeatherResult = (props) => {
    const location = props.weather.location
    const current = props.weather.current
    const tempNum = (tempStr) => Math.ceil(parseFloat(tempStr))

    return (
        <div className='weather-mainInfo-card'>
            <div className='weather-info-topPart'>
                <div className='weather-info-location'>
                    <div className='location-info'>
                        <h2>{location.name}</h2>
                        <h3>{location.country}</h3>
                    </div>
                    <p>{current.condition.text}</p>
                </div>
                <div className='weather-info-icon'>
                    <img src={current.condition.icon} alt='weather icon'/>
                    
                </div>
            </div>
            <div className='weather-info-bottomPart'>
                <div className='weather-temperature'>
                    <h2>{tempNum(current.temp_c)}&#8451;</h2>
                </div>
                <div className='weather-details'>
                    <div>
                        <label>Feels Like:</label>
                        <p>{current.feelslike_c}&#8451;</p>
                    </div>
                    <div>
                        <label>Wind Speed:</label>
                        <p>{current.wind_kph} km/h</p>
                    </div>
                    <div>
                        <label>Humidity:</label>
                        <p>{current.humidity}%</p>
                    </div>
                    <div>
                        <label>Pressure:</label>
                        <p>{current.pressure_mb}h/Pa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherResult