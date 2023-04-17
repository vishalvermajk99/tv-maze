import { useEffect, useState } from "react";
import "./App.css";
import { Cards } from "./Components/Cards";

export const App = () => {
  const [myChoice, setMyChoice] = useState("");
  const [userInput, setUserInput] = useState("");
  const [myArray, setMyArray] = useState([]);
  const [userPlaceholder, setPlaceholder] = useState("");
  const [error, setError] = useState("");
  const [myDisplay, setDisplay] = useState("hidden");

  console.log(myChoice)

  useEffect(() => {
    if (userInput !== "" && myChoice !== "") {
      fetch(`https://api.tvmaze.com/search/${myChoice}?q=${userInput}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            setMyArray([]);
            setDisplay("hidden");
            setError("No Data Found");
          } else {
            setDisplay("visible");
            setMyArray(data);
            setError("");
          }
        });
    } else {
      setMyArray([]);
      setDisplay("hidden");
      if (myChoice === "people") {
        setPlaceholder("eg:- Dwayne Jhonson");
      } else if (myChoice === "shows") {
        setPlaceholder("eg:- SpiderMan");
      }
    }
  }, [userInput, myChoice]);

  return (
    <div className="main-container">
      <div className="input-container">
        <div className="user-input">
          <h1>TVmaze</h1>
          <p>Search Your Favorite Show</p>
          <input
            type={"radio"}
            name="selection"
            value={"people"}
            onChange={(e) => {
              setMyArray([]);
              setMyChoice(e.target.value);
            }}
          ></input>
          <span>Actor</span>
          <input
            type={"radio"}
            name="selection"
            value={"shows"}
            onChange={(e) => {
              setMyArray([]);
              setMyChoice(e.target.value);
            }}
          ></input>
          <span>Shows</span>
          <br />
          <input
            className="input-box"
            type={"text"}
            value={userInput}
            size="20"
            placeholder={userPlaceholder}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          ></input>
          <br />
          <span className="error">{error}</span>
        </div>
      </div>
      <div className="displayCards" style={{ visibility: myDisplay }}>
        <Cards data={myArray} choice={myChoice} />
      </div>
    </div>
  );
};
