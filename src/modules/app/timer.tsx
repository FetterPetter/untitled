import React, { useEffect, useState } from "react";
export function Timer() {
  const [counter, setCounter] = useState(0);
  const [fontSize, setFontSize] = useState(0);
  const colorList = [
    "red",
    "green",
    "blue",
    "black",
    "yellow",
    "gold",
    "crimson",
    "pink",
    "orange",
    "violet",
  ];
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => setCounter(counter + 1), 100);
    return () => clearInterval(intervalId);
  });
  if (counter === 30) {
    setCounter(counter + 1);
    setFontSize(2);
    alert("OJ");
  }
  return (
    <p
      style={{
        position: "absolute",
        fontSize: fontSize + "70px",
        right: 150,
        top: 50,
        color: colorList[counter % colorList.length],
      }}
    >
      {counter}
    </p>
  );
}
