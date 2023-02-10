import React, { useRef, useState } from "react";
import { add, format, sub, differenceInHours } from "date-fns";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";
import { format as timeZoneFormat } from "date-fns-tz";

export default function DateFns() {
  const [day, setDay] = useState("");

  const birthDayRef = useRef(null);
  const handleBirthDayChange = (e) => {
    setDay(format(new Date(e.target.value), "EEEE", { locale: ko }));
  };
  const dateFnsDate = new Date();

  const newDateFnsDate = add(dateFnsDate, { days: 1 });
  const newDateFnsDate2 = addWeeks(newDateFnsDate, 1);
  return (
    <div>
      <h1>Date-fns</h1>
      <div>Imutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate2, "yyyy-MM-dd")}
        <br />
        <div style={{ color: "red" }}>Summer Time (New-York)</div>
        {timeZoneFormat(
          new Date("2018-03-10 13:00:00"),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
        <div>
          2018년 3월 10일 13시에 하루 더하기:
          {/* {dayjs
            .tz("2018-03-10 13:00:00", "America/New York")
            .add(1, "day")
            .format()} */}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:
          {/* {dayjs("2018-03-10 13:00:00").add(24, "hour").format()} */}
        </div>
        <div>leap year korea (New-York)</div>
        <div>
          2017년 1월 1일 1년 빼기:
          {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM- dd")}
        </div>
        <div>
          2017년 1월 1일 365일 빼기:
          {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        </div>
      </div>
      <br />
      <div>한국어로 표기하기 07-17-2021을 2021년 7월 17일로 표기</div>
      {format(new Date("2022-02-14"), "yyyy년M월d일")}
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
        {differenceInHours(
          new Date("2022-02-14 03:00"),
          new Date("2022-02-15 02:00")
        )}
        시간
      </div>
    </div>
  );
}
