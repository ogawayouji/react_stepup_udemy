import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    // <div>
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      {/* <img */}
      {/* height={160} */}
      {/* // width={160} */}
      {/* src={user.image} */}
      {/* // src="https://source.unsplash.com/LEpfefQf4rU" */}
      {/* alt={user.name} */}
      {/* // alt="プロフィール" // /> */}
      {/* <img src="https://unsplash.com/photos/LEpfefQf4rU" alt="プロフィール" /> */}
      {/* <p>名前</p> */}
      {/* <p>{user.name}</p> */}
      {/* <dl> */}
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        {/* <dd>11111@aaa.com</dd> */}
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        {/* <dd>000-9999-88888</dd> */}
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        {/* <dd>あああああ会社</dd> */}
        <dt>WEB</dt>
        <dd>{user.website}</dd>
        {/* <dd>htttttttttt.com</dd> */}
        {/* </dl> */}
      </SDl>
      {/* </div> */}
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
