
import './App.scss';
import Score from './components/score/Score';
import {Board} from "./board";
import Match from './components/match/Match';
import { useState } from 'react';


const {Matches} = Board;

function App() {

  // creo el estado de los partidos, al que en su estado inicial le paso los partidos que tenemos ya en la lista
  const [matches, setMatches] = useState([...Matches]);

  return (
    <div className="App">
      
      {/* le mando los estados a los componentes en los que los necesito, gracias a esto cada vez que meta un nuevo partido se me actualizará este estado y renderizará de nuevo la app*/}
      <Score setMatches={setMatches} matches={matches}/>
      <Match matches={matches}/>
    </div>
    
  );
}

export default App;
