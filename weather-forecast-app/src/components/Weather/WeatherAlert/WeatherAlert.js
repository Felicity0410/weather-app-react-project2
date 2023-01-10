import './WeatherAlert.css'
import Alert from 'react-bootstrap/Alert';

const WeatherAlert = (props) => {
    return (
        <Alert variant="danger" className='alter'>
            <Alert.Heading className='alter-heading'>{props.alterInfo.alert[0].event}</Alert.Heading>
            <p>{props.alterInfo.alert[0].headline}</p>
            <p>{props.alterInfo.alert[0].note}</p>
      </Alert>
    );
}

export default WeatherAlert