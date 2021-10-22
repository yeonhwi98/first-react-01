import styled from "styled-components";

const SUserWrap = styled.div``;
const UserInfo = styled.div``;
const Avatar = styled.div``;
const userName = styled.div``;
const NextBtn = styled.div``;

export const UserWrap = ({ avatar, userName }) => {
  return (
    <SUserWrap>
      <UserInfo>
        <Avatar
          style={{
            background: `url(${avatar} no-repeat center / cover)`,
          }}
        ></Avatar>
        <userName>{userName}</userName>
      </UserInfo>
      <NextBtn>
        <i class="fas fa-step-forward"></i>
      </NextBtn>
    </SUserWrap>
  );
};
