import "../../app.css";
import "../../../src/pages/global.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import { type StateUpdater, type Dispatch, useState } from "preact/hooks";
import Counter2 from "../../Components/Counter/Counter2";
import { ClimbLevels } from "../endGame/endGame";

export interface AutonProps {
  autonData: AutonData;
  setAutonData: Dispatch<StateUpdater<AutonData>>;
}
export interface AutonData {
  FuelScored: number;
  FuelMissed: number;
  autonClimb: ClimbLevels;
}

const Auton: FunctionalComponent<AutonProps> = ({
  autonData: autonData,
  setAutonData: setAutonData,
}) => {
  return (
    <>
      <div className="pagecontainer">
        <div className="button_container">
          <Counter2
            name="⛽Fuel Scored"
            count={autonData.FuelScored}
            onButtonDown={() =>
              autonData.FuelScored > 0 &&
              setAutonData({
                ...autonData,
                FuelScored: autonData.FuelScored - 1,
              })
            }
            onButtonUp={() =>
              autonData.FuelScored < 99 &&
              setAutonData({
                ...autonData,
                FuelScored: autonData.FuelScored + 1,
              })
            }
          />

          <Counter2
            name="🔥Fuel Missed"
            count={autonData.FuelMissed}
            onButtonDown={() =>
              autonData.FuelMissed > 0 &&
              setAutonData({
                ...autonData,
                FuelMissed: autonData.FuelMissed - 1,
              })
            }
            onButtonUp={() =>
              autonData.FuelMissed < 99 &&
              setAutonData({
                ...autonData,
                FuelMissed: autonData.FuelMissed + 1,
              })
            }
          />
        </div>
      </div>

      <div style="height: 5vh;"></div>

      <select
        className={"dropdown"}
        value={autonData.autonClimb}
        onChange={(e) => {
          setAutonData({
            ...autonData,
            autonClimb: e.currentTarget.value as ClimbLevels,
          })
        }
        }
      >
        <option value={ClimbLevels.NO_CLIMB}>No Climb</option>
        <option value={ClimbLevels.L1_CLIMB}>L1 Climb</option>
      </select>

      <div style="height: 5vh;"></div>
    </>
  );
};

export default Auton;
