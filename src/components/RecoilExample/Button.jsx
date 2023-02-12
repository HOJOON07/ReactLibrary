import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./Store";

export default function Button() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    </div>
  );
}
