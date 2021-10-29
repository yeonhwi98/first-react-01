import { router } from "../router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div``;
const MainBanner = styled.section`
  height: 800px;
  background: url("https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413__340.jpg")
    no-repeat center/cover;
`;
const Section = styled.div`
  padding: 150px 350px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 550px;
  height: 650px;

  &:nth-child(1) {
    background: url("https://cdn.pixabay.com/photo/2018/04/05/00/23/clouds-3291565__340.jpg")
      no-repeat center/cover;
  }

  &:nth-child(2) {
    background: url("https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270__480.jpg")
      no-repeat center/cover;
  }
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <MainBanner></MainBanner>
      <Section>
        <Con>
          <Link to={router.sub1}></Link>
        </Con>
        <Con>
          <Link to={router.sub2}></Link>
        </Con>
      </Section>
    </Wrap>
  );
};
