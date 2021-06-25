import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);
  // const contextName='ogawa';
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
    {/* <UserContext.Provider value={{ contextName }}> */}
      {children}
    </UserContext.Provider>
  );
};