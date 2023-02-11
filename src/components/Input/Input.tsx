import React, { useState } from "react";
import { InputContainer } from "./Input.styles";

interface ISetValueProps {
  name: string;
  value: string;
}

interface InputProps {
  type: "text" | "email" | "tel";
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  setValue: ({ name, value }: ISetValueProps) => void;
}

export const Input = ({
  type,
  label,
  value,
  setValue,
  name,
  placeholder,
}: InputProps) => {
  const [inputFocused, setInputFocused] = useState(Boolean(value));

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    !value && setInputFocused(false);
  };

  return (
    <InputContainer>
      <div className={inputFocused ? "focused" : ""}>
        <label htmlFor={label}>{label}</label>
        <input
          type={type}
          id={name}
          placeholder={inputFocused ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          name={name}
          onChange={(e) => setValue({ name, value: e.target.value })}
        />
      </div>
    </InputContainer>
  );
};
