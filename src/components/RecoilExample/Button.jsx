import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeLabelState, fontSizeState } from "./Store";
import { textState } from "./CounterStore";

export default function Button() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  const [text] = useRecoilState(textState);

  return (
    <>
      <div>Current font size :{fontSizeLabel}</div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge{text}
      </button>
    </>
  );
}
