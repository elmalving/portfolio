import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { matrixBackground } from '../../scripts';
import Navbar from '../../components';
import * as styles from './Layout.css';
import { TranslatorProvider } from '../../contexts/translator';
import { Footer } from '../../components/Footer';

export const Layout = () => {
    const background = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = background.current;

        if (canvas === null) return;

        matrixBackground(canvas, window.innerWidth, window.innerHeight);
    }, []);

    return (
        <TranslatorProvider>
            <Navbar />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
            <canvas ref={background} className={styles.background} />
        </TranslatorProvider>
    );
};
