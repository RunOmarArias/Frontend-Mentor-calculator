import { createGlobalStyle } from 'styled-components';

import SpartanBoldWoff from './SpartanBold.woff';
import SpartanBoldWoff2 from './SpartanBold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Spartan Bold';
        src:
            local('Spartan Bold'), local('SpartanBold'),
            url(${SpartanBoldWoff}) format('woff'),
            url(${SpartanBoldWoff2}) format('woff2');
    }
`