import './Spinner.css'
import {Spinner as BootstrapSpinner} from 'react-bootstrap';

function Spinner() {
    return (
      <div className='spinner'>
        <BootstrapSpinner animation="border" size="sm" />
        <BootstrapSpinner animation="border" />
      </div>
    );
  }
  
  export default Spinner;