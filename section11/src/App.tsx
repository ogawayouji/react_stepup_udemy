import axios from 'axios';
import React, { useState } from 'react';
// import logo from './logo.svg';
import "./App.css";
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';
import { User } from './types/api/user';
import { UserProfile } from './types/userProfile';

// const user = {
//   id: 1,
//   name: "ogawa",
//   email: "ogawa@gmail.com",
//   address: "address"
// };

function App() {
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const  {getUsers, userProfiles, loading, error} = useAllUsers();

  const onClickFetchUser = () => getUsers();
    // const onClickFetchUser = () => {
    // setLoading(true);
    // setError(false);

    // axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   const data = res.data.map((user) => ({
    //     id: user.id,
    //     name: `${user.name}(${user.username})`,
    //     email: user.email,
    //     address: `${user.address.city}${user.address.suite}${user.address.street}`
    //   }));
    //   setUserProfiles(data);
    // }).catch(() => {
    //   setError(true);
    // }).finally(() => {
    //   setLoading(false);
    // });
  // };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red"}}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {/* <UserCard user={user}/> */}
        </>
      )}
    </div>
  );
}

export default App;
