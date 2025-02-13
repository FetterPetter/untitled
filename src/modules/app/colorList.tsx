import React, { useState } from "react";
import { ButtonMaker } from "./buttonmaker";
import { InputFieldMaker } from "./inputFieldMaker";
import { ListMaker } from "./listMaker";

export function ColorList() {
  const [mellomText, setMellomText] = useState<number>(0);
  const [fargeText, setFargeText] = useState("");
  const farger = ["red", "blue", "green", "darkblue"];
  const [text, setText] = useState("");
  function handleClick() {
    if (text !== null) {
      setMellomText(Number(text));
    }
  }
  function handleSortClick() {
    setFargeText(text);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  function fargeClick(farge: string) {
    alert("du klikket på " + farge);
  }
  return (
    <>
      <ul>
        {farger.map((farger) =>
          farger !== fargeText ? (
            <li style={{ color: farger }} onClick={() => fargeClick(farger)}>
              {farger}
            </li>
          ) : null,
        )}{" "}
      </ul>
      <InputFieldMaker onChange={handleChange} />
      <ButtonMaker handleClick={handleClick} buttonName={"skriv tall"} />
      <ButtonMaker handleClick={handleSortClick} buttonName={"skriv farge"} />
      <ul>
        {Array.from({ length: mellomText }).map((_, index) => (
          <ListMaker key={index} listeNummer={index + 1} />
        ))}
      </ul>
    </>
  );
}
