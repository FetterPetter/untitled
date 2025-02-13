import React, { useEffect, useState } from "react";

export function BildeSpill() {
  const bildeViser = [
    { id: "1", name: "and", url: "./bilder/and.jpg" },
    { id: "2", name: "katt", url: "./bilder/katt.jpg" },
    { id: "3", name: "kanin", url: "./bilder/kanin.jpg" },
  ];
  const [randomBilde, setRandomBilde] = useState(bildeViser[0]);
  const [riktigTekst, setRiktigTekst] = useState("");
  const [antallForsok, setAntallForsok] = useState(0);
  const [riktig, setRiktig] = useState(true);
  useEffect(() => {
    pickRandomBilde();
  }, []);
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
      <p>klikk på {randomBilde.name}</p>
      {antallForsok > 20 ? (
        <>
          <p>KLIKK PÅ DET BILDET UNDER HER.......</p>
          <img
            alt="bIlD3 Av stort Dyr"
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
    </>
  );
}
function BildeMaker({ url, bildeKlikk }: { url: string; bildeKlikk: any }) {
  return (
    <img
      alt="bilde av dyr"
      src={url}
      style={{ width: "100px", height: "100px" }}
      onClick={bildeKlikk}
    />
  );
}
