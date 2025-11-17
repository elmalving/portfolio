import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as assets from '../../assets';
import * as styles from './Navbar.css';
import { useIsSmallWindow } from '../../hooks/useIsSmallWindow';
import { useTranslator } from '../../contexts/translator';

const NavMenu = () => {
    return (
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
    );
};

const MobileToggler = ({
    setDropdownOpen,
}: {
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className={styles.navbarToggler}
        >
            <img src={assets.navbarTogglerIcon} />
        </button>
    );
};

export const Navbar = () => {
    const isSmallWindow = useIsSmallWindow();
    const { language, setLanguage } = useTranslator();
    const [dropDownOpen, setDropdownOpen] = useState(false);

    const changeLanguage = () => {
        setLanguage((prev) => {
            const newLanguage = prev === 'en' ? 'cz' : 'en';
            localStorage.setItem('language', newLanguage);

            return newLanguage;
        });
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.navBrand}>
                    Mykyta Hromov
                </NavLink>
                {!isSmallWindow && <NavMenu />}
                <button
                    className={styles.langButton}
                    type="button"
                    onClick={changeLanguage}
                    aria-label="Change the language"
                >
                    <img
                        src={assets.countryFlags[language]}
                        alt={language === 'en' ? 'English flag' : 'Czech flag'}
                    />
                </button>
                {isSmallWindow && (
                    <>
                        <MobileToggler setDropdownOpen={setDropdownOpen} />
                        <div
                            className={`${styles.dropdownContainer} ${dropDownOpen ? styles.open : ''}`}
                        >
                            <NavMenu />
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
};
