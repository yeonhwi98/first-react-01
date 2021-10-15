// import { Fragment } from "react";
// import { ClassComponent } from "./02.component/ClassComponent";
// import { FnComponent } from "./02.component/FnComponent";
// import { Food } from "./02.component/Food";
import Kakao from "./03.map/Kakao";
import { MapFn } from "./03.map/MapFn";
import "./style.css";

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
      {/*1일차  */}
      {/* <div>안녕!</div>
      <div>안녕!</div>
      <input type="text" /> */}
      {/* <FnComponent foodName={"치킨"} dinner={"샐러드"} />
      <ClassComponent nickName={"한연휘"} age={"21"} />
      <Food menu={foods}></Food> */}

      {/* *2일차 */}
      <Kakao></Kakao>
    </>
  );
}

export default App;
