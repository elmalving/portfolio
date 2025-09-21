import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { colors } from './tokens';

globalFontFace('Orbitron', {
    fontStyle: 'normal',
    fontWeight: 400,
    src: "url(https://fonts.gstatic.com/s/orbitron/v35/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6BoWgz.woff2) format('woff2')",
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
});

globalFontFace('Kanit', {
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: 'url(https://fonts.gstatic.com/s/kanit/v17/nKKU-Go6G5tXcr5KPxWpVaF5NQ.woff2) format("woff2")',
    unicodeRange:
        'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
});

globalFontFace('Kanit', {
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: 'url(https://fonts.gstatic.com/s/kanit/v17/nKKU-Go6G5tXcr5KPxWnVaE.woff2) format("woff2")',
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
});

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
});

globalStyle('html, body, #root', {
    width: '100%',
    height: '100%',
});
globalStyle('html', {
    overflowY: 'scroll',
});
globalStyle('body', {
    color: colors.white,
    fontFamily: 'Orbitron',
    overflowY: 'visible',
});
globalStyle('body.mobile', {
    userSelect: 'none',
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
