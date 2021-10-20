import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const dark = false;

export const MainColor = {
  fontColor: "teal",
  subColor: "red",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export const DarkMode = {
  bgColor: dark ? "#333" : "white",
  fontColor: dark ? "white" : "#333",
};
