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
export interface MainpageProps {
  mainpageData: endGameData;
  setmainpageData?: Dispatch<StateUpdater<endGameData>>;
}

const endGame: FunctionalComponent<MainpageProps> = ({
  mainpageData,
  setmainpageData,
}) => {
  return (
    <>
      <div className={"button_container"}>
        <Counter2
          name="🤖Robot Score"
          count={mainpageData.Scoring}
          onButtonDown={() =>
            setmainpageData &&
            mainpageData.Scoring > 0 &&
            setmainpageData({
              ...mainpageData,
              Scoring: mainpageData.Scoring - 1,
            })
          }
          onButtonUp={() =>
            setmainpageData &&
            mainpageData.Scoring < 99 &&
            setmainpageData({
              ...mainpageData,
              Scoring: mainpageData.Scoring + 1,
            })
          }
        />
        <Counter2
          name="🤖Robot Misses"
          count={mainpageData.Misses}
          onButtonDown={() =>
            setmainpageData &&
            mainpageData.Misses > 0 &&
            setmainpageData({
              ...mainpageData,
              Misses: mainpageData.Misses - 1,
            })
          }
          onButtonUp={() =>
            setmainpageData &&
            mainpageData.Misses < 99 &&
            setmainpageData({
              ...mainpageData,
              Misses: mainpageData.Misses + 1,
            })
          }
        />
        <Counter
          name="🙆‍♂️Human Score"
          count={mainpageData.HumanScore}
          onButtonDown={() =>
            setmainpageData &&
            mainpageData.HumanScore > 0 &&
            setmainpageData({
              ...mainpageData,
              HumanScore: mainpageData.HumanScore - 1,
            })
          }
          onButtonUp={() =>
            setmainpageData &&
            mainpageData.HumanScore < 99 &&
            setmainpageData({
              ...mainpageData,
              HumanScore: mainpageData.HumanScore + 1,
            })
          }
        />
        <Counter
          name="🙎‍♂️Human Misses"
          count={mainpageData.HumanMisses}
          onButtonDown={() =>
            setmainpageData &&
            mainpageData.HumanMisses > 0 &&
            setmainpageData({
              ...mainpageData,
              HumanMisses: mainpageData.HumanMisses - 1,
            })
          }
          onButtonUp={() =>
            setmainpageData &&
            mainpageData.HumanMisses < 99 &&
            setmainpageData({
              ...mainpageData,
              HumanMisses: mainpageData.HumanMisses + 1,
            })
          }
        />
      </div>

      <div style="height: 5vh;"></div>

      <select
        className={"dropdown"}
        value={mainpageData.climbLevel}
        onChange={(e) =>
          setmainpageData &&
          setmainpageData({
            ...mainpageData,
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
