import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { matrixBackground } from '../../scripts';
import Navbar from '../../components';
import * as styles from './Layout.css';

export const Layout = () => {
    const background = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = background.current;

        if (canvas === null) return;

        matrixBackground(canvas, window.innerWidth, window.innerHeight);
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
            <canvas ref={background} className={styles.background}></canvas>
        </>
    );
};
