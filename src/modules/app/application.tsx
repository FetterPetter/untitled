import React, { useState } from "react";
import { BildeSpill } from "./bildespill";
import { ButtonMaker } from "./buttonmaker";
import { InputFieldMaker } from "./inputFieldMaker";
import { ListMaker } from "./listMaker";
import { HeaderChanger } from "./headerChanger";

export function Application() {
  const [text, setText] = useState("");
  const [mellomText, setMellomText] = useState<number>(0);
  const [fargeText, setFargeText] = useState("");
  const [hover, setHover] = useState(false);
  const farger = ["red", "blue", "green", "darkblue"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  function handleClick() {
    if (text !== null) {
      setMellomText(Number(text));
    }
  }
  function handleSortClick() {
    setFargeText(text);
  }
  function fargeClick(farge: string) {
    alert("du klikket på " + farge);
  }

  return (
    <>
      <HeaderChanger />
      <BildeSpill />
      <div>
        {farger.map((farger) =>
          farger !== fargeText ? (
            <p style={{ color: farger }} onClick={() => fargeClick(farger)}>
              {farger}
            </p>
          ) : null,
        )}
      </div>
      <div>
        <p>Skriv et tall og trykk på knappen</p>
        <InputFieldMaker onChange={handleChange} />
        <ButtonMaker handleClick={handleClick} buttonName={"skriv tall"} />
        <ButtonMaker handleClick={handleSortClick} buttonName={"skriv farge"} />
        <ul>
          {Array.from({ length: mellomText }).map((_, index) => (
            <ListMaker key={index} listeNummer={index + 1} />
          ))}
        </ul>
        <p
          style={{
            color: hover ? "darkcyan" : "black",
            fontSize: hover ? "20px" : "15px",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          her er det mye rart å trykke på
        </p>
      </div>
    </>
  );
}
