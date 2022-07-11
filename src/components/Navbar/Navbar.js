import './style.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
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

function NavbarRedirection({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
