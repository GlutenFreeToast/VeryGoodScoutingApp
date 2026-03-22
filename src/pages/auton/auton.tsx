import "../../app.css";
import "../../../src/pages/global.css";
import "./auton.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import { type StateUpdater, type Dispatch, useState } from "preact/hooks";
import Counter2 from "../../Components/Counter/Counter2";
import { ClimbLevels } from "../endGame/endGame";
import map from "../../assets/field.png";
import { ToggleButton } from "@mui/material";
import { Locations } from "../TransitionalShift/TransitionalShift";
import { color } from "framer-motion";

export interface AutonProps {
  autonData: AutonData;
  setAutonData: Dispatch<StateUpdater<AutonData>>;
}

export interface AutonData {
  fuelScored: number;
  fuelMissed: number;
  autonClimb: ClimbLevels;
  depotSourced: boolean;
  outpostSourced: boolean;
  neutralZoneSourced: boolean;
  frequentLocation: Locations;
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
            count={autonData.fuelScored}
            onButtonDown={() =>
              autonData.fuelScored > 0 &&
              setAutonData({
                ...autonData,
                fuelScored: autonData.fuelScored - 1,
              })
            }
            onButtonUp={() =>
              autonData.fuelScored < 99 &&
              setAutonData({
                ...autonData,
                fuelScored: autonData.fuelScored + 1,
              })
            }
          />

          <Counter2
            name="🔥Fuel Missed"
            count={autonData.fuelMissed}
            onButtonDown={() =>
              autonData.fuelMissed > 0 &&
              setAutonData({
                ...autonData,
                fuelMissed: autonData.fuelMissed - 1,
              })
            }
            onButtonUp={() =>
              autonData.fuelMissed < 99 &&
              setAutonData({
                ...autonData,
                fuelMissed: autonData.fuelMissed + 1,
              })
            }
          />
        </div>
      </div>

      <div style="height: 5vh;"></div>

      <div className="dropdown-container-auton">
        <div className="dropdown-auton">
          <label style={"color: rgba(255, 255, 255, 0.9)"}>Climb?</label>
          <select
            className={"dropdown"}
            value={autonData.autonClimb}
            onChange={(e) => {
              setAutonData({
                ...autonData,
                autonClimb: e.currentTarget.value as ClimbLevels,
              });
            }}
          >
            <option value={ClimbLevels.NO_CLIMB}>No Climb</option>
            <option value={ClimbLevels.L1_CLIMB}>L1 Climb</option>
          </select>
        </div>

        <div>
          <div className="checklist-container">
            <label className="checklist-title">Source?</label>
            <div className="checklist-item">
              <input
                type="checkbox"
                className="checkmark"
                checked={autonData.depotSourced}
                onChange={() =>
                  setAutonData({
                    ...autonData,
                    depotSourced: !autonData.depotSourced,
                  })
                }
              />{" "}
              <label>Depot</label>
            </div>
            <div className="checklist-item">
              <input
                type="checkbox"
                className="checkmark"
                checked={autonData.outpostSourced}
                onChange={() =>
                  setAutonData({
                    ...autonData,
                    outpostSourced: !autonData.outpostSourced,
                  })
                }
              />{" "}
              <label>Outpost</label>
            </div>
            <div className="checklist-item">
              <input
                type="checkbox"
                className="checkmark"
                checked={autonData.neutralZoneSourced}
                onChange={() =>
                  setAutonData({
                    ...autonData,
                    neutralZoneSourced: !autonData.neutralZoneSourced,
                  })
                }
              />{" "}
              <label>Neutral Zone</label>
            </div>
          </div>
        </div>
      </div>

      <img
        src={map}
        alt="map"
        style={{
          position: "absolute",
          width: "100%",
          height: "auto",
          top: "650px",
          left: "0px",
        }}
      ></img>
      <div
        className="ButtonsContainers"
        style={{
          width: "auto",
          right: "0px",
          top: "15px",
          height: "auto",
          scale: "80%",
        }}
      ></div>
    </>
  );
};

export default Auton;
