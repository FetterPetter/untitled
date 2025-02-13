import React from "react";
import { BildeSpill } from "./bildespill";

import { HeaderChanger } from "./headerChanger";
import { ColorList } from "./colorList";
import { RarHoverFontgreier } from "./rarHoverFontgreier";

export function Application() {
  return (
    <>
      <HeaderChanger />
      <BildeSpill />
      <div>
        <ColorList />
        <RarHoverFontgreier />
      </div>
    </>
  );
}
