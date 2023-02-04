import './DailyResult.css'
import Accordion from 'react-bootstrap/Accordion';


const DailyResult = (props) => {
    const todayInfo = props.weather.forecast.forecastday[0]
    const secondDayInfo = props.weather.forecast.forecastday[1]
    const thirdDayInfo = props.weather.forecast.forecastday[2]
    const accordionTheme = props.setDailyTheme
    console.log('from accordionTheme',accordionTheme);
    
    
    const dayArray = ['Sun','Mon' ,'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const dayConvert = (dayInfo) => {               
        const day = new Date(dayInfo).getDay()
        return dayArray[day]
        }

    const tempNum = (tempStr) => Math.ceil(parseFloat(tempStr))

    
    const accordionButtonClassName = accordionTheme ? `daily-header button` : `daily-header button`

    // const accordionButtonClassName = (accordionTheme) => {
    //     if(accordionTheme) {
    //         return `daily-header button:active`
    //     } 
    //     return `daily-header button`
    // }

  

    return (
        <>
        <h5>Daily</h5>
        <Accordion className='daily-info' >
            <Accordion.Item eventKey="0" className='daily-item'>
                <Accordion.Header className={accordionButtonClassName} >
                        <p>Today</p>                  
                        <img src={todayInfo.day.condition.icon} alt='weather icon'/>
                    
                    <div className='daily-temp'>
                        {tempNum(todayInfo.day.mintemp_c)}&#8451;
                        <div className='temp-divider'> 
                           | 
                        </div>
                        {tempNum(todayInfo.day.maxtemp_c)}&#8451; 
                    </div>                  
                </Accordion.Header>
                <Accordion.Body className='daily-body'>
                    <div>                       
                        <div className='daily-body-item'>
                            <p>UV:</p>
                            {todayInfo.day.uv}
                        </div>
                        <div className='daily-body-item'>
                            <p>Average Temperature:</p>
                            {todayInfo.day.avgtemp_c}&#8451;
                        </div>
                    </div>
                    <div>
                        <div className='daily-body-item'>
                            <p>Max Wind Speed:</p>
                            {todayInfo.day.maxwind_kph}km/h
                        </div>
                        <div className='daily-body-item'>
                            <p>Average Humidity:</p>
                            {todayInfo.day.avghumidity}%
                        </div>
                    </div>
                    <div>
                        <div className='daily-body-item'>
                            <p>Sunrise:</p>
                            {todayInfo.astro.sunrise}
                        </div>
                        <div className='daily-body-item'>
                            <p>Sunset:</p>
                            {todayInfo.astro.sunset}
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item >
            <Accordion.Item eventKey="1" className='daily-item'>
                <Accordion.Header className='daily-header'>
                    <div>
                        {dayConvert(secondDayInfo.date)}
                    </div>
                        <img src={secondDayInfo.day.condition.icon} alt='weather icon'/>
                   
                    
                    <div className='daily-temp'>
                        {tempNum(secondDayInfo.day.mintemp_c)}&#8451;
                        <div className='temp-divider'> 
                           | 
                        </div>
                        {tempNum(secondDayInfo.day.maxtemp_c)}&#8451; 
                    </div>                  
                </Accordion.Header>
                <Accordion.Body className='daily-body'>
                <div>                       
                        <div className='daily-body-item'>
                            <p>UV:</p>
                            {secondDayInfo.day.uv}
                        </div>
                        <div className='daily-body-item'>
                            <p>Average Temperature:</p>
                            {secondDayInfo.day.avgtemp_c}&#8451;
                        </div>
                    </div>
                    <div>
                        <div className='daily-body-item'>
                            <p>Max Wind Speed:</p>
                            {secondDayInfo.day.maxwind_kph}km/h
                        </div>
                        <div className='daily-body-item'>
                            <p>Average Humidity:</p>
                            {secondDayInfo.day.avghumidity}%
                        </div>
                    </div>
                    <div>
                        <div className='daily-body-item'>
                            <p>Sunrise:</p>
                            {secondDayInfo.astro.sunrise}
                        </div>
                        <div className='daily-body-item'>
                            <p>Sunset:</p>
                            {secondDayInfo.astro.sunset}
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='daily-item'>
                <Accordion.Header className='daily-header'>
                    <div>
                        {dayConvert(thirdDayInfo.date)}
                    </div>
                        <img src={thirdDayInfo.day.condition.icon} alt='weather icon'/>                   
                    
                   <div className='daily-temp'>
                        {tempNum(thirdDayInfo.day.mintemp_c)}&#8451;
                        <div className='temp-divider'> 
                           | 
                        </div>
                        {tempNum(thirdDayInfo.day.maxtemp_c)}&#8451;
                    </div>                    
                </Accordion.Header>
                <Accordion.Body className='daily-body'>
                    <div>                       
                        <div className='daily-body-item'>
                            <p>UV:</p>
                            {thirdDayInfo.day.uv}
                        </div>
                        <div className='daily-body-item'>
                            <p>Average Temperature:</p>
                            {thirdDayInfo.day.avgtemp_c}&#8451;
                        </div>
                    </div>
                    <div>
                        <div className='daily-body-item'>
                            <p>Max Wind Speed:</p>
                            {thirdDayInfo.day.maxwind_kph}km/h
                        </div>
                        <div className='daily-body-item'>
                            <p>Average Humidity:</p>
                            {thirdDayInfo.day.avghumidity}%
                        </div>
                    </div>
                    <div>
                        <div className='daily-body-item'>
                            <p>Sunrise:</p>
                            {thirdDayInfo.astro.sunrise}
                        </div>
                        <div className='daily-body-item'>
                            <p>Sunset:</p>
                            {thirdDayInfo.astro.sunset}
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
}

export default DailyResult