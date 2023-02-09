import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko"); // 한국말로 해줘야 함
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DateFns() {
  const [day, setDay] = useState("");

  const birthDayRef = useRef(null);
  const handleBirthDayChange = (e) => {
    setDay(dayjs(e.target.value, "YYYY-MM-DD").format("dddd"));
  };
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.clone().add(1, "week");
  return (
    <div>
      <h1>Date-fns</h1>
      <div>Imutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
        <br />
        <div>Summer Time (New-York)</div>
        <div>{dayjs.tz.guess()}</div>
        <div>
          2018년 3월 10일 13시에 하루 더하기:
          {/* {dayjs
            .tz("2018-03-10 13:00:00", "America/New York")
            .add(1, "day")
            .format()} */}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:
          {dayjs("2018-03-10 13:00:00").add(24, "hour").format()}
        </div>
        <div>leap year korea (New-York)</div>
        <div>
          2017년 1월 1일 1년 빼기:
          {dayjs("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017년 1월 1일 365일 빼기:
          {dayjs("2017-01-01").subtract(365, "day").format()}
        </div>
      </div>
      <br />
      <div>한국어로 표기하기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</div>
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2023-02-15 03:00 와 2023-02-16 19:00는 몇시간 차이인가??</div>
      <div>
        {dayjs("2023-02-15 03:00").diff(dayjs("2023-02-16 19:00"), "hours")}
        시간
      </div>
    </div>
  );
}
