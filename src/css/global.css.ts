import { globalStyle } from '@vanilla-extract/css';
import { colors } from './tokens';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
});

globalStyle('body', {
    color: colors.white,
    fontFamily: 'Orbitron',
});

globalStyle('a', {
    color: 'inherit',
    textDecoration: 'none',
});

globalStyle('button', {
    padding: 0,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
});

globalStyle('img', {
    width: '100%',
    height: '100%',
});

globalStyle('ul', {
    padding: 0,
    listStyle: 'none',
});
