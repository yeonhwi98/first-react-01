import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const dark = true;

export const MainColor = {
  fontColor: "teal",
  subColor: "red",
};

export const Icons = {
  double: <i class="fas fa-angle-double-down"></i>,
  menu: <i class="fas fa-ellipsis-h"></i>,
  random: <i class="fas fa-random"></i>,
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        
    }

    a{
      text-decoration:none;
        color: black;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export const DarkMode = {
  bgColor: dark ? "#333" : "white",
  fontColor: dark ? "white" : "#333",
};
