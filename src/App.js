import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {
  const [animals, setAnimals] = useState([]);

  function getRandomAnimal() {
    const animals = ["dog", "bird", "cow", "cat", "horse", "gator"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
