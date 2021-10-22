// import { Fragment } from "react";
// import { ClassComponent } from "./02.component/ClassComponent";
// import { FnComponent } from "./02.component/FnComponent";
// import { Food } from "./02.component/Food";
// import Kakao from "./03.map/Kakao";
// import { MapFn } from "./03.map/MapFn";
// import "./style.css";

import { Music } from "./06.MusicApp/Music";

// import { BaseStyle } from "./04.styledComponent/BaseStyle";
// import { StyledCom } from "./04.styledComponent/StyledCom";

import { GlobalStyle } from "./GlobalStyled/GlobalStyle";
// import { StyledCon } from "./05.Content/StyledCon";

// const foods = [
//   {
//     id: 0,
//     name: "피자",
//     side: "콜라",
//   },
//   {
//     id: 1,
//     name: "치킨",
//     side: "사이다",
//   },
//
// ];

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      {/*1일차  */}

      {/* <div>안녕!</div>
      <div>안녕!</div>
      <input type="text" /> */}
      {/* <FnComponent foodName={"치킨"} dinner={"샐러드"} />
      <ClassComponent nickName={"한연휘"} age={"21"} />
      <Food menu={foods}></Food> */}

      {/* *2일차 */}
      {/* <Kakao></Kakao> */}

      {/* 4일차 */}
      {/* <BaseStyle></BaseStyle> */}
      {/* <GlobalStyle></GlobalStyle>
      <StyledCom></StyledCom> */}

      {/* 5일차 */}

      {/* <StyledCon></StyledCon>  */}

      {/* 6일차 */}
      <Music />
    </>
  );
}

export default App;
