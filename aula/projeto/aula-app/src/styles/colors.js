import {darkinactive,darksecondary,darkprimary} from './darkTheme';
import {lightinactive,lightprimary,lightsecondary} from './lightTheme';

const theme = 'light';
let primary, secondary, inactive = '';

switch (theme) {
    case 'dark':
        primary=darkprimary;
        secondary=darksecondary;
        inactive=darkinactive;
        break;
    case 'light':
        primary=lightprimary;
        secondary=lightsecondary;
        inactive=lightinactive;
        break;
    default:
        break;
}

export {inactive,primary,secondary};