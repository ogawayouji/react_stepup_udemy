import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout.jsx";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ogawa",
  image: "https://source.unsplash.com/LEpfefQf4rU",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <Router />
    // <div>
    // <BrowserRouter>
    //   <HeaderOnly>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    // {/* <PerimaryButton>検索</PerimaryButton> */}
    // {/* <SecondaryButton>検索</SecondaryButton>
    // <br />
    // <SearchInput />
    // <UserCard user={user} />
    //   {/* </div> */}
    //   {/* </HeaderOnly> */}
    // {/* </DefaultLayout>
    // </BrowserRouter> */}
  );
}
