import { style } from '@vanilla-extract/css';

export const joystick = style({
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

export const dpadContainer = style({
    display: 'grid',
    gridTemplateColumns: '50px 50px 50px',
    gridTemplateRows: '50px 50px',
    gap: '5px',
});
