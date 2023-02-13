import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./TodoStore";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStat from "./TodoListStat";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStat></TodoListStat>
      <TodoListFilters></TodoListFilters>
      <TodoListCreator></TodoListCreator>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </div>
  );
}
