import "../../app.css";
import "xp.css/dist/XP.css";
// import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { PageType } from "../../app.tsx";



export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
  setPage: Dispatch<StateUpdater<PageType>>;
}

const Help: FunctionalComponent<MainpageProps> = ({ setPage }) => {
    // const [count, setCount] = useState(0);
  return <>
   <div style={{ width: "92.5vw" }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Scouting App 2026 - Help</div>
        <div className="title-bar-controls">
          <button aria-label="Close" 
          onClick={() => {
                setPage(PageType.MATCH);
                console.log("Clicked on Close");
            }}
          />
        </div>
      </div>

    <h1>
        Help Me!
    </h1>
    <h4>Here are some frequently asked questions to get you on your way.</h4>
    <h5>------------------------------------</h5>
    <p>q: Why is scouting app themed after something older than most people in robotics?</p>
    <p>a: The real question is why not?</p>
    <p>-</p>
    <p>q: </p>

      <div className="window-body">

        </div>
      </div>
  </>;
};

export default Help;
