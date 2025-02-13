import React from "react";

export function InputFieldMaker({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <input onChange={onChange} />;
}
