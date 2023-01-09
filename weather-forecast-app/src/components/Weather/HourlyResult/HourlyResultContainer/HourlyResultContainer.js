import './HourlyResultContainer.css'

const HourlyResultContainer = (props) => {

    const tempNum = (tempStr) => Math.ceil(parseFloat(tempStr))

    return (
        <div className='individualHoulyInfo'>
            <p>{props.hourlyIndividualInfo.hour}</p>
            <div className='icon-container'>
            <img src={props.hourlyIndividualInfo.icon} alt='weather icon'/>
            </div>
            
            <p>{tempNum(props.hourlyIndividualInfo.temperature)}&#8451;</p>
        </div>
    );
}

export default HourlyResultContainer