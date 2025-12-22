import "../../app.css";
import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
}

const Teleop: FunctionalComponent<MainpageProps> = () => {
    const [count, setCount] = useState(0);
  return <>
   <div style={{ width: 250 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Coral Score</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Level 1 Count:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
        <div style={{ height: 20 }}></div>
        <p style={{ textAlign: "center" }}>Level 2 Count:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
        <div style={{ height: 20 }}></div>
        <p style={{ textAlign: "center" }}>Level 3 Count:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
        <div style={{ height: 20 }}></div>
        <p style={{ textAlign: "center" }}>Level 4 Count:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
      </div>
    </div>


    <div style={{ width: 250 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Algae Net</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Human Score:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
        <div style={{ height: 20 }}></div>
        <p style={{ textAlign: "center" }}>Human Miss:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
        <div style={{ height: 20 }}></div>
        <p style={{ textAlign: "center" }}>Robot Score:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
        <div style={{ height: 20 }}></div>
        <p style={{ textAlign: "center" }}>Robot Miss:</p>
        <p style={{ textAlign: "center" }}>{count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={() => setCount(0)}>0</button> */}
        </div>
      </div>
    </div>
  </>;
};

export default Teleop;
