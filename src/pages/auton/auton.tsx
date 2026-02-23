import "../../app.css";
import "../../../src/pages/global.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import { type StateUpdater, type Dispatch, useState } from "preact/hooks";

export interface AutonProps {
  autonData: autonData;
  setAutonData: Dispatch<StateUpdater<autonData>>;
}
export interface autonData {
  FuelScored: number;
  FuelMissed: number;
  climb: number;
}

const Auton: FunctionalComponent<AutonProps> = ({
  autonData: autonData,
  setAutonData: setAutonData,
}) => {
  return (
    <>
      <div className="pagecontainer">
        <div className="button_container">
          <Counter
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

          <Counter
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
        value={autonData.climb}
        onChange={(e) =>
          setAutonData({
            ...autonData,
            climb: parseInt(e.currentTarget.value),
          })
        }
      >
        <option value="0">No Climb</option>
        <option value="1">L1 Climb</option>
      </select>

      <div style="height: 5vh;"></div>
    </>
  );
};

export default Auton;
