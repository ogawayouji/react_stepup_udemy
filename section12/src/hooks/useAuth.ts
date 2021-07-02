import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { User } from '../types/api/user';
import { useHistory } from "react-router-dom"
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage()

  const [ loading, setLoading] = useState(false)
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        showMessage({ title: "ログインしました", status: "success" });
        history.push("/home")
      } else {
        // alert("ユーザーが見つかりません");
        showMessage({ title: "ユーザーが見つかりません", status: "error" });

      }
    }).catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
        // alert("ログインできません");
      setLoading(false);
    }).finally(() => setLoading(false));
  }, [history, showMessage]);
  return {
    login, loading
  }
}