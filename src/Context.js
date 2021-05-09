import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState([]);

  const handleMineral = () => {
    setInputs([
      ...inputs,
      {
        id: uuidv4(),
        owner: true,
        mineral: false,
        npri: true,
        label: false
      }
    ]);
  };

  const handleNpri = () => {
    setInputs([
      ...inputs,
      {
        id: uuidv4(),
        owner: true,
        mineral: true,
        npri: false,
        label: true
      }
    ]);
  };

  const handleDelete = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <Context.Provider
      value={{
        inputs,
        handleMineral,
        handleNpri
      }}
    >
      {children}
    </Context.Provider>
  );
};
