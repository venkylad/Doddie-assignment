import Header from "./components/Header";
import Add from "./components/AddButtons";
import Inputs from "./components/Inputs";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [inputs, setInputs] = useState([]);

  const handleNpri = () => {
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

  const handleMineral = () => {
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
    <div>
      <Header />
      {inputs.map((input, idx) => (
        <Inputs key={idx} input={input} handleDelete={handleDelete} />
      ))}

      <Add handleNpri={handleNpri} handleMineral={handleMineral} />
    </div>
  );
};
export default Home;
