import './HourlyResult.css'
import Carousel from 'react-bootstrap/Carousel';
import HourlyResultContainer from './HourlyResultContainer/HourlyResultContainer';


const HourlyResult = (props) => {
    const hourlyInfoArray = []
    const database = props.weather

    const localTime = database.location.localtime
    const currentHour = Number(new Date(localTime).getHours())

    const hourlyDataArray = database.forecast.forecastday[0].hour   
    hourlyDataArray.forEach((hourData) => {
        const time = hourData.time       
        let hour = Number(new Date(time).getHours())
        
        if(hour >= currentHour) {        
            let ampm = hour >= 12 ? 'pm' : 'am'
            hour = hour%12
            hour = hour ? hour : 12
            hour = `${hour}${ampm}`
            
            let temperature = hourData.temp_c
            let icon = hourData.condition.icon
            hourlyInfoArray.push({hour, temperature, icon})                
        } 
    })


    if (hourlyInfoArray.length < 24) {
        const number = 24 - hourlyInfoArray.length
        for(let i = 0; i < number; i++) {
            const hourlyDataArray = database.forecast.forecastday[1].hour
            const time = hourlyDataArray[i].time
            let hour = Number(new Date(time).getHours())

            let ampm = hour >= 12 ? 'pm' : 'am'
            hour = hour%12
            hour = hour ? hour : 12
            hour= `${hour}${ampm}`

            let temperature = hourlyDataArray[i].temp_c
            let icon = hourlyDataArray[i].condition.icon

            hourlyInfoArray.push({hour, temperature, icon})
        
        }
    } else {
        return
    }
   


    return (
        <Carousel slide={false} className='hourly-info' interval={null}>
            <Carousel.Item className='hourly-item'>
             <div>
              <HourlyResultContainer hourlyIndividualInfo={{...hourlyInfoArray[0], hour: 'Now'}}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[1]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[2]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[3]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[4]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[5]}/>
              </div>
            </Carousel.Item>
            <Carousel.Item className='hourly-item'>
             <div>
            <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[6]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[7]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[8]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[9]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[10]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[11]}/>
              </div>
            </Carousel.Item>
            <Carousel.Item className='hourly-item'>
                <div>
            <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[12]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[13]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[14]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[15]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[16]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[17]}/>
              </div>
            </Carousel.Item>
            <Carousel.Item className='hourly-item'>
                <div>
            <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[18]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[19]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[20]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[21]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[22]}/>
              <HourlyResultContainer hourlyIndividualInfo={hourlyInfoArray[23]}/>
              </div>
            </Carousel.Item>
     </Carousel>
    );
}

export default HourlyResult