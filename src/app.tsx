import { useState } from "preact/hooks";
import "./app.css";
import Match from "./pages/match/match.tsx";
import Teleop from "./pages/match/teleop.tsx";
import Results from "./pages/match/results.tsx";
import Submit from "./pages/match/submit.tsx";
import build from "../buildInfo.json";
import Auton from "./pages/auton/auton.tsx";

export const PageType = {
  MATCH: 0,
  AUTON: 1,
  TELEOP: 2,
  RESULTS: 3,
  SUBMIT: 4,
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
      <div style="height: 50px;"></div>
      <img src="FRCRebuilt.png" alt="" width={300} />
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

        
      </div>
      <div style="height: 100px;"></div>
      <div style={{ padding: 0 }} className={"responsive"}>
        <div>{note}</div>
        <div style={{ marginTop: 8 }}>
          {page === PageType.MATCH && (
            <Match 
              mainpageData={formData} 
              setmainpageData={(newData) => setFormData(newData as typeof formData)} 
            />
          )}
          {page === PageType.AUTON && (
            <Auton 
              mainpageData={formData} 
              setmainpageData={(newData) => setFormData(newData as typeof formData)}
            />
          )}
          {page === PageType.TELEOP && (
            <Teleop 
              mainpageData={formData} 
              setmainpageData={(newData) => setFormData(newData as typeof formData)}
            />
          )}
          {page === PageType.RESULTS && (
            <Results 
              mainpageData={formData} 
              setmainpageData={(newData) => setFormData(newData as typeof formData)}
            />
          )}
          {page === PageType.SUBMIT && (
            <Submit 
              mainpageData={formData} 
              setmainpageData={(newData) => setFormData(newData as typeof formData)}
            />
          )}
        </div>
      </div>
    </>
  );
}
