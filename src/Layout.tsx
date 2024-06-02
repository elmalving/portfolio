import { useEffect, useRef } from 'react';
import { matrixBackground } from './scripts';

const App = () => {
    const background = useRef(null);

    useEffect(() => {
        matrixBackground(
            background.current,
            window.innerWidth,
            window.innerHeight
        );
    }, []);

    return <canvas ref={background} id="background"></canvas>;
};

export default App;
