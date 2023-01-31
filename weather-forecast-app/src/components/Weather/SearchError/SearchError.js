import './SearchError.css'
import { TbMoodCry } from 'react-icons/tb';

const SearchError = (props) => {
    return (
        <div className='error-backdrop'>
            <div className='error-card'>
                <header className='error-card-header'>
                    <div>
                     <TbMoodCry/>
                    </div>
                    <p>An error has occurred.</p>
                </header>

                <div className='error-card-content'>
                    <p>{props.searchError}</p>
                </div>

                <footer className='error-card-action'>
                    <button onClick={props.onErrorDismiss}>Try Again</button>
                </footer>
            </div>
        </div>
    )
}

export default SearchError