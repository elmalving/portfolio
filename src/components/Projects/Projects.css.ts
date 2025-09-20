import { style } from '@vanilla-extract/css';

export const projectTitle = style({
    display: 'flex',
    width: '100%',
    height: '10%',
});

export const carCanvas = style({
    display: 'flex',
    height: '100%',
    backgroundColor: 'black',
    margin: '0 auto',
});

export const carGame = style({
    display: 'flex',
    width: '100%',
    height: '90%',
    position: 'relative',
    overflow: 'hidden',
});
