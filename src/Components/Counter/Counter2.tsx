import { useState, useRef } from "react";
import "./Counter.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  name: string;
  count: number;
  onButtonUp: () => void;
  onButtonDown: () => void;
}

function Counter2({ name, count, onButtonDown, onButtonUp }: Props) {
  const [fuelhold, setFuelhold] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function startCounting() {
    setFuelhold((prev) => prev + 1);

    intervalRef.current = window.setInterval(() => {
      setFuelhold((prev) => prev + 1);
    }, 90);
  }

  function stopCounting() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function incrementFuel() {
    setFuelhold((prev) => prev + 1);
  }

  function decrementFuel() {
    setFuelhold((prev) => prev - 1);
  }

  return (
    <>
      <div className="countercontainer2">
        <h2 className="countertitle2">{name}</h2>
        <div className="counterinrow2">
          <div>
            <button onClick={incrementFuel} className="rightbutton2">
              <KeyboardArrowUpIcon />
            </button>
            <button onClick={decrementFuel} className="leftbutton2">
              <KeyboardArrowDownIcon />
            </button>
          </div>
          <div>
            <button
              className="counterdisplay2"
              onMouseDown={startCounting}
              onMouseUp={stopCounting}
              onMouseLeave={stopCounting}
            >
              {fuelhold}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter2;
