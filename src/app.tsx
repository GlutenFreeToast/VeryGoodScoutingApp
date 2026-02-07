
import { useState, useEffect } from "preact/hooks";
import "./app.css";
import "xp.css/dist/XP.css";
import "./pages/global.css"
import build from "../buildInfo.json";
import Match from "./pages/1. match/match.tsx";
import TransitionalShift from "./pages/3. TransitionalShift/TransitionalShift.tsx";
import ENDGAME from "./pages/4. endGame/endGame.tsx";
import Finalize from "./pages/5. finalize/finalize.tsx";
import Auton from "./pages/2. auton/auton.tsx";
import QR from "./pages/10. QR/QR.tsx";
import Help from "./pages/9. help/help.tsx";
import Prank from "./pages/9. help/notes-prank.tsx";
import logo from "./rebuilt.svg"
import weed from "../src/assets/tumble.png"
import kitty from "../src/assets/cat-jump.png"
import robot from "../src/assets/hyperion.png"
import {count} from "./pages/3. TransitionalShift/TransitionalShift.tsx";
import { triggerConfetti } from "./Components/triggerConfetti.tsx";


import PageReveal from "./PageReveal.tsx";
import { Shield } from "@mui/icons-material";

export const PageType = {
  MATCH: 0,
  AUTON: 1,
  TransitionalShift: 2,
  ENDGAME: 3,
  FINALIZE: 4,
  QR: 5,
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
    preload: 0
  });
  const [autonData, setautonData] = useState({
    FuelScored: 0,
    FuelMissed: 0,
    climb:0
  });
  const [ShiftData, setShiftData] = useState({
    shift: [[0,0,0,0,0],[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]
  });
  const [finalizeData,setfinalizeData] = useState({
    notes: "",
    red:0,
    blue:0,
    penalties:0,
    ranking:0,
  });
  const[endGameData, setendGameData] = useState({
    climbLevel: 0,
    Scoring: 0,
    Misses: 0,
    HumanScore: 0,
    HumanMisses: 0
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
   {theme === "drought" && (
      <div className="flier">
        <img src={weed} />
      </div>
   )}
  {theme === "cats" && (
      <div className="flier">
        <img src={kitty} />
      </div>
   )}
  {theme === "robotics" && (
      <div className="flier">
        <img src={robot} />
      </div>
   )}
   {theme === "Bizzare" && (
      <div className="flier">
        
      </div>
   )}



      <div className={`window ${theme}`} style={{ width: "100vw", height: "100vh", fontSize: "15px"}}>
        <div className="title-bar main-title-bar" style={{height: "5vh"}}>
          <div className="title-bar-text" style={{fontSize: "2.8vh", margin: "1vw"}}>Scouting App 2026</div>
            
            
          <div className="title-bar-controls">
            <select
              style={{ fontSize: "1vh", margin: "3vw" }}
              value={theme}
              onChange={(e) => setTheme((e.currentTarget as HTMLSelectElement).value)}
              aria-label="Theme selector"
            >
              <option value="xp">XP</option>
              <option value="drought">Drought</option>
              <option value="cats">Cats</option>
              <option value="robotics">5431</option>
              <option value="Bizzare">Bizzare??</option>
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
              aria-selected={page === PageType.TransitionalShift}
              data-active={page === PageType.TransitionalShift}
              onClick={() => {
                setPage(PageType.TransitionalShift);
                console.log("Clicked on Shifts");
              }}
              style={{fontSize: "2vh", flex: "1"}}
              >Shifts</button>

              <button role="tab" aria-controls="tab-D"
              aria-selected={page === PageType.ENDGAME}
              data-active={page === PageType.ENDGAME}
              onClick={() => {
                setPage(PageType.ENDGAME);
                console.log("Clicked on End Game");
              }}
              style={{fontSize: "2vh", flex: "1"}}
              >End Game</button>

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
                  {page === PageType.TransitionalShift && <TransitionalShift mainpageData={ShiftData} setmainpageData={setShiftData}/>}
                  {page === PageType.ENDGAME && <ENDGAME mainpageData={endGameData} setmainpageData={setendGameData}/>}
                  {page === PageType.FINALIZE && <Finalize mainpageData={finalizeData} setmainpageData={setfinalizeData} setPage={setPage}/>}
                  {page === PageType.QR && <QR matchData={MatchData} autonData={autonData} shiftData={ShiftData} finalizeData={finalizeData} endGameData={endGameData}/>}
                  {page === PageType.HELP && <Help setPage={setPage}/>}
                  {page === PageType.PRANK && <Prank setPage={setPage}/>}
                </div>
              </div>
            </article>
          </section>
          
          <div class="status-bar" style={{ position: "absolute", bottom: 0, width: "100vw"}}>
            <p class="status-bar-field">FRC Team 5431/5790 - "Titan Robotics"</p>
            <p class="status-bar-field">2026 Season</p>
            <p class="status-bar-field" style={"color:#1e90ff"}>{`Build # ${build.buildRevision}`}</p>
            <p class="status-bar-field">Jason & Kenny </p>
            </div>

        </div>
      </div>
    </>
  );
}
