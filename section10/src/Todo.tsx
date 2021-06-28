import React, { VFC } from 'react'
import { TodoType } from './types/todo';

// type TodoType = {
//   userId: number;
//   // id: number;
//   title: string;
//   completed?: boolean;
//   // completed: boolean;
// };


export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
  // export const Todo = (props: Omit<TodoType, "id">) => {
  // export const Todo = (props: TodoType) => {
  // export const Todo = (props) => {
  const { title, userId, completed = false } = props;
  // const { title, userid, completed } = props;
  const completeMark = completed ? "[完]" : "[未]"
  return (
    <div>
      <p>{`${completeMark} ${title}(ユーザー:${userId}`}</p>
    </div>
  )
};

