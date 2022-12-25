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
    background-color:rgb(0,70,22);

    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export default GlobalStyles;
