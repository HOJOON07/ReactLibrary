import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./Store";

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <button
      onClick={() => setFontSize((size) => size + 1)}
      style={{ fontSize }}
    >
      Click To Enlarge
    </button>
  );
}
