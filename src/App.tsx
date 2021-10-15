import React, { useState } from "react";
import "./App.css";

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
  const [people, setPeople] = useState<IState["people"]>([]);



  return (
    <div className="App">
      <h1>Test App</h1>
    </div>
  );
}

export default App;
