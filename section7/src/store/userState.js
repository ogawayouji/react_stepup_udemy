import React from 'react'
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});

