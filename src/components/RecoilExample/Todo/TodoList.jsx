import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./TodoStore";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoListCreator></TodoListCreator>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </div>
  );
}
