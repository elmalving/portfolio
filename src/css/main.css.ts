import { keyframes, style } from '@vanilla-extract/css';
import { colors } from './tokens';

export const background = style({
    backgroundColor: colors.green,
    position: 'absolute',
    display: 'flex',
    userSelect: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
});

export const header = style({
    display: 'flex',
    width: '100%',
    height: '8%',
    backgroundColor: colors.darkGreen,
    boxShadow: '0 1px 5px rgba(15, 75, 0, 0.6)',
    position: 'fixed',
});

export const navbar = style({
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
});

const transfusion = keyframes({
    '0%': { color: colors.green },
    '50%': { color: '#00aa00' },
    '100%': { color: colors.green },
});
export const navBrand = style({
    margin: 'auto 0',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    animation: `${transfusion} 3s 0.5s linear infinite`,
});

export const langButton = style({
    height: '50%',
    margin: 'auto 0',
    border: `3px solid ${colors.white}`,
    borderRadius: '15%',
});

export const navList = style({
    display: 'flex',
    margin: 'auto 0',
    gap: '10%',
});
