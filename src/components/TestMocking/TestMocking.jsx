import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name:{name}/age:{age}
    </li>
  );
};

const url =
  "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react";

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        //에러메세지 커스텀 하는법 handler랑 같이 수정
        setData(json.data);
      })
      .catch((error) => {
        setError(`Something Wrong: ${error}`);
      });
  };

  const handleClick2 = () => {
    fetch("/login")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <br />
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item
              key={`${person.name} -${person.age}`}
              name={person.name}
              age={person.age}
            ></Item>
          ))}
        </ul>
      )}
      <h1>TestMocking</h1>
      <h1>Msw 어렵다.</h1>
    </div>
  );
}
