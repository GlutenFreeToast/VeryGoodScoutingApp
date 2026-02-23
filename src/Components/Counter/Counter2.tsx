import { useRef, useEffect } from "preact/hooks";
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
  const callbackRef = useRef(onButtonUp);

  useEffect(() => {
    callbackRef.current = onButtonUp;
  }, [onButtonUp]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startCounting = (e: any) => {
    e.preventDefault();
    
    callbackRef.current();
    
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      callbackRef.current();
    }, 100);
  };

  const stopCounting = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <div className="countercontainer2">
        <h2 className="countertitle2">{name}</h2>
        <div className="counterinrow2">
          <div>
            <button onTouchStart={onButtonUp} className="rightbutton2">
              <KeyboardArrowUpIcon />
            </button>
            <button onTouchStart={onButtonDown} className="leftbutton2">
              <KeyboardArrowDownIcon />
            </button>
          </div>
          <div>
            <button
              className="counterdisplay2"
              onMouseDown={startCounting}
              onMouseUp={stopCounting}
              onMouseLeave={stopCounting}
              onTouchStart={startCounting}
              onTouchEnd={stopCounting}
              onTouchCancel={stopCounting}
              onContextMenu={(e) => e.preventDefault()}
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
