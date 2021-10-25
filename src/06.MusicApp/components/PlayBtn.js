import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SPlayBtn = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Items = styled.div``;

export const PlayBtn = () => {
  const { random } = Icons;
  return (
    <SPlayBtn>
      <Items>{random}</Items>
      <Items>
        <i class="fas fa-backward"></i>
      </Items>
      <Items>
        <i class="fas fa-pause-circle"></i>
      </Items>
      <Items>
        <i class="fas fa-forward"></i>
      </Items>
      <Items>
        <i class="fas fa-redo"></i>
      </Items>
    </SPlayBtn>
  );
};
