import { useEffect, useRef } from 'react';
import { Arrow } from './Arrow';
import * as styles from './Joystick.css';

export type Direction = 'up' | 'down' | 'left' | 'right';

type ArrowRefs = Record<Direction, React.RefObject<HTMLButtonElement | null>>;

export const Joystick = () => {
    const arrowRefs: ArrowRefs = {
        up: useRef(null),
        down: useRef(null),
        left: useRef(null),
        right: useRef(null),
    };

    useEffect(() => {
        const directions = ['up', 'down', 'left', 'right'] as const;

        const handleClick = (dir: string) => () => {
            const event = new CustomEvent('joystick:click', {
                detail: { direction: dir },
            });

            document.dispatchEvent(event);
        };

        directions.forEach((dir) => {
            const ref = arrowRefs[dir];
            const el = ref.current;
            if (el) {
                el.addEventListener('click', handleClick(dir));
            }
        });

        return () => {
            directions.forEach((dir) => {
                const ref = arrowRefs[dir];
                const el = ref.current;
                if (el) {
                    el.replaceWith(el.cloneNode(true));
                }
            });
        };
    }, []);

    return (
        <div className={styles.dpadContainer}>
            <Arrow direction="up" ref={arrowRefs.up}>
                ↑
            </Arrow>
            <Arrow direction="down" ref={arrowRefs.down}>
                ↓
            </Arrow>
            <Arrow direction="left" ref={arrowRefs.left}>
                ←
            </Arrow>
            <Arrow direction="right" ref={arrowRefs.right}>
                →
            </Arrow>
        </div>
    );
};
