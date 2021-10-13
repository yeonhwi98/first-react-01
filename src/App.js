import { Fragment } from "react";
import { ClassComponent } from "./02.component/ClassComponent";
import { FnComponent } from "./02.component/FnComponent";
import { Food } from "./02.component/Food";

const foods = [
  {
    id: 0,
    name: "피자",
    side: "콜라",
  },
  {
    id: 1,
    name: "치킨",
    side: "사이다",
  },
  {
    id: 2,
    name: "김치찌게",
    side: "환타",
  },
  {
    id: 3,
    name: "파전",
    side: "막걸리",
  },
  {
    id: 4,
    name: "햄버거",
    side: "제로콜라",
  },
];

function App() {
  return (
    <Fragment>
      {/* <div>안녕!</div>
      <div>안녕!</div>
      <input type="text" /> */}
      <FnComponent foodName={"치킨"} dinner={"샐러드"} />
      <ClassComponent nickName={"한연휘"} age={"21"} />
      <Food menu={foods}></Food>
    </Fragment>
  );
}

export default App;
