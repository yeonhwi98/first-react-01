import { Link } from "react-router-dom";
import styled from "styled-components"

const Logo = styled.div``;

export const Header = () => {
  return (
    <header>
      <Logo />
      <Link to="/">Home</Link>
      <Link to="/sub1">Sub1</Link>
      <Link to="/sub2">Sub2</Link>
    </header>
  );
};
