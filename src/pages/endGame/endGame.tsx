import "../global.css";
import type { FunctionalComponent } from "preact";
import type { Dispatch, StateUpdater } from "preact/hooks";
import Counter from "../../Components/Counter/Counter.tsx";
import Counter2 from "../../Components/Counter/Counter2";

export enum ClimbLevels {
  NO_CLIMB = "NO CLIMB",
  L1_CLIMB = "L1 CLIMB",
  L2_CLIMB = "L2 CLIMB",
  L3_CLIMB = "L3 CLIMB",
}

export interface EndGameData {
  climbLevel: ClimbLevels;
  Scoring: number;
  Misses: number;
}
export interface EndgameProps {
  endgameData: EndGameData;
  setEndgameData?: Dispatch<StateUpdater<EndGameData>>;
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
            endgameData.Scoring < 999 &&
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
            endgameData.Misses < 999 &&
            setEndgameData({
              ...endgameData,
              Misses: endgameData.Misses + 1,
            })
          }
        />
      </div>

      <div style="height: 5vh;"></div>

      <select
        className={"dropdown"}
        value={endgameData.climbLevel || ClimbLevels.NO_CLIMB}
        onChange={(e) => {
          setEndgameData &&
            setEndgameData({
              ...endgameData,
              climbLevel: e.currentTarget.value as ClimbLevels,
            });
        }}
      >
        <option value={ClimbLevels.NO_CLIMB}>No Climb</option>
        <option value={ClimbLevels.L1_CLIMB}>L1 Climb</option>
        <option value={ClimbLevels.L2_CLIMB}>L2 Climb</option>
        <option value={ClimbLevels.L3_CLIMB}>L3 Climb</option>
      </select>
      <div style="height: 5vh;"></div>
    </>
  );
};

export default endGame;
