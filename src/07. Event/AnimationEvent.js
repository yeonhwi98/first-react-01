import { useState } from "react";
import styled, { keyframes } from "styled-components";

const BoxMove = keyframes`
    0%{
        transform: translate(0,0);
    }
    50%{
        transform: translate(200px,200px);
    }
    100%{
        transform: translate(400px,0);
    }

`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tan;
  animation: 1s ${(props) => props.aniName} forwards;
`;

export const AnimationEvent = () => {
  const [move, setMove] = useState("");

  return (
    <div>
      <button onClick={() => setMove(BoxMove)}>Start</button>
      <button onClick={() => setMove("")}>ReStart</button>
      <Box aniName={move}></Box>
    </div>
  );
};
