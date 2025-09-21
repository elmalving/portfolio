import { style } from '@vanilla-extract/css';
import { colors } from '../../css/tokens';

export const footer = style({
    display: 'flex',
    width: '100%',
    height: '3%',
    textAlign: 'center',
});

export const privacyLabel = style({
    color: colors.darkAlpha,
    marginLeft: '5%',
    textAlign: 'left',

    '@media': {
        '(max-width: 768px)': {
            whiteSpace: 'nowrap',
            fontSize: '2.9vw',
            margin: 'auto',
            textAlign: 'center',
        },
    },
});

export const linkSuccess = style({
    color: 'rgba(25, 135, 84, 0.9)',
    textDecoration: 'underline',
});
