import { useRef } from "preact/hooks";
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
  const intervalRef = useRef<number | null>(null);

  function startCounting() {
    onButtonUp();

    intervalRef.current = window.setInterval(() => {
      onButtonUp();
    }, 50);
  }

  function stopCounting() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <>
      <div className="countercontainer2">
        <h2 className="countertitle2">{name}</h2>
        <div className="counterinrow2">
          <div>
            <button onClick={onButtonUp} className="rightbutton2">
              <KeyboardArrowUpIcon />
            </button>
            <button onClick={onButtonDown} className="leftbutton2">
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
              {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter2;
