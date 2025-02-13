import React, { useState } from "react";

export function RarHoverFontgreier() {
  const [hover, setHover] = useState(false);
  return (
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
  );
}
