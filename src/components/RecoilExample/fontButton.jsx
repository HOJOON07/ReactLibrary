import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";

export default function fontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);

  return (
    <button
      onClick={() => setFontSize((size) => size + 1)}
      style={{ fontSize }}
    >
      Click to Enlarge
    </button>
  );
}