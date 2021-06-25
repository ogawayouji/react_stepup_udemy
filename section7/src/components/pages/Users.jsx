import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom"
import { SecondaryButton } from "../atoms/button/SecondaryButton"

import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider"

import { userState } from "../../store/userState"
import { useResetRecoilState, useRecoilState } from "recoil";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ogawa-${val}`,
    image: "https://source.unsplash.com/LEpfefQf4rU",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { state } = useLocation();
  // const isAdmin = state ? state.isAdmin: false;
  // const { userInfo, setUserInfo } = useContext(UserContext)
const [ userInfo, setUserInfo ] = useRecoilState(userState)

  const onClickSwitch = () => setUserInfo({
    isAdmin: !userInfo.isAdmin
  })
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          // <UserCard key={user.id} user={user} isAdmin={isAdmin}/>
          <UserCard key={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: report(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
