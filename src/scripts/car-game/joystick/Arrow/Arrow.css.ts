import { style } from '@vanilla-extract/css';

export const arrow = style({
    display: 'flex',
    width: '100%',
    height: '100%',
    background: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '24px',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
});

export const up = style({
    gridColumn: '2',
    gridRow: '1',
});

export const down = style({
    gridColumn: '2',
    gridRow: '2',
});

export const left = style({
    gridColumn: '1',
    gridRow: '2',
});

export const right = style({
    gridColumn: '3',
    gridRow: '2',
});
