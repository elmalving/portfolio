import { useEffect, useRef } from 'react';
import * as carGame from '../../scripts/car-game/main';
import { Joystick } from '../../scripts/car-game/joystick';
import * as styles from './Projects.css';
import { isMobile } from '../../utils/isMobile';

export const Projects = () => {
    const carRef = useRef<HTMLCanvasElement>(null);
    // const networkRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (isMobile) {
            document.body.classList.add('mobile');
        }

        const carCanvas = carRef.current;
        // const networkCanvas = networkRef.current;
        if (
            carCanvas === null
            // || networkCanvas === null
        )
            return;

        const [road, car, traffic] = carGame.init({
            carCanvas,
            controlType: isMobile ? 'JOYSTICK' : 'KEYS',
            // networkCanvas,
        });
        carGame.animate({
            canvases: {
                car: carCanvas,
                // network: networkCanvas,
            },
            entities: { road, car, traffic },
        });

        return () => {
            document.body.classList.remove('mobile');
        };
    }, []);

    return (
        <>
            <canvas className={styles.carCanvas} ref={carRef} />
            {/* <canvas ref={networkRef} /> */}
            {isMobile && <Joystick />}
        </>
    );
};
