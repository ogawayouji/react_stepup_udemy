import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      {/* <PerimaryButton>検索</PerimaryButton> */}
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
