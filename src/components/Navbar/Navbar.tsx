import { NavLink } from 'react-router-dom';
import * as assets from '../../assets';
import * as styles from './Navbar.css';
import { useIsSmallWindow } from '../../hooks/useIsSmallWindow';

export const Navbar = () => {
    const isSmallWindow = useIsSmallWindow();

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.navBrand}>
                    Mykyta Hromov
                </NavLink>
                {isSmallWindow ? (
                    <button className={styles.navbarToggler}>
                        <img src={assets.navbarTogglerIcon} />
                    </button>
                ) : (
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
                )}
                <button type="button" aria-label="Change the language">
                    <img
                        className={styles.langImage}
                        src={assets.countryFlags.en}
                        alt="English flag"
                    />
                </button>
            </nav>
        </header>
    );
};
