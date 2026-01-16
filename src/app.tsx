
import { useState, useEffect } from "preact/hooks";
import "./app.css";
import "./pages/global.css"
import build from "../buildInfo.json";
import Match from "./pages/1. match/match.tsx";
import Teleop from "./pages/3. teleop/teleop.tsx";
import Results from "./pages/4. results/results.tsx";
import Finalize from "./pages/5. finalize/finalize.tsx";
import Auton from "./pages/2. auton/auton.tsx";
import Help from "./pages/9. help/help.tsx";
import Prank from "./pages/9. help/notes-prank.tsx";
import logo from "./rebuilt.svg"
import "xp.css/dist/XP.css";
import PageReveal from "./PageReveal.tsx";

export const PageType = {
  MATCH: 0,
  AUTON: 1,
  TELEOP: 2,
  RESULTS: 3,
  FINALIZE: 4,
  HELP: 9,
  PRANK: 10,
} as const;

export type PageType = (typeof PageType)[keyof typeof PageType];

export function App() {
  const [page, setPage] = useState<PageType>(PageType.MATCH);
  const [theme, setTheme] = useState<string>(() => {
    try {
      return localStorage.getItem('theme') ?? 'xp';
    } catch (e) {
      return 'xp';
    }
  });
  const [note] = useState();
  const [MatchData,setMatchData] = useState({
    name: "",
    comp: "",
    team: "",
    match: "",
  });
  const [autonData, setautonData] = useState({
    FuelScored: 0
  });

  const [finalizeData,setfinalizeData] = useState({
    notes: "",
  });

  

  useEffect(() => {
    document.body.className = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  // Debug: Log state changes
  

  return (
    <>
   {/* <PageReveal />*/}
      <div className={`window ${theme}`} style={{ width: "100vw", height: "100vh", fontSize: "15px"}}>
        <div className="title-bar" style={{height: "5vh"}}>
          <div className="title-bar-text" style={{fontSize: "2vh", margin: "3vw"}}>Scouting App 2026</div>
            
            
          <div className="title-bar-controls">
            <select
              style={{ fontSize: "1vh", margin: "3vw" }}
              value={theme}
              onChange={(e) => setTheme((e.currentTarget as HTMLSelectElement).value)}
              aria-label="Theme selector"
            >
              <option value="xp">XP</option>
              <option value="femboy">Femboy</option>
              <option value="dark">Dark</option>
              <option value="sigma">sigma</option>
              <option value="mcdonalds">mcdonalds</option>
              <option value="drought">drought</option>
              <option value="cats">cats</option>
              <option value="confetti">confetti</option>
            </select>

          
            <button aria-label="Help" 
            style={{transform: "scale(2)", margin: "3vw"}}
            aria-selected={page === PageType.HELP}
              data-active={page === PageType.HELP}
              onClick={() => {
                setPage(PageType.HELP);
                console.log("Clicked on Help");
              }}
            />
          </div>
        </div>

        <div className="window-body"></div>
        <div>
          <div style="height: 5vh;"></div>  
          <img src={logo} alt="Logo" width={"300 vw"}/>
          <div style="height: 5vh;"></div>


          <section class="tabs" style={{ margin: "2vw", height: "68.4vh" }}>
            <menu role="tablist" aria-label="Sample Tabs">
              <button role="tab" aria-controls="tab-A"
              aria-selected={page === PageType.MATCH}
              data-active={page === PageType.MATCH}
              onClick={() => {
                setPage(PageType.MATCH);
                console.log("Clicked on Match");
              }}
              style={{fontSize: "2vh", height: "4vh", flex: "1"}}
              >Match</button>

              <button role="tab" aria-controls="tab-B"
              aria-selected={page === PageType.AUTON}
              data-active={page === PageType.AUTON}
              onClick={() => {
                setPage(PageType.AUTON);
                console.log("Clicked on Auton");
              }}
              style={{fontSize: "2vh", flex: "1"}}
              >Auton</button>

              <button role="tab" aria-controls="tab-C"
              aria-selected={page === PageType.TELEOP}
              data-active={page === PageType.TELEOP}
              onClick={() => {
                setPage(PageType.TELEOP);
                console.log("Clicked on Teleop");
              }}
              style={{fontSize: "2vh", flex: "1"}}
              >TeleOp</button>

              <button role="tab" aria-controls="tab-D"
              aria-selected={page === PageType.RESULTS}
              data-active={page === PageType.RESULTS}
              onClick={() => {
                setPage(PageType.RESULTS);
                console.log("Clicked on Results");
              }}
              style={{fontSize: "2vh", flex: "1"}}
              >Results</button>

              <button role="tab" aria-controls="tab-E"
              aria-selected={page === PageType.FINALIZE}
              data-active={page === PageType.FINALIZE}
              onClick={() => {
                setPage(PageType.FINALIZE);
                console.log("Clicked on Finalize");
              }}
              style={{fontSize: "2vh", flex: "1"}}
              >Finalize</button>
            </menu>

            <article role="tabpanel" id="tab-A">
              <div style={{ padding: 0, alignContent: "center" }}>
                <div>{note}</div>
                <div style={{ marginTop: 8}}>
                  {page === PageType.MATCH && <Match mainpageData={MatchData} setmainpageData={setMatchData}/>}
                  {page === PageType.AUTON && <Auton mainpageData={autonData} setmainpageData={setautonData}/>}
                  {page === PageType.TELEOP && <Teleop />}
                  {page === PageType.RESULTS && <Results />}
                  {page === PageType.FINALIZE && <Finalize mainpageData={finalizeData} setmainpageData={setfinalizeData} setPage={setPage}/>}
                  {page === PageType.HELP && <Help setPage={setPage}/>}
                  {page === PageType.PRANK && <Prank setPage={setPage}/>}
                </div>
              </div>
            </article>
          </section>
          
          <div class="status-bar" style={{ position: "absolute", bottom: 0, width: "100vw"}}>
            <p class="status-bar-field">FRC Team 5431/5790 - "Titan Robotics"</p>
            <p class="status-bar-field">2025-2026 Season</p>
            <p class="status-bar-field" style={"color:#1e90ff"}>{`Build # ${build.buildRevision}`}</p>
            <p class="status-bar-field">Jason & Kenny</p>
          </div>

        </div>
      </div>
    </>
  );
}
