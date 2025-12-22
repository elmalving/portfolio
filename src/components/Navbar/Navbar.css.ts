import { keyframes, style } from '@vanilla-extract/css';
import { colors } from '../../css/tokens';

const VERTICAL_PADDING = 1;

export const header = style({
    display: 'flex',
    width: '100%',
    height: '6%',

    '@media': {
        '(max-width: 768px)': {
            marginBottom: `${VERTICAL_PADDING * 2}%`,
        },
    },
});

export const headerArea = style({
    position: 'fixed',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: `${VERTICAL_PADDING}% 5% ${VERTICAL_PADDING}% 12%`,
    backgroundColor: colors.darkGreen,
    boxShadow: '0 3px 5px -2px rgba(15, 75, 0, 0.6)',
    overflow: 'hidden',
    zIndex: 1,

    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
});

export const headerTop = style({
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const transfusion = keyframes({
    '0%': { color: colors.green },
    '50%': { color: '#00aa00' },
    '100%': { color: colors.green },
});
export const brand = style({
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    animation: `${transfusion} 3s 0.5s linear infinite`,
});

export const headerGroup = style({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
});

export const navContainer = style({
    marginLeft: '15%',
    marginRight: '8%',

    '@media': {
        '(max-width: 768px)': {
            width: '100%',
            maxHeight: 0,
            margin: 0,
            transition: 'max-height 0.35s ease',
        },
    },
});

export const navList = style({
    display: 'flex',
    gap: '35px',
    fontSize: '1.15rem',

    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            gap: '25px',
            textAlign: 'right',
            margin: '2% 0 5% auto',
        },
    },
});

export const langButton = style({
    width: '37px',
    height: '37px',
    borderRadius: '15%',
    border: `3px solid ${colors.white}`,
});

export const dropdownToggler = style({
    width: '60px',
    height: '42px',
    border: `1px solid ${colors.blackAlpha}`,
    borderRadius: '0.375rem',
    padding: '0.2rem 0',
});

export const open = style({
    '@media': {
        '(max-width: 768px)': {
            maxHeight: '140px',
        },
    },
});
