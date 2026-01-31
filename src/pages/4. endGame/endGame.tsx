import "../global.css";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks"

export interface MainpageProps {
  mainpageData?: endGameData;
  setmainpageData?: Dispatch<StateUpdater<endGameData>>;
}
export interface endGameData {
    climbLevel: number;
    Scoring: number;
    Misses: number;
    HumanScore: number;
    HumanMisses: number;

}

const endGame: FunctionalComponent<MainpageProps> = () => {
  
  return (
    <>
    <div>
      <h1>teetee</h1>
    <select>
        <option>No Climb</option>
        <option>L1 Climb</option>
        <option>L2 Climb</option>
        <option>L3 Climb</option>
    </select>

    {/*<Counter name="Scored" count={mainpageData.Scoring} onButtonUp={() => setScoring(Scoring + 1)} onButtonDown={() => setScoring(Scoring - 1)}> </Counter>*/}

    
    </div>
    </>
  );
};

export default endGame;
