import { globalStyle, style } from '@vanilla-extract/css';

export const theme = style({
    display: 'flex',
    width: '30%',
    height: '10%',
    borderBottom: '5px solid white',

    '@media': {
        '(max-width: 768px)': {
            width: '80%',
            height: '8%',
            backgroundColor: 'rgba(10, 40, 0, 0.4)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            borderBottom: 'none',
            textAlign: 'center',
            margin: '3% auto 0',
        },
    },
});
globalStyle(`${theme} > h1`, {
    fontFamily: 'Kanit',
    textTransform: 'uppercase',
    margin: 'auto',

    '@media': {
        '(min-width: 768px)': {
            margin: '2% 0 2% 20%',
        },
    },
});

export const display4 = style({
    lineHeight: 1.2,
    fontSize: 'calc(1.475rem + 2.7vw)',

    '@media': {
        '(min-width: 1200px)': {
            fontSize: '3.5rem',
        },
    },
});

export const mainTextContainer = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '80%',
    perspective: '400px',
    fontSize: '150%',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    overflow: 'auto',

    '@media': {
        '(min-width: 768px)': {
            width: '80%',
            margin: '0 10%',
        },
    },
});
globalStyle(`${mainTextContainer}::-webkit-scrollbar`, { width: 0 });
globalStyle(`${mainTextContainer}::-webkit-scrollbar-thumb`, {
    display: 'none',
});

globalStyle(`${mainTextContainer} > div`, {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginTop: '3%',
    padding: '2%',
    transform: 'translateZ(0)',
    transition: 'transform 0.3s ease-out',
});

export const contactList = style({
    display: 'flex',
    width: '70%',
    height: '10%',
    margin: '1% auto',

    '@media': {
        '(max-width: 768px)': {
            width: '90%',
            height: '7%',
            margin: 'auto',
        },
    },
});
globalStyle(`${contactList} > a`, {
    display: 'flex',
    width: 'auto',
    height: '100%',
    margin: '0 auto',
    borderRadius: '50%',
});
globalStyle(`${contactList} > a > img`, {
    transition: 'transform 0.3s',
});
globalStyle(`${contactList} > a > img:hover`, {
    transform: 'scale(1.1)',
});
