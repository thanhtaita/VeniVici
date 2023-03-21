import { useState } from "react";
import "./App.css";
import Discover from "./assets/Components/Discover";
import Banlist from "./assets/Components/Banlist";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="whole-container">
      <div className="main">
        <h1 classname="main-title">Veni Vici!</h1>
        <p className="main-description">
          Welcome to dog world. Please find your most ideal dog.
        </p>
        <p>🐶🐕🐾🐩🦮🐺🐶🐕🐾🐩🦮🐺</p>
        <div className="object-whole-container">
          <h2 className="object-name">Object Name</h2>
          <div className="object-details-btn">
            <button className="appearance">Appearance</button>
            <button className="weight">Weight</button>
            <button className="origin">Origin</button>
            <button className="expectancy">Age</button>
          </div>
          <img
            src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
            alt="a dog image"
            className="main-object-img"
          />
          <button className="object-discover">🔀Discover</button>
        </div>
      </div>
    </div>
  );
}

export default App;
