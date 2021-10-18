import styled from "styled-components";
import { MainColor } from "../GlobalStyled/GlobalStyle.js";
console.log(MainColor);

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Con = styled.div`
  width: 350px;
  border: 3px solid black;
`;

const BgImg = styled.div`
  width: 100%;
  height: 350px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSbTFJGTFwTPCFIrSbz_neC9Dmv9BG0Z9tA&usqp=CAU")
    no-repeat center / cover;
`;

const Items = styled.div`
  padding: 20px;
  color: ${(props) => props.fontColor};
  h3 {
    font-size: 30px;
    /* color: salmon; */
  }
  p {
    margin-top: 30px;
    opacity: 0.7;
    /* color: salmon; */
  }
`;

// const man = {
//   name: "sam",
//   age: 12,
//   gender: "girl",
// };

const Sub = styled.h4`
  color: ${(props) => props.SubColor};
`;

export const StyledCom = () => {
  //   console.log(arr[0].name);
  //   console.log(arr[1].name);
  //   const nickName = man.name;
  //   const manAge = man.age;
  //   console.log(nickName);
  //   const { name, age, gender } = man;
  //   console.log(gender);

  const { fontColor, SubColor } = MainColor;

  return (
    <Wrap>
      <Con>
        <BgImg></BgImg>
        <Items fontColor={fontColor}>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            temporibus tempora obcaecati minima laboriosam sunt ad ab non
            laborum, sint eligendi, sit modi expedita magnam illum dolores ea
            dolorum! Reiciendis.
          </p>
          <Sub SubColor={SubColor}>
            본 카드는 타인에게 양도 또는 대여할 수 없습니다.
          </Sub>
        </Items>
      </Con>
    </Wrap>
  );
};
