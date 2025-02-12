import React, { useEffect, useState } from "react";
// @ts-ignore
import andImage from "./bilder/and.jpg";
// @ts-ignore
import kattImage from "./bilder/katt.jpg";
// @ts-ignore
import kaninImage from "./bilder/kanin.jpg";
export function Application() {
  const [text, setText] = useState("");
  const [mellomText, setMellomText] = useState<number>(0);
  const [fargeText, setFargeText] = useState("");
  const [hover, setHover] = useState(false);
  const farger = ["red", "blue", "green", "darkblue"];
  const font = ["10px", "25px", "50px"];
  const [fontTall, setFontTall] = useState(0);
  const [fontState, setFontState] = useState("50px");
  const bildeViser = [
    { id: "1", name: "and", url: andImage },
    { id: "2", name: "katt", url: kattImage },
    { id: "3", name: "kanin", url: kaninImage },
  ];
  const [randomBilde, setRandomBilde] = useState(bildeViser[0]);
  const [riktigTekst, setRiktigTekst] = useState("");
  const [antallForsok, setAntallForsok] = useState(0);
  const [riktig, setRiktig] = useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  useEffect(() => {
    pickRandomBilde();
  }, []);
  function handleClick() {
    if (text !== null) {
      // @ts-ignore
      setMellomText(text);
    }
  }
  function handleSortClick() {
    setFargeText(text);
  }
  function fargeClick(farge: string) {
    alert("du klikket på " + farge);
  }
  function fontChange() {
    if (fontTall >= 2) {
      setFontTall(0);
      setFontState(font[fontTall]);
    } else {
      setFontState(font[fontTall]);
      setFontTall(fontTall + 1);
    }
  }
  function bildeKlikk(bildeNavn: string) {
    if (randomBilde.name === bildeNavn) {
      setRiktigTekst("Riktig! bra jobba");
      pickRandomBilde();
      setRiktig(true);
      setAntallForsok(0);
    } else {
      setRiktigTekst("Dessverre feil, prøv igjen");
      setAntallForsok(antallForsok + 1);
      setRiktig(false);
    }
  }
  function pickRandomBilde() {
    const randomIndex = Math.floor(Math.random() * bildeViser.length);
    setRandomBilde(bildeViser[randomIndex]);
  }
  return (
    <>
      <h1 style={{ fontSize: fontState }}>Velkommen</h1>{" "}
      <ButtonMaker handleClick={fontChange} buttonName={"Klikk her?"} />
      <p>klikk på {randomBilde.name}</p>
      {antallForsok > 20 ? (
        <>
          <p>KLIKK PÅ DET BILDET UNDER HER.......</p>
          <img
            src={randomBilde.url}
            style={{
              width: antallForsok * antallForsok + "px",
              height: antallForsok * antallForsok + "px",
            }}
            onClick={() => bildeKlikk(randomBilde.name)}
          />
        </>
      ) : null}
      <div>
        {bildeViser.map((bilde) => (
          <BildeMaker
            key={bilde.id}
            url={bilde.url}
            bildeKlikk={() => bildeKlikk(bilde.name)}
          />
        ))}
        <p
          style={{
            color: riktig ? "green" : "red",
            fontSize: riktig ? "20px" : "15px",
          }}
        >
          {riktigTekst} du har brukt: {antallForsok}
        </p>
        {antallForsok > 10 ? (
          <p>Du burde få dette til på under {antallForsok} forsøk</p>
        ) : null}
      </div>
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
function ButtonMaker({
  handleClick,
  buttonName,
}: {
  handleClick: any;
  buttonName: string;
}) {
  return <button onClick={handleClick}>{buttonName}</button>;
}
// her tar jeg et inp
function InputFieldMaker({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <input onChange={onChange} />;
}
//her lager jeg en liste som tar inn et tall som jeg bruker når jeg printer den for å se hvilket tall den er i listen
function ListMaker({ listeNummer }: { listeNummer: number }) {
  return <li>{listeNummer}</li>;
}
function BildeMaker({ url, bildeKlikk }: { url: string; bildeKlikk: any }) {
  return (
    <img
      src={url}
      style={{ width: "100px", height: "100px" }}
      onClick={bildeKlikk}
    />
  );
}
