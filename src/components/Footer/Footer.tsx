import { NavLink } from 'react-router-dom';
import * as styles from './Footer.css';
import { useTranslator } from '../../contexts/translator';

export const Footer = () => {
    const { translate } = useTranslator('footer');

    return (
        <footer className={styles.footer}>
            <div className={styles.privacyLabel}>
                &copy; {new Date().getFullYear()} - Mykyta Hromov Portfolio
                -&nbsp;
                <NavLink className={styles.linkSuccess} to="/privacy">
                    {translate('Privacy')}
                </NavLink>
            </div>
        </footer>
    );
};
