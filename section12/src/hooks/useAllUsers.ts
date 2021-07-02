/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState } from 'react'
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();

  const getUsers = () => {
    setLoading(true)
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザーの取得に失敗しました", status: "error" })
      }).finally(() => {
        setLoading(false)
      })
  }
  return { getUsers, loading, users }
}
