import './style.css';
import { Link } from 'react-router-dom';
import Rules from './Offcanvas/Rules';
import Contact from './Offcanvas/Contact'

export default function Navbar() {

    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-brand'>
                Rock-Paper-Scissors-Lizard-Spock
            </Link>
            <ul>
                <Rules/>
                <Contact/>
            </ul>
        </nav>
    )
}