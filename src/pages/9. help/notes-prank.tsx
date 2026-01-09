import "../../app.css";
import "xp.css/dist/XP.css";
// import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { PageType } from "../../app.tsx";

// export interface MainpageProps {
//   mainpageData?: { [key: string]: any };
//   setmainpageData?: (v: { [key: string]: any }) => void;
// }

export interface prankProps {
    setPage: Dispatch<StateUpdater<PageType>>;
}

function ipnum() {
    return Math.floor(Math.random() * 254) + 1;
}

const prank: FunctionalComponent<MainpageProps> = ({ setPage }) => {
    // const [count, setCount] = useState(0);
  return <>
   <div style={{ width: "92.5vw" }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">!!Lazy Bum Alert!!</div>
        <div className="title-bar-controls">
          <button aria-label="Close" 
          onClick={() => {
                setPage(PageType.FINALIZE);
                console.log("Clicked on Close");
            }}
          />
        </div>
      </div>

    <h3>
        SNS does know where you live after all...
    </h3>
    <h1>
        IP: {ipnum()}.{ipnum()}.{ipnum()}.{ipnum()}
    </h1>
    <h3>
        Do your notes. For everyone's sake really
    </h3>


      <div className="window-body">

        </div>
      </div>
  </>;
};

export default prank;
