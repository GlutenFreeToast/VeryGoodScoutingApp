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
  NONE,
  FRONT,
  TOP_TRENCH,
  BOTTOM_TRENCH,
}

export interface ShiftData {
  shotMade: number;
  misses: number;
  humanMade: number;
  humanMiss: number;
  outpostFed: number;
  shuttleCount: number;
  shotMadeAtFront: number;
  shotMadeAtTop: number;
  shotMadeAtBottom: number;
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
  const [humanmade, sethumanmade] = useState(0);
  const [humanmiss, sethumanmiss] = useState(0);
  const [outpostFed, setoutpostFed] = useState(0);
  const [shuttleCount, setshuttleCount] = useState(0);
  const [currentlocation, setcurrentlocation] = useState(Locations.NONE);

  useEffect(() => {
    setshotmade(shiftData.shotMade ?? 0);
    setmisses(shiftData.misses ?? 0);
    sethumanmade(shiftData.humanMade ?? 0);
    sethumanmiss(shiftData.humanMiss ?? 0);
    setoutpostFed(shiftData.outpostFed ?? 0);
    setshuttleCount(shiftData.shuttleCount ?? 0);
  }, [shiftData]);

  const locationaIncrement = () => {
    const newData = { ...shiftData } as ShiftData;
    switch (currentlocation) {
      case Locations.FRONT:
        newData.shotMadeAtFront = newData.shotMadeAtFront++;
        setShiftData(newData);

        break;
      case Locations.TOP_TRENCH:
        newData.shotMadeAtTop = newData.shotMadeAtTop + 1;
        setShiftData(newData);
        break;
      case Locations.BOTTOM_TRENCH:
        newData.shotMadeAtBottom = newData.shotMadeAtBottom + 1;
        setShiftData(newData);

        break;
    }
  };

  if (isActive)
    return (
      <>
        <div style="height: 2vh;"></div>
        <div className="pagecontainer">
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
              sethumanmade(shiftData.humanMade ?? 0);
              sethumanmiss(shiftData.humanMiss ?? 0);
              setoutpostFed(shiftData.outpostFed ?? 0);
              setshuttleCount(shiftData.shuttleCount ?? 0);
            }}
          >
            <option value="0" selected>
              Active
            </option>
            <option value="1">Inactive</option>
          </select>

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter2
              name="🤖Robot Score"
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
                if (newData.shotMade < 99) {
                  newData.shotMade++;
                  locationaIncrement();
                  setShiftData(newData);
                  setshotmade(newData.shotMade);
                }
              }}
            ></Counter2>
            <Counter2
              name="🤖Robot Missed"
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

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter
              name="👱Human Score"
              count={humanmade}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.humanMade > 0) {
                  newData.humanMade--;
                  setShiftData(newData);
                  sethumanmade(newData.humanMade);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.humanMade < 999) {
                  newData.humanMade++;
                  setShiftData(newData);
                  sethumanmade(newData.humanMade);
                }
              }}
            ></Counter>
            <Counter
              name="👱Human Missed"
              count={humanmiss}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.humanMiss > 0) {
                  newData.humanMiss--;
                  setShiftData(newData);
                  sethumanmiss(newData.humanMiss);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.humanMiss < 999) {
                  newData.humanMiss++;
                  setShiftData(newData);
                  sethumanmiss(newData.humanMiss);
                }
              }}
            ></Counter>
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
                top: "645px",
                left: "0px",
              }}
            ></img>
            <div
              className="ButtonsContainers"
              style={{
                width: "auto",
                right: "0px",
                scale: "80%",
              }}
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                onChange={() => setcurrentlocation(Locations.FRONT)}
                style={{
                  height: "180px",
                  width: "60px",
                  backgroundColor:
                    currentlocation === Locations.FRONT ? "#00da0b" : "#aa3fe4",
                  opacity: 0.8,
                  left: "-115px",
                  top: "65px",
                }}
              ></ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                onChange={() => setcurrentlocation(Locations.TOP_TRENCH)}
                style={{
                  height: "40px",
                  width: "90px",
                  backgroundColor:
                    currentlocation === Locations.TOP_TRENCH
                      ? "#00da0b"
                      : "#aa3fe4",
                  opacity: 0.8,
                  left: "-110px",
                  top: "-50px",
                }}
              ></ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                onChange={() => setcurrentlocation(Locations.BOTTOM_TRENCH)}
                style={{
                  height: "40px",
                  width: "90px",
                  backgroundColor:
                    currentlocation === Locations.BOTTOM_TRENCH
                      ? "#00da0b"
                      : "#aa3fe4",
                  opacity: 0.8,
                  left: "-200px",
                  top: "180px",
                }}
              ></ToggleButton>
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div style="height: 2vh;"></div>
        <div className="pagecontainer">
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
              sethumanmade(shiftData.humanMade ?? 0);
              sethumanmiss(shiftData.humanMiss ?? 0);
            }}
          >
            <option value="0" selected>
              Active
            </option>
            <option value="1">Inactive</option>
          </select>

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter2
              name="Outpost Fed"
              count={outpostFed}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.outpostFed > 0) {
                  newData.outpostFed--;
                  setShiftData(newData);
                  setoutpostFed(newData.outpostFed);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.outpostFed < 99) {
                  newData.outpostFed++;
                  setShiftData(newData);
                  setoutpostFed(newData.outpostFed);
                }
              }}
            ></Counter2>
            <Counter2
              name="Shuttle Count"
              count={shuttleCount}
              onButtonDown={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.shuttleCount > 0) {
                  newData.shuttleCount--;
                  setShiftData(newData);
                  setshuttleCount(newData.shuttleCount);
                }
              }}
              onButtonUp={() => {
                const newData = { ...shiftData } as ShiftData;
                if (newData.shuttleCount < 99) {
                  newData.shuttleCount++;
                  setShiftData(newData);
                  setshuttleCount(newData.shuttleCount);
                }
              }}
            ></Counter2>
          </div>

          <div style="height: 5vh;">
            <p>Played Defense?</p>
            <Checkbox
              name="Defense"
              checked={shiftData.defense === true}
              onChange={(event) => {
                setShiftData({
                  ...shiftData,
                  defense: (event.target as HTMLInputElement).checked,
                });
              }}
              style={{
                background: "#241f68",
              }}
              icon={
                <RemoveModeratorIcon
                  style={{
                    height: "80px",
                    width: "80px",
                    backgroundcolor: "red",
                  }}
                />
              }
              checkedIcon={
                <ShieldIcon
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
              }
            />
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
