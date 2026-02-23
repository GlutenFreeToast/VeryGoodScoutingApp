import "../global.css";
import type { FunctionalComponent } from "preact";
import type { Dispatch, StateUpdater } from "preact/hooks";
import Counter from "../../Components/Counter/Counter.tsx";
import Counter2 from "../../Components/Counter/Counter2";
export interface endGameData {
  climbLevel: number;
  Scoring: number;
  Misses: number;
  HumanScore: number;
  HumanMisses: number;
}
export interface EndgameProps {
  endgameData: endGameData;
  setEndgameData?: Dispatch<StateUpdater<endGameData>>;
}

const endGame: FunctionalComponent<EndgameProps> = ({
  endgameData: endgameData,
  setEndgameData: setEndgameData,
}) => {
  return (
    <>
      <div className={"button_container"}>
        <Counter2
          name="🤖Robot Score"
          count={endgameData.Scoring}
          onButtonDown={() =>
            setEndgameData &&
            endgameData.Scoring > 0 &&
            setEndgameData({
              ...endgameData,
              Scoring: endgameData.Scoring - 1,
            })
          }
          onButtonUp={() =>
            setEndgameData &&
            endgameData.Scoring < 99 &&
            setEndgameData({
              ...endgameData,
              Scoring: endgameData.Scoring + 1,
            })
          }
        />
        <Counter2
          name="🤖Robot Misses"
          count={endgameData.Misses}
          onButtonDown={() =>
            setEndgameData &&
            endgameData.Misses > 0 &&
            setEndgameData({
              ...endgameData,
              Misses: endgameData.Misses - 1,
            })
          }
          onButtonUp={() =>
            setEndgameData &&
            endgameData.Misses < 99 &&
            setEndgameData({
              ...endgameData,
              Misses: endgameData.Misses + 1,
            })
          }
        />
        <Counter
          name="🙆‍♂️Human Score"
          count={endgameData.HumanScore}
          onButtonDown={() =>
            setEndgameData &&
            endgameData.HumanScore > 0 &&
            setEndgameData({
              ...endgameData,
              HumanScore: endgameData.HumanScore - 1,
            })
          }
          onButtonUp={() =>
            setEndgameData &&
            endgameData.HumanScore < 99 &&
            setEndgameData({
              ...endgameData,
              HumanScore: endgameData.HumanScore + 1,
            })
          }
        />
        <Counter
          name="🙎‍♂️Human Misses"
          count={endgameData.HumanMisses}
          onButtonDown={() =>
            setEndgameData &&
            endgameData.HumanMisses > 0 &&
            setEndgameData({
              ...endgameData,
              HumanMisses: endgameData.HumanMisses - 1,
            })
          }
          onButtonUp={() =>
            setEndgameData &&
            endgameData.HumanMisses < 99 &&
            setEndgameData({
              ...endgameData,
              HumanMisses: endgameData.HumanMisses + 1,
            })
          }
        />
      </div>

      <div style="height: 5vh;"></div>

      <select
        className={"dropdown"}
        value={endgameData.climbLevel}
        onChange={(e) =>
          setEndgameData &&
          setEndgameData({
            ...endgameData,
            climbLevel: parseInt(e.currentTarget.value),
          })
        }
      >
        <option value="0">No Climb</option>
        <option value="1">L1 Climb</option>
        <option value="2">L2 Climb</option>
        <option value="3">L3 Climb</option>
      </select>
      <div style="height: 5vh;"></div>
    </>
  );
};

export default endGame;
