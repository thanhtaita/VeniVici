import { useEffect, useState } from "react";
import "./App.css";
import Discover from "./assets/Components/Discover";
import Banlist from "./assets/Components/Banlist";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const dogName = [
    "Emma",
    "Olivia",
    "Ava",
    "Isabella",
    "Sophia",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Elizabeth",
    "Sofia",
    "Ella",
    "Madison",
    "Scarlett",
    "Victoria",
    "Aria",
    "Grace",
  ];
  const [count, setCount] = useState(0);
  const [objects, setObjects] = useState([]);
  const [started, setStarted] = useState(false);
  const [banAttribute, setBanAttribute] = useState([]);
  const defaultObj = {
    name: "No Name",
    img: "https://st2.depositphotos.com/2393921/6559/i/450/depositphotos_65591231-stock-photo-concept-for-a-new-beginning.jpgg",
    lifespan: "0 years",
    weight: "0",
  };
  const [obj, setObj] = useState(defaultObj);

  const inBanList = (attributes) => {
    for (let i = 0; i < attributes.length; i++) {
      for (let x = 0; x < banAttribute.length; x++) {
        if (attributes[i] == banAttribute[x]) {
          console.log(banAttribute[x]);
          return true;
        }
      }
    }
  };

  const discoverPressed = () => {
    let query = `https://api.thedogapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=${true}`;
    callAPI(query);
  };
  const callAPI = async (query) => {
    let json;
    do {
      const response = await fetch(query);
      json = await response.json();
    } while (
      inBanList([
        json[0].breeds[0].name,
        json[0].url,
        json[0].breeds[0].life_span,
        json[0].breeds[0].weight.metric,
      ])
    );

    if (json[0] == null) {
      alert("Oops! Something went wrong with that query, let's try again!");
    } else {
      let tempObj = {
        name: json[0].breeds[0].name,
        img: json[0].url,
        lifespan: json[0].breeds[0].life_span,
        weight: json[0].breeds[0].weight.metric,
      };
      setObj(tempObj);
      setObjects((Obj) => [...Obj, tempObj]);
      setStarted(true);
    }
  };

  const banPressed = (attribute) => {
    if (started) {
      setBanAttribute((attributes) => [...attributes, attribute]);
    }
  };

  return (
    <div className="whole-container">
      <Discover objects={objects} />
      <div className="main">
        <h1 className="main-title">Veni Vici!</h1>
        <p className="main-description">
          Welcome to dog world. Please find your most ideal dog.
        </p>
        <p>🐶🐕🐾🐩🦮🐺🐶🐕🐾🐩🦮🐺</p>
        <div className="object-whole-container">
          <h2 className="object-name">Object Name</h2>
          <div className="object-details-btn">
            <button
              className="name"
              onClick={(e) => banPressed(e.target.textContent)}
            >
              {obj.name}
            </button>
            <button
              className="weight"
              onClick={(e) => banPressed(e.target.textContent)}
            >
              {obj.weight} lbs
            </button>
            <button
              className="lifespan"
              onClick={(e) => banPressed(e.target.textContent)}
            >
              {obj.lifespan}
            </button>
          </div>
          <img src={obj.img} alt="a dog image" className="main-object-img" />
          <button className="object-discover" onClick={discoverPressed}>
            🔀Discover
          </button>
        </div>
      </div>
      <Banlist details={banAttribute} setDetails={setBanAttribute} />
    </div>
  );
}

export default App;
