import "../global.css";
import type { FunctionalComponent } from "preact";
import type { Dispatch, StateUpdater } from "preact/hooks";
import Counter from "../../Components/Counter/Counter.tsx";
export interface endGameData {
    climbLevel: number;
    Scoring: number;
    Misses: number;
    HumanScore: number;
    HumanMisses: number;
}
export interface MainpageProps {
  mainpageData: endGameData;
  setmainpageData?: Dispatch<StateUpdater<endGameData>>;
}


const endGame: FunctionalComponent<MainpageProps> = ({ mainpageData, setmainpageData }) => {
  
  return (
    <>
      <div className={"button_container"}>
      
      <Counter name="🤖Robot Score" count={mainpageData.Scoring} onButtonDown={() => setmainpageData && setmainpageData({ ...mainpageData, Scoring: mainpageData.Scoring - 1 })} onButtonUp={() => setmainpageData && setmainpageData({ ...mainpageData, Scoring: mainpageData.Scoring + 1 })} />
      <Counter name="🤖Robot Misses" count={mainpageData.Misses} onButtonDown={() => setmainpageData && setmainpageData({ ...mainpageData, Misses: mainpageData.Misses - 1 })} onButtonUp={() => setmainpageData && setmainpageData({ ...mainpageData, Misses: mainpageData.Misses + 1 })} />
      <Counter name="🙆‍♂️Human Score" count={mainpageData.HumanScore} onButtonDown={() => setmainpageData && setmainpageData({ ...mainpageData, HumanScore: mainpageData.HumanScore - 1 })} onButtonUp={() => setmainpageData && setmainpageData({ ...mainpageData, HumanScore: mainpageData.HumanScore + 1 })} />
      <Counter name="🙎‍♂️Human Misses" count={mainpageData.HumanMisses} onButtonDown={() => setmainpageData && setmainpageData({ ...mainpageData, HumanMisses: mainpageData.HumanMisses - 1 })} onButtonUp={() => setmainpageData && setmainpageData({ ...mainpageData, HumanMisses: mainpageData.HumanMisses + 1 })} />
    
    </div>

    <div style="height: 5vh;"></div> 

    <select className={"dropdown"}>
        <option>No Climb</option>
        <option>L1 Climb</option>
        <option>L2 Climb</option>
        <option>L3 Climb</option>
    </select>

    <div style="height: 5vh;"></div> 
      
    </>
  );
};

export default endGame;
