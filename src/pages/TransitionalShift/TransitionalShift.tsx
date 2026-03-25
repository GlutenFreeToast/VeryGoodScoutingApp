import "../../app.css";
import "../global.css";
import type { FunctionalComponent } from "preact";
import Counter2 from "../../Components/Counter/Counter2";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { useState, useEffect } from "preact/hooks";
import "./TransitionalShift.css";

export interface ShiftData {
  shotMade: number;
  misses: number;
  ShuttleCount: number;
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
  const [shotMade, setshotmade] = useState(0);
  const [misses, setmisses] = useState(0);
  const [ShuttleCount, setShuttleCount] = useState(0);

  useEffect(() => {
    setshotmade(shiftData.shotMade ?? 0);
    setmisses(shiftData.misses ?? 0);
    setShuttleCount(shiftData.ShuttleCount ?? 0);
  }, [shiftData]);

  return (
    <>
      <div style="position: relative; height: 2vh; top: 0px;"></div>
      <div className="pagecontainer" style={{ margin: "2.5vw" }}>
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

          <Counter2
            name="🔄️Shuttle Count"
            count={ShuttleCount}
            onButtonDown={() => {
              const newData = { ...shiftData } as ShiftData;
              if (newData.ShuttleCount > 0) {
                newData.ShuttleCount--;
                setShiftData(newData);
                setShuttleCount(newData.ShuttleCount);
              }
            }}
            onButtonUp={() => {
              const newData = { ...shiftData } as ShiftData;
              if (newData.ShuttleCount < 999) {
                newData.ShuttleCount++;
                setShiftData(newData);
                setShuttleCount(newData.ShuttleCount);
              }
            }}
          ></Counter2>
        </div>
      </div>
    </>
  );
};
export default Shift;
