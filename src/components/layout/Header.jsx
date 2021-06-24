import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    // <header>
    <SHeader>
      {/* <Link to="/">HOME</Link>
      <Link to="/users">USERS</Link> */}
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
      {/* </header> */}
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
