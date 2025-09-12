import { forwardRef } from 'react';
import * as styles from './Arrow.css';
import { Direction } from '../Joystick';

interface ArrowProps {
    children: React.ReactNode;
    direction: Direction;
}

const dispatchJoystickEvent = (direction: Direction, pressed: boolean) => {
    const event = new CustomEvent('joystick:press', {
        detail: { direction, pressed },
    });

    document.dispatchEvent(event);
};

export const Arrow = forwardRef<HTMLButtonElement, ArrowProps>(
    ({ children, direction }, ref) => {
        return (
            <button
                className={`${styles.arrow} ${styles[direction]}`}
                ref={ref}
                onPointerDown={() => dispatchJoystickEvent(direction, true)}
                onPointerUp={() => dispatchJoystickEvent(direction, false)}
                onPointerLeave={() => dispatchJoystickEvent(direction, false)}
            >
                {children}
            </button>
        );
    }
);
