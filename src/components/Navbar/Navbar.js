import './style.css';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-brand'>
                Rock-Paper-Scissors-Lizard-Spock
            </Link>
            <ul>
                <NavbarRedirection to="/rules">Rules</NavbarRedirection>
                <NavbarRedirection to="/contact">Contact</NavbarRedirection>
            </ul>
        </nav>
    )
}

function NavbarRedirection({to, children, ...props}){
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({path: resolvePath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}