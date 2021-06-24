import { Header } from "../layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      {/* <div style={{ height: "50px", backgroundColor: "red" }}></div> */}
      <Header />
      {children}
    </>
  );
};
