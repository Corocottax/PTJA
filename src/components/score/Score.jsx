import matchers from "@testing-library/jest-dom/matchers";
import { useState } from "react";
import "./score.scss";

const Score = ({ setMatches, matches }) => {
  // cogemos la fecha para que no tengamos que ponerla a mano
  let date = new Date();

  // creamos el estado inicial, sobre el cual haremos todo, este es nuestro partido
  const INITIAL_MATCH_STATE = {
    homeTeam: "",
    awayTeam: "",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    totalGoals: 0,
    date: date,
  };

  // creamos el estado con el estado inicial
  const [match, setMatch] = useState(INITIAL_MATCH_STATE);

  const startGame = () => {
    // cada vez que iniciamos un juego ponemos los goles a 0
    const newMatch = { ...match, goalsHomeTeam: 0, goalsAwayTeam: 0 };
    setMatch(newMatch);
  };

  /* FUNCTION UPDATE SCORE  */
  const updateScore = (team) => {
    // creamos la variable goal para luego añadirla
    let goal = 0;
    // creamos el objeto que mandaremos actualizado
    let newMatchUpdate;
    // comprobamos si ha marcado el equipo local o el visitante
    if (team === "home") {
      // si marca el local el goal será los que tuvieran antes más uno, lo mismo para visitantes
      goal = match.goalsHomeTeam + 1;
      // y actualizamos el objeto que le pasaremos al estado, con el goal actualizado
      newMatchUpdate = { ...match, goalsHomeTeam: goal };
    } else {
      goal = match.goalsAwayTeam + 1;
      newMatchUpdate = { ...match, goalsAwayTeam: goal };
    }
    // actualizamos también el valor de los goles totales, sumándole 1
    let goals = match.totalGoals + 1;
    newMatchUpdate = { ...newMatchUpdate, totalGoals: goals };
    // seteamos nuestro partido con los nuevos datos
    setMatch(newMatchUpdate);
  };

  return (
    <div className="container">
      <h1>Score Match</h1>
      <div className="container-score">
        <div className="container-score__item">
          <div>
            {/* llamamos a la función updateScore indicándole a que equipo le actualizamos el gol */}
            <button onClick={() => updateScore("home")}>
              Update Goal Home
            </button>
          </div>
        </div>
        <div className="container-score__item">
          <h1>
            {match.goalsHomeTeam} - {match.goalsAwayTeam}
          </h1>
        </div>
        <div className="container-score__item">
          <div>
            {/* llamamos a la función updateScore indicándole a que equipo le actualizamos el gol */}
            <button onClick={() => updateScore("away")}>
              Update Goal Away
            </button>
          </div>
        </div>
      </div>
      <div>
        <button className="container-score__item" onClick={startGame}>
          Start Game
        </button>
        {/* añadimos a nuestro estado de partidos el nuevo partido cuando le demos al botón save */}
        <button onClick={() => setMatches([...matches, match])}>Save</button>
      </div>
    </div>
  );
};

export default Score;
