import { NavLink } from 'react-router-dom';
import { en } from '../assets/country-flags';
import * as styles from '../css';

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.navBrand}>
                    Mykyta Hromov
                </NavLink>
                <ul className={styles.navList}>
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
                    className={styles.langButton}
                >
                    <img src={en} alt="English flag" />
                </button>
            </nav>
        </header>
    );
};
