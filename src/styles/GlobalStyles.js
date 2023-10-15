import { createGlobalStyle } from 'styled-components';
// import * as colors from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #000;
        color: #fff;
        overflow-y: auto;
        padding-bottom: 10px;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: red;
    }
`;
