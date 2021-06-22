import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
  // return <div>{children}</div>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
