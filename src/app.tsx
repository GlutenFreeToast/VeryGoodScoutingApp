import { useState } from "preact/hooks";
import "./app.css";
import Match from "./pages/match/match.tsx";
import Teleop from "./pages/teleop/teleop.tsx";
import Results from "./pages/results/results.tsx";
import Finalize from "./pages/finalize/finalize.tsx";
import build from "../buildInfo.json";
import Auton from "./pages/auton/auton.tsx";
import logo from "./FRCRebuilt.png"

export const PageType = {
  MATCH: 0,
  AUTON: 1,
  TELEOP: 2,
  RESULTS: 3,
  FINALIZE: 4,
} as const;

export type PageType = (typeof PageType)[keyof typeof PageType];

export function App() {
  const [page, setPage] = useState<PageType>(PageType.MATCH);
  const [note] = useState();
  const [formData, setFormData] = useState({
    name: "",
    comp: "",
    team: "",
    match: ""
  });

  // Debug: Log state changes
  console.log('Current form data:', formData);

  return (
    <>

      <div>
        <div style="height: 50px;"></div>  
        <img src={logo} alt="Logo" width={300}/>
        <div className="version">{`Build # ${build.buildRevision}`}</div>
        <div style="height: 50px;"></div>
        <div className={"buttonthing"}>
          <button
            className="buttons"
            data-active={page === PageType.MATCH}
            onClick={() => {
              setPage(PageType.MATCH);
              console.log("Clicked on Match");
            }}
          >
            Match
          </button>

          <button
            className="buttons"
            data-active={page === PageType.AUTON}
            onClick={() => {
              setPage(PageType.AUTON);
              console.log("Clicked on Auton");
            }}
          >
            Auton
          </button>

          <button
            className="buttons"
            data-active={page === PageType.TELEOP}
            onClick={() => {
              setPage(PageType.TELEOP);
              console.log("Clicked on Teleop");
            }}
          >
            TeleOP
          </button>

          <button
            className="buttons"
            data-active={page === PageType.RESULTS}
            onClick={() => {
              setPage(PageType.RESULTS);
              console.log("Clicked on Results");
            }}
          >
            Results
          </button>

          <div></div>

          <button
            className={`buttons finalize-button ${
              page === PageType.RESULTS || page === PageType.FINALIZE ? "visible" : ""
            }`}
            data-active={page === PageType.FINALIZE}
            onClick={() => {
              setPage(PageType.FINALIZE);
              console.log("Clicked on Finalize");
            }}
          >
            Finalize
          </button>


        </div>
      </div>
      <div style={{ padding: 0 }} className={"responsive"}>
        <div>{note}</div>
        <div style={{ marginTop: 8 }}>
          {page === PageType.MATCH && <Match />}
          {page === PageType.AUTON && <Auton />}
          {page === PageType.TELEOP && <Teleop />}
          {page === PageType.RESULTS && <Results />}
          {page === PageType.FINALIZE && <Finalize />}
        </div>
      </div>
    </>
  );
}
