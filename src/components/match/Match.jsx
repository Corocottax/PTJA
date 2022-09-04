import React, { useEffect, useState } from "react";
import "./match.scss";

const Match = ({ matches }) => {

  // aquí solo cambié los nombres de las variables y estados para unas mejores prácticas, tenías match en vez de matches cuando eran varios etc.
  const primerValor = () => {
    matches &&
      matches.map((match) => {
        return (
          <div>
            <p>
              {match.homeTeam} - {match.awayTeam}: {match.goalsHomeTeam} -{" "}
              {match.goalsAwayTeam}
            </p>
          </div>
        );
      });
  };
  const [sortedMatches, setSortedMatches] = useState(primerValor);

  const sortBoard = (event) => {
    const sortMatches = matches.sort((a, b) => {
      if (a.totalGoals < b.totalGoals) {
        return 1;
      }
      if (a.totalGoals > b.totalGoals) {
        return -1;
      }
      if (a.date > b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }

      return b.totalGoals - a.totalGoals;
    });
    setSortedMatches(sortMatches);
  };

  useEffect(() => {
    sortBoard()
  }, [])

  return (
    <div className="board-matches">
      <h2>Matches</h2>
      <div className="container-matches">
        {matches &&
          matches.map((match) => {
            return (
              <div className="container-matches__item">
                <p>
                  {match.homeTeam} - {match.awayTeam}: {match.goalsHomeTeam} -{" "}
                  {match.goalsAwayTeam}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Match;
