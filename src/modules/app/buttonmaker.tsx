import React from "react";

export function ButtonMaker({
  handleClick,
  buttonName,
}: {
  handleClick: any;
  buttonName: string;
}) {
  return <button onClick={handleClick}>{buttonName}</button>;
}
