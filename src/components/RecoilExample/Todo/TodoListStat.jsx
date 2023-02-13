import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./TodoStore";

export default function TodoListStat() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li style={{ listStyle: "none" }}>Total items:{totalNum}</li>
      <li style={{ listStyle: "none" }}>Items Completed:{totalCompletedNum}</li>
      <li style={{ listStyle: "none" }}>
        Items not Completed:{totalUncompletedNum}
      </li>
      <li style={{ listStyle: "none" }}>
        Percent Completed:{formattedPercentCompleted}%
      </li>
    </ul>
  );
}
