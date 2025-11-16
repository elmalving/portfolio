import { keyframes, style } from '@vanilla-extract/css';
import { colors } from '../../css/tokens';

export const header = style({
    width: '100%',
    height: '6%',
});

export const navbar = style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '60px',
    padding: '0.5rem 1rem 0.5rem 0',
    position: 'relative',
    zIndex: 1,
    backgroundColor: colors.darkGreen,
    boxShadow: '0 3px 5px -2px rgba(15, 75, 0, 0.6)',

    '@media': {
        '(max-width: 768px)': {
            justifyContent: 'space-between',
            gap: '0',
        },
    },
});

const transfusion = keyframes({
    '0%': { color: colors.green },
    '50%': { color: '#00aa00' },
    '100%': { color: colors.green },
});
export const navBrand = style({
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    animation: `${transfusion} 3s 0.5s linear infinite`,
    marginLeft: '12%',
    marginRight: '5%',

    '@media': {
        '(max-width: 768px)': {
            marginRight: 0,
        },
    },
});

export const navbarToggler = style({
    width: '60px',
    height: '42px',
    border: `1px solid ${colors.blackAlpha}`,
    borderRadius: '0.375rem',
    padding: '0.2rem 0',
});

export const navList = style({
    display: 'flex',
    gap: '35px',
    fontSize: '115%',
    padding: '0.6rem 0',

    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            gap: '25px',
            textAlign: 'right',
            marginLeft: 'auto',
        },
    },
});
export const dropdownContainer = style({
    flexBasis: '100%',
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 0.35s ease',
});
export const open = style({
    maxHeight: '140px',
});

export const langButton = style({
    width: '37px',
    height: '37px',
    borderRadius: '15%',
    border: `3px solid ${colors.white}`,
});
