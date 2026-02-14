import { useState, useEffect } from "preact/hooks";
import "./app.css";
import "./pages/global.css";
import build from "../buildInfo.json";
import Match from "./pages/1. match/match.tsx";
import TransitionalShift from "./pages/3. TransitionalShift/TransitionalShift.tsx";
import ENDGAME from "./pages/4. endGame/endGame.tsx";
import Finalize from "./pages/5. finalize/finalize.tsx";
import Auton from "./pages/2. auton/auton.tsx";
import QR from "./pages/10. QR/QR.tsx";
import Prank from "./pages/9. help/notes-prank.tsx";
import hyperion from "../src/assets/hyperion.png";
import orpheus from "../src/assets/Orpheus.png";
import { count } from "./pages/3. TransitionalShift/TransitionalShift.tsx";
import { triggerConfetti } from "./Components/triggerConfetti.tsx";
import PageReveal from "./PageReveal.tsx";
import { Shield } from "@mui/icons-material";
import SpaceFlyingImages from "./Components/SpaceFlyingImages.tsx";
import teamlogo from "./assets/5431logo.png";

import { motion, AnimatePresence } from "framer-motion";

export const PageType = {
  MATCH: 0,
  AUTON: 1,
  TransitionalShift: 2,
  ENDGAME: 3,
  FINALIZE: 4,
  QR: 5,
  PRANK: 10,
} as const;

export type PageType = (typeof PageType)[keyof typeof PageType];

export function App() {
  const [page, setPage] = useState<PageType>(PageType.MATCH);
  const [note] = useState();
  const [MatchData, setMatchData] = useState({
    name: "",
    comp: "",
    team: 0,
    match: 0,
    preload: 0,
  });
  const [autonData, setautonData] = useState({
    FuelScored: 0,
    FuelMissed: 0,
    climb: 0,
  });
  const [ShiftData, setShiftData] = useState({
    shift: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  });
  const [finalizeData, setfinalizeData] = useState({
    notes: "",
    red: 0,
    blue: 0,
    penalties: 0,
    ranking: 0,
  });
  const [endGameData, setendGameData] = useState({
    climbLevel: 0,
    Scoring: 0,
    Misses: 0,
    HumanScore: 0,
    HumanMisses: 0,
  });

  // Debug: Log state changes

  return (
    <>
      <SpaceFlyingImages
        images={[hyperion, orpheus, teamlogo]}
        count={30}
        speed={0.1}
      />

      <div
        className={`window robotics`}
        style={{ width: "100vw", height: "100vh", fontSize: "15px" }}
      >
        <div className="window-body"></div>
        <div>
          <section class="tabs" style={{ margin: "2.5vw", height: "68.4vh" }}>
            <p style={"color:#1e90ff"}>{`Build # ${build.buildRevision}`}</p>
            <div style={"height: 25vw"}>
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
                data-active={page === PageType.TransitionalShift}
                onClick={() => {
                  setPage(PageType.TransitionalShift);
                  console.log("Clicked on Shifts");
                }}
              >
                Shifts
              </button>

              <button
                className="buttons"
                data-active={page === PageType.ENDGAME}
                onClick={() => {
                  setPage(PageType.ENDGAME);
                  console.log("Clicked on Endgame");
                }}
              >
                Endgame
              </button>

              <div></div>

              <AnimatePresence>
                {(page === PageType.ENDGAME || page === PageType.FINALIZE) && (
                  <motion.button
                    className="buttons finalize-button"
                    data-active={page === PageType.FINALIZE}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setPage(PageType.FINALIZE)}
                  >
                    Finalize
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <article role="tabpanel" className="" id="tab-A">
              <div style={{ padding: 0, alignContent: "center" }}>
                <div>{note}</div>
                <div style={{ marginTop: 8 }}>
                  {page === PageType.MATCH && (
                    <Match
                      mainpageData={MatchData}
                      setmainpageData={setMatchData}
                    />
                  )}
                  {page === PageType.AUTON && (
                    <Auton
                      mainpageData={autonData}
                      setmainpageData={setautonData}
                    />
                  )}
                  {page === PageType.TransitionalShift && (
                    <TransitionalShift
                      mainpageData={ShiftData}
                      setmainpageData={setShiftData}
                    />
                  )}
                  {page === PageType.ENDGAME && (
                    <ENDGAME
                      mainpageData={endGameData}
                      setmainpageData={setendGameData}
                    />
                  )}
                  {page === PageType.FINALIZE && (
                    <Finalize
                      mainpageData={finalizeData}
                      setmainpageData={setfinalizeData}
                      setPage={setPage}
                    />
                  )}
                  {page === PageType.QR && (
                    <QR
                      matchData={MatchData}
                      autonData={autonData}
                      shiftData={ShiftData}
                      finalizeData={finalizeData}
                      endGameData={endGameData}
                    />
                  )}
                  {page === PageType.PRANK && <Prank setPage={setPage} />}

                  {/* <LiquidGlass
                    displacementScale={64}
                    blurAmount={0.1}
                    saturation={130}
                    aberrationIntensity={2}
                    elasticity={0.35}
                    cornerRadius={100}
                    padding="8px 16px"
                    onClick={() => console.log("Button clicked!")}
                  >
                    <span className="text-white font-medium">Click Me</span>
                  </LiquidGlass> */}
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}
