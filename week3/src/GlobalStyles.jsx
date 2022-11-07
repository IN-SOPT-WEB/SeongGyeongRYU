import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
font
*{
    box-sizing : border-box;
}

body{
    font-family: 'Do Hyeon', sans-serif;
    min-width : 620px;
    background-color : rgb(181,214,146);
}
`;

export default GlobalStyles;
