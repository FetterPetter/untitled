import React, { useState } from "react";
import { ButtonMaker } from "./buttonmaker";

export function HeaderChanger() {
  const font = ["10px", "25px", "50px"];
  const [fontTall, setFontTall] = useState(0);
  const [fontState, setFontState] = useState("50px");
  function fontChange() {
    if (fontTall >= 2) {
      setFontTall(0);
      setFontState(font[fontTall]);
    } else {
      setFontState(font[fontTall]);
      setFontTall(fontTall + 1);
    }
  }
  return (
    <>
      <h1 style={{ fontSize: fontState }}>Velkommen</h1>{" "}
      <div style={{ position: "absolute", left: "350", top: "70" }}>
        <ButtonMaker handleClick={fontChange} buttonName={"Klikk her?"} />
      </div>
    </>
  );
}
