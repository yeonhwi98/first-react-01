import styled from "styled-components";

const SplayBarWrap = styled.div`
  width: 100%;
`;
const GageWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
const Gage = styled.div`
  width: 15%;
  height: 100%;
  background-color: black;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
const PlayNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
  opacity: 0.7;
`;
const PlayItem = styled.div``;

export const PlayBarWrap = () => {
  return (
    <SplayBarWrap>
      <GageWrap>
        <Gage />
      </GageWrap>

      <PlayNum>
        <PlayItem>00:03</PlayItem>
        <PlayItem>30:02</PlayItem>
      </PlayNum>
    </SplayBarWrap>
  );
};
