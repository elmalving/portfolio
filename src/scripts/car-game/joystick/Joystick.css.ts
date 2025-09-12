import { style } from '@vanilla-extract/css';

export const dpadContainer = style({
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: '50px 50px 50px',
    gridTemplateRows: '50px 50px',
    gap: '5px',
    bottom: '50px',
    left: 'calc(50% - 80px)'
});
