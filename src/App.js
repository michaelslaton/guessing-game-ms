import { useEffect, useReducer } from "react";
import Scoreboard from "./components/scoreboard/Scoreboard";
import GameButton from "./components/game-button/GameButton";
import "./app.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "win":
      return { ...state, wins: state.wins+1 }
    case "loss":
      return { ...state, losses: state.losses+1 }
    case "reset":
      return { ...state, losses: 0, wins: 0 }
    case "answer":
      return { ...state, answer: action.payload }
    case "b1win":
      return { ...state, b1color: "green" }
    case "b2win":
      return { ...state, b2color: "green" }
    case "b3win":
      return { ...state, b3color: "green" }
    case "b1loss":
      return { ...state, b1color: "red" }
    case "b2loss":
      return { ...state, b2color: "red" }
    case "b3loss":
      return { ...state, b3color: "red" }
    case "resetColors":
      return { ...state, b1color: "white", b2color: "white", b3color: "white" }
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    wins: 0,
    losses: 0,
    answer: 0,
    clicked: 0,
    b1color: "white",
    b2color: "white",
    b3color: "white",
  })

  useEffect(() => randomizer, []);

  const randomizer = () => {
    const rngResult = Math.floor(Math.random() * 3) + 1;
    dispatch({ type: "answer", payload: rngResult });
    return;
  };

  const handleReset = () => {
    dispatch({ type: "resetColors" })
    dispatch({ type: "reset" })
  }

  return (
    <div className="game-screen">
      <div>
        <Scoreboard wins={state.wins} losses={state.losses} />
      </div>

      <div className="game-controls">
        <GameButton
          value={1}
          answer={state.answer}
          random={randomizer}
          dispatch={dispatch}
          clicked={state.clicked}
          color={state.b1color}
        />
        <GameButton
          value={2}
          answer={state.answer}
          random={randomizer}
          dispatch={dispatch}
          clicked={state.clicked}
          color={state.b2color}
        />
        <GameButton
          value={3}
          answer={state.answer}
          random={randomizer}
          dispatch={dispatch}
          clicked={state.clicked}
          color={state.b3color}
        />
      </div>

      <button className={"reset-button"} onClick={handleReset}>Reset</button>

    </div>
  );
}
