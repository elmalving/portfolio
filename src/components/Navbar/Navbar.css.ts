import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { colors } from '../../css/tokens';

export const header = style({
    display: 'flex',
    width: '100%',
    height: '6%',
    backgroundColor: colors.darkGreen,
    boxShadow: '0 1px 5px rgba(15, 75, 0, 0.6)',
});

export const navbar = style({
    display: 'flex',
    width: '75%',
    height: '100%',
    gap: '5%',
    margin: '0 auto',

    '@media': {
        '(max-width: 768px)': {
            width: '100%',
            gap: '12%',
            marginLeft: '10%'
        },
    },
});
globalStyle(`${navbar} > *`, {
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
    height: '75%',
    border: `1px solid ${colors.blackAlpha}`,
    borderRadius: '0.375rem',
    padding: '0.25rem 0.75rem',
});

export const navList = style({
    display: 'flex',
    gap: '15%',
    padding: '0 8%',
    fontSize: '115%',
});

export const langButton = style({
    height: '65%',
    borderRadius: '15%',
});

export const langImage = style({
    borderRadius: '15%',
    border: `3px solid ${colors.white}`,
});
