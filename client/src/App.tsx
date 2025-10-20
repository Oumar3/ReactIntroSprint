import React, { useState } from "react";
import Pokedex from "./components/Pokedex";
import "./index.css"



const App: React.FC = () => {
  const [view, setView] = useState("pokedex");
 

  const handleInterface = (view: string) => {
    setView(view);
  };



  return (
    <div>

      {view === "pokedex" && (
        <Pokedex />
      )}
      {/* {view === "details" && (
        <PokemonDetails />
      )} */}
    </div>
  );
};

export default App