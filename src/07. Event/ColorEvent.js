import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const ColorEvent = () => {
  const [color, setColor] = useState("pink");
  const [num, setNum] = useState(0);
  //   console.log(color);

  const onClickColor = () => {
    if (num === 0) {
      setColor("hotpink");
      setNum(num + 1);
    } else if (num === 1) {
      setColor("pink");
      setNum(num - 1);
    }
  };

  return (
    <Box bgColor={color} onClick={onClickColor}>
      <h2>날 클릭해죠!</h2>
    </Box>
  );
};

// 1.useState 정의하기
// 2.이벤트 정의하기
