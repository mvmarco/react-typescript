import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

interface IState {
  //array of objects
  people: {
    name: string,
    age: number,
    url: string,
    note?: string // optional, either a string or undefined: hover it
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Forest",
      url: "https://media.globalcitizen.org/thumbnails/5b/a9/5ba9890a-7fb4-4110-902f-b8f1eb089698/india-forests-6-billion-hero.jpg__1600x900_q85_crop_subsampling-2.jpg",
      age: 100,
      note: "blabla",
    }
  ]);



  return (
    <div className="App">
      <h1>Test App</h1>
      <List people={people} />
      <AddToList />
    </div>
  );
}

export default App;
