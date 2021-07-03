import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { User } from '../types/api/user';
import { useHistory } from "react-router-dom"
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser();

  const [ loading, setLoading] = useState(false)
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        const isAdmin = res.data.id === 10 ? true : false
        setLoginUser({...res.data, isAdmin });
        showMessage({ title: "ログインしました", status: "success" });
        history.push("/home")
      } else {
        // alert("ユーザーが見つかりません");
        showMessage({ title: "ユーザーが見つかりません", status: "error" });
        setLoading(false);
      }
    }).catch(() => {
      showMessage({ title: "ログインできません", status: "error" });
      // alert("ログインできません");
      setLoading(false);
    // }).finally(() => setLoading(false));
    })
  }, [history, showMessage, setLoginUser]);
  return {
    login, loading
  }
}
