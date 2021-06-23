import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      {/* <div style={{ height: "50px", backgroundColor: "red" }}></div> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};
