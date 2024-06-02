import { NavLink } from 'react-router-dom';
import { en } from '../assets/country-flags';

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <NavLink to="/" className="nav-brand">
                    Mykyta Hromov
                </NavLink>
                <ul className="nav-list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy">Privacy</NavLink>
                    </li>
                </ul>
                <button
                    type="button"
                    aria-label="Change the language"
                    className="lang-button"
                >
                    <img src={en} alt="English flag" />
                </button>
            </nav>
        </header>
    );
};
