import "../global.css";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks"
import Counter from "../../Components/Counter/Counter.tsx";
export interface endGameData {
    climbLevel: number;
    Scoring: number;
    Misses: number;
    HumanScore: number;
    HumanMisses: number;
}
export interface MainpageProps {
  mainpageData?: endGameData;
  setmainpageData?: Dispatch<StateUpdater<endGameData>>;
}


const endGame: FunctionalComponent<MainpageProps> = ({ mainpageData, setmainpageData }) => {
  
  return (
    <>
      <div>
      <select>
          <option>No Climb</option>
          <option>L1 Climb</option>
          <option>L2 Climb</option>
          <option>L3 Climb</option>
      </select>

      <Counter name="Score" count={mainpageData?.Scoring ?? 0} onButtonDown={() => {}} onButtonUp={() => {}} />
      <Counter name="Misses" count={mainpageData?.Misses ?? 0} onButtonDown={() => {}} onButtonUp={() => {}} />
      <Counter name="Human Score" count={mainpageData?.HumanScore ?? 0} onButtonDown={() => {}} onButtonUp={() => {}} />
      <Counter name="Human Misses" count={mainpageData?.HumanMisses ?? 0} onButtonDown={() => {}} onButtonUp={() => {}} />
    
    </div>
    </>
  );
};

export default endGame;
