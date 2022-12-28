import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
font
*{
    box-sizing : border-box;
    font-size : 62.5%;
}

body{
    font-family: 'Do Hyeon', sans-serif;
    min-width : 62rem;
    background-color : rgb(181,214,146);
}
`;

export default GlobalStyles;
