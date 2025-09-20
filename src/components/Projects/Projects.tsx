import { useEffect, useRef } from 'react';
import * as carGame from '../../scripts/car-game/main';
import { Joystick } from '../../scripts/car-game/joystick';
import * as styles from './Projects.css';
import { isMobile } from '../../utils/isMobile';
import { useTranslator } from '../../contexts/translator';

export const Projects = () => {
    const carRef = useRef<HTMLCanvasElement>(null);
    // const networkRef = useRef<HTMLCanvasElement>(null);
    const { translate } = useTranslator('projects');

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
            <div className={styles.projectTitle}>
                {translate('My Projects')}
                {translate('Releases')}
            </div>
            <div className={styles.carGame}>
                <canvas className={styles.carCanvas} ref={carRef} />
                {/* <canvas ref={networkRef} /> */}
                {isMobile && <Joystick />}
            </div>
        </>
    );
};
