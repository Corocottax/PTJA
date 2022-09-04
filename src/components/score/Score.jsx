import matchers from "@testing-library/jest-dom/matchers";
import { useState } from "react";
import "./score.scss";

const Score = ({setMatches, matches}) => {

  const matchMokeado = {
    homeTeam: "MokedHomeTeam",
    awayTeam: "MokedAwayTeam",
    goalsHomeTeam: 5,
    goalsAwayTeam: 0,
    totalGoals: 0,
    date: "2022-07-30",
  };

  const [match, setMatch] = useState(matchMokeado);

  const startGame = () => {
    const newMatch = { ...match, goalsHomeTeam: 0, goalsAwayTeam: 0 };
    setMatch(newMatch);
  };

  /* FUNCTION HOME TEAM SCORE  */

  const updateScore = (team) => {
    let goal = 0;
    let newMatchUpdate;
    if (team === "home") {
      goal = match.goalsHomeTeam + 1;
      newMatchUpdate = {...match, goalsHomeTeam: goal};
    } else {
      goal = match.goalsAwayTeam + 1;
      newMatchUpdate = {...match, goalsAwayTeam: goal};
    }
    setMatch(newMatchUpdate);
  }

  return (
    <div className="container">
      <h1>Score Match</h1>
      <div className="container-score">
        <div className="container-score__item">
          <div>
            <button onClick={() => updateScore("home")}>Update Goal Home</button>
          </div>
        </div>
        <div className="container-score__item">
          <h1>
            {match.goalsHomeTeam} - {match.goalsAwayTeam}
          </h1>
        </div>
        <div className="container-score__item">
          <div>
            <button onClick={() => updateScore("away")}>Update Goal Away</button>
          </div>
        </div>
      </div>
      <div>
        <button className="container-score__item" onClick={startGame}>
          Start Game
        </button>
        <button onClick={() => setMatches([...matches, match])}>Save</button>
      </div>
    </div>
  );
};

export default Score;
