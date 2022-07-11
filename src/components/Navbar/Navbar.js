import './style.css';

export default function Navbar(){
    return (
        <nav className='navbar'>
            <a href="/" className='navbar-brand'>Rock-Paper-Scissors-Lizard-Spock</a>
            <ul>
                <li>
                    <a href='/rules'>Rules</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}