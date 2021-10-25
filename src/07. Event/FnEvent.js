import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(0);
  console.log(num);

  const conClickPlus = () => {
    setNum(num + 1);
  };

  //   const conClickMinus = () => {
  //     setNum(num - 1);
  //   };

  return (
    <div>
      <h1>함수형 컴포넌트</h1>
      <h3>{num}</h3>
      <button onClick={conClickPlus}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};
