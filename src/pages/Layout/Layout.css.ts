import { style } from '@vanilla-extract/css';
import { colors } from '../../css/tokens';

export const background = style({
    backgroundColor: colors.green,
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
});
