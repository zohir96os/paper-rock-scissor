import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [cpu, setCpu] = useState("");
  const [result, setResult] = useState("");
  let random = ["rock", "paper", "scissor"];
  const cpuRandom = () => {
    const randomIndex = Math.floor(Math.random() * random.length);
    setCpu(random[randomIndex]);
  };

  useEffect(() => {
    winner();
  }, [user, cpu]);

  const handleButtonClick = (value) => {
    cpuRandom();
    setUser(value);
    winner();
  };

  const winner = () => {
    if (user === cpu) {
      setResult("draw");
    } else if (
      (user === "scissor" && cpu === "paper") ||
      (user === "paper" && cpu === "rock") ||
      (user === "rock" && cpu === "scissor")
    ) {
      setResult("user won");
    } else {
      setResult("cpu won");
    }
  };

  return (
    <>
      <div className="container">
        <button onClick={() => handleButtonClick("rock")} value="rock">
          Rock
        </button>
        <button onClick={() => handleButtonClick("paper")} value="paper">
          Paper
        </button>
        <button onClick={() => handleButtonClick("scissor")} value="scissor">
          Scissor
        </button>
        <p className="user">User: {user}</p>
        <p className="cpu">Cpu: {cpu}</p>
        <p className="result">{result}</p>
      </div>
    </>
  );
}

export default App;
