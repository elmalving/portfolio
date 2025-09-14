import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { colors } from '../../css/tokens';

export const header = style({
    width: '100%',
    height: '3.75rem',
    backgroundColor: colors.darkGreen,
    boxShadow: '0 1px 5px rgba(15, 75, 0, 0.6)',
});

export const navbar = style({
    display: 'flex',
    height: '100%',
    padding: '0.5rem 0 0.5rem 11%',
});
globalStyle(`${navbar} *`, {
    display: 'flex',
    margin: 'auto 0',
});

const transfusion = keyframes({
    '0%': { color: colors.green },
    '50%': { color: '#00aa00' },
    '100%': { color: colors.green },
});
export const navBrand = style({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    animation: `${transfusion} 3s 0.5s linear infinite`,
});

export const navbarToggler = style({
    height: '100%',
    border: `1px solid ${colors.blackAlpha}`,
    borderRadius: '0.375rem',
    padding: '0.25rem 0.75rem',
    transform: 'translateX(120px)',
});

export const navList = style({
    gap: '1rem',
    margin: '0 8%',
    height: '100%',
});
globalStyle(`${navbar} li a`, {
    fontSize: '115%',
});

export const langImage = style({
    width: '35px',
    height: '35px',
    border: `3px solid ${colors.white}`,
    borderRadius: '15%',
});
