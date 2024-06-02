import { useEffect, useRef } from 'react';
import { matrixBackground } from './scripts';
import './css/global.css';

const App = () => {
    const background = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = background.current;

        if (canvas === null) return;

        matrixBackground(canvas, window.innerWidth, window.innerHeight);
    }, []);

    return <canvas ref={background} id="background"></canvas>;
};

export default App;
