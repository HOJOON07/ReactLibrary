import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "./CounterStore";
import { useRecoilValue } from "recoil";
import { charCountState } from "./CounterStore";

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      {/* <br />
      <CharacterCount></CharacterCount> */}
    </div>
  );
}
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
