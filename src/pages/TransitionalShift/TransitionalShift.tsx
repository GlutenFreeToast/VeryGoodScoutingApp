import "../../app.css";
import "../global.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import Counter2 from "../../Components/Counter/Counter2";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { useState, useEffect } from "preact/hooks";
import map from "../../assets/field.png";
import "./TransitionalShift.css";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import RemoveModeratorIcon from "@mui/icons-material/RemoveModerator";
import ShieldIcon from "@mui/icons-material/Shield";

export enum Locations {
  NONE = "None",
  FRONT = "Front",
  TOP_TRENCH = "Top Trench",
  BOTTOM_TRENCH = "Bottom Trench",
}

export interface ShiftData {
  shotMade: number;
  misses: number;
  outPostFed: number;
  inActiveShuttleCount: number;
  ActiveShuttleCount: number;
  defense: boolean;
}

export interface ShiftProps {
  shiftData: ShiftData;
  setShiftData: Dispatch<StateUpdater<ShiftData>>;
}
{
  /*the first number represent a different shift*/
}

const Shift: FunctionalComponent<ShiftProps> = ({
  shiftData: shiftData,
  setShiftData: setShiftData,
}) => {
  const [activeShift, setActiveShift] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [shotMade, setshotmade] = useState(0);
  const [misses, setmisses] = useState(0);
  const [ActiveShuttleCount, setActiveShuttleCount] = useState(0);
  const [inActiveShuttleCount, setinActiveShuttleCount] = useState(0);
  const [outPostFed, setoutPostFed] = useState(0);
  const [shuttleCount, setshuttleCount] = useState(0);
  const [currentlocation, setcurrentlocation] = useState(Locations.NONE);

  useEffect(() => {
    setshotmade(shiftData.shotMade ?? 0);
    setmisses(shiftData.misses ?? 0);
    setoutPostFed(shiftData.outPostFed ?? 0);
    setActiveShuttleCount(shiftData.ActiveShuttleCount ?? 0);
    setinActiveShuttleCount(shiftData.inActiveShuttleCount ?? 0);
  }, [shiftData]);

  if (isActive)
    return (
      <>
        <div style="position: relative; height: 2vh; top: -60px;">
          <select
            className={"dropdown"}
            value={activeShift}
            onChange={(e) => {
              const shiftIndex = parseInt(
                (e.target as HTMLSelectElement).value,
              );
              setActiveShift(shiftIndex);
              setIsActive(shiftIndex === 0);
              setshotmade(shiftData.shotMade ?? 0);
              setmisses(shiftData.misses ?? 0);
              setActiveShuttleCount(shiftData.ActiveShuttleCount);
              setinActiveShuttleCount(shiftData.ActiveShuttleCount);
              setActiveShuttleCount(shiftData.ActiveShuttleCount ?? 0);
              setinActiveShuttleCount(shiftData.inActiveShuttleCount ?? 0);
            }}
          >
            <option value="0" selected>
              Active
            </option>
            <option value="1">Inactive</option>
          </select>
        </div>
        <div className="pagecontainer">
          <div className="button_container">
            <Counter2
              name="🏀Total Scores"
              count={shotMade}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.shotMade > 0) {
                  newData.shotMade--;
                  setShiftData(newData);
                  setshotmade(newData.shotMade);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.shotMade < 999) {
                  newData.shotMade++;
                  setShiftData(newData);
                  setshotmade(newData.shotMade);
                }
              }}
            ></Counter2>

            <Counter2
              name="❌Total Misses"
              count={misses}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.misses > 0) {
                  newData.misses--;
                  setShiftData(newData);
                  setmisses(newData.misses);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.misses < 999) {
                  newData.misses++;
                  setShiftData(newData);
                  setmisses(newData.misses);
                }
              }}
            ></Counter2>
          </div>

          <div style="height: 2vh;"></div>
          <div>
            <Counter2
              name="🔄️Shuttle Count"
              count={ActiveShuttleCount}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.ActiveShuttleCount > 0) {
                  newData.ActiveShuttleCount--;
                  setShiftData(newData);
                  setActiveShuttleCount(newData.ActiveShuttleCount);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.ActiveShuttleCount < 999) {
                  newData.ActiveShuttleCount++;
                  setShiftData(newData);
                  setActiveShuttleCount(newData.ActiveShuttleCount);
                }
              }}
            ></Counter2>
          </div>
          <div>
            <div style={{}}></div>
            <img
              src={map}
              alt="map"
              style={{
                position: "absolute",
                width: "100%",
                height: "auto",
                top: "680px",
                left: "0px",
              }}
            ></img>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div style="position: relative; height: 2vh; top: -60px;">
          <select
            className={"dropdown"}
            value={activeShift}
            onChange={(e) => {
              const shiftIndex = parseInt(
                (e.target as HTMLSelectElement).value,
              );
              setActiveShift(shiftIndex);
              setIsActive(shiftIndex === 0);
              setshotmade(shiftData.shotMade ?? 0);
              setmisses(shiftData.misses ?? 0);
            }}
          >
            <option value="0" selected>
              Active
            </option>
            <option value="1">Inactive</option>
          </select>
        </div>
        <div className="pagecontainer">
          <div className="button_container">
            <Counter2
              name="Outpost Fed"
              count={outPostFed}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.outPostFed > 0) {
                  newData.outPostFed--;
                  setShiftData(newData);
                  setoutPostFed(newData.outPostFed);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.outPostFed < 999) {
                  newData.outPostFed++;
                  setShiftData(newData);
                  setoutPostFed(newData.outPostFed);
                }
              }}
            ></Counter2>
            <Counter2
              name="🔄️Shuttle Count"
              count={shuttleCount}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.inActiveShuttleCount > 0) {
                  newData.inActiveShuttleCount--;
                  setShiftData(newData);
                  setinActiveShuttleCount(newData.inActiveShuttleCount);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.inActiveShuttleCount < 999) {
                  newData.inActiveShuttleCount++;
                  setShiftData(newData);
                  setinActiveShuttleCount(newData.inActiveShuttleCount);
                }
              }}
            ></Counter2>
          </div>

          <div>
            <div style={{ position: "relative", height: "10vh" }}></div>
            <img
              src={map}
              alt="map"
              style={{ position: "relative", width: "100%", height: "auto" }}
            ></img>
          </div>
        </div>
      </>
    );
};
export default Shift;
