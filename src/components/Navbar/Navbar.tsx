import { NavLink } from 'react-router-dom';
import * as assets from '../../assets';
import * as styles from './Navbar.css';
import { useIsSmallWindow } from '../../hooks/useIsSmallWindow';
import { useTranslator } from '../../contexts/translator';
import { useDropdown } from '../../contexts/dropdown';

const Brand = () => {
    return (
        <NavLink to="/" className={styles.brand}>
            Mykyta Hromov
        </NavLink>
    );
};

const NavMenu = () => {
    const { isOpen } = useDropdown();

    return (
        <nav
            className={`${styles.navContainer} ${isOpen ? styles.open : ''}`}
            id="navigation-menu"
        >
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
        </nav>
    );
};

const LanguageButton = () => {
    const { language, setLanguage } = useTranslator();

    const changeLanguage = () => {
        setLanguage((prev) => {
            const newLanguage = prev === 'en' ? 'cz' : 'en';
            localStorage.setItem('language', newLanguage);

            return newLanguage;
        });
    };

    return (
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
    );
};

const DropdownToggler = () => {
    const { isOpen, toggle } = useDropdown();

    return (
        <button
            onClick={toggle}
            className={styles.dropdownToggler}
            aria-expanded={isOpen}
            aria-controls="navigation-menu"
        >
            <img src={assets.navbarTogglerIcon} alt="Toggle navigation" />
        </button>
    );
};

export const Navbar = () => {
    const isSmallWindow = useIsSmallWindow();

    return (
        <header className={styles.header}>
            <div
                className={styles.headerArea}
            >
                {isSmallWindow ? (
                    <>
                        <div className={styles.headerTop}>
                            <Brand />
                            <LanguageButton />
                            <DropdownToggler />
                        </div>
                        <NavMenu />
                    </>
                ) : (
                    <>
                        <Brand />
                        <div className={styles.headerGroup}>
                            <NavMenu />
                            <LanguageButton />
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};
