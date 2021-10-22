import styled from "styled-components";
import { Icons } from "../../GlobalStyled/GlobalStyle";

const SHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const ArrowBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
  border: 1px solid white;
`;

export const Header = () => {
  return (
    <SHeader>
      <ArrowBtn>{Icons.double}</ArrowBtn>
      <MenuBtn>{Icons.menu}</MenuBtn>
    </SHeader>
  );
};
