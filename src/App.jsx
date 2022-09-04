
import './App.scss';
import Score from './components/score/Score';
import {Board} from "./board";
import Match from './components/match/Match';
import { useState } from 'react';


const {Matches} = Board;

function App() {

  const [matches, setMatches] = useState([...Matches]);

  return (
    <div className="App">
      
      <Score setMatches={setMatches} matches={matches}/>
      <Match matches={matches}/>
    </div>
    
  );
}

export default App;
