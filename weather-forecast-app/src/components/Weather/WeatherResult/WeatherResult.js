import './WeatherResult.css'

const WeatherResult = (props) => {
    return (
        <div>
            {JSON.stringify(props.weather)} 
        </div>
    );
}

export default WeatherResult