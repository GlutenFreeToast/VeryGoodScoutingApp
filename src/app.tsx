import { useState, useEffect, useRef } from "preact/hooks";
import "./app.css";
import "./pages/global.css";
import build from "../buildInfo.json";
import Match from "./pages/match/match.tsx";
import TransitionalShift, {
  Locations,
} from "./pages/TransitionalShift/TransitionalShift.tsx";
import ENDGAME, { ClimbLevels } from "./pages/endGame/endGame.tsx";
import Finalize from "./pages/finalize/finalize.tsx";
import Auton from "./pages/auton/auton.tsx";
import QR from "./pages/QR/QR.tsx";
import Prank from "./pages/help/notes-prank.tsx";
import hyperion from "../src/assets/hyperion.png";
import orpheus from "../src/assets/Orpheus.png";
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

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  return false;
});

export type PageType = (typeof PageType)[keyof typeof PageType];

export function App() {
  const [page, setPageState] = useState<PageType>(PageType.MATCH);
  const [previousPage, setPreviousPage] = useState<PageType>(PageType.MATCH);
  const prevPageRef = useRef<PageType>(PageType.MATCH);
  const [note] = useState();

  // Track page changes to update previousPage
  useEffect(() => {
    if (page !== prevPageRef.current) {
      setPreviousPage(prevPageRef.current);
      prevPageRef.current = page;
    }
  }, [page]);

  const setPage = setPageState;
  const [MatchData, setMatchData] = useState({
    name: "",
    comp: "",
    team: 0,
    match: 0,
    alliance: "None" as "Red" | "Blue" | "None",
    preload: 0,
  });
  const [autonData, setautonData] = useState({
    FuelScored: 0,
    FuelMissed: 0,
    autonClimb: ClimbLevels.NO_CLIMB,
  });
  const [ShiftData, setShiftData] = useState({
    shotMade: 0,
    misses: 0,
    humanMade: 0,
    humanMiss: 0,
    outpostFed: 0,
    shuttleCount: 0,
    shotMadeAtFront: 0,
    shotMadeAtTop: 0,
    shotMadeAtBottom: 0,
    defense: false,
  });
  const [finalizeData, setfinalizeData] = useState({
    notes: "",
    red: 0,
    blue: 0,
    penalties: 0,
    ranking: 0,
    review: false,
  });
  const [endgameData, setEndgameData] = useState({
    climbLevel: ClimbLevels.NO_CLIMB,
    Scoring: 0,
    Misses: 0,
    HumanScore: 0,
    HumanMisses: 0,
  });

  const resetAllData = () => {
    setMatchData({
      name: "",
      comp: "",
      team: 0,
      match: 0,
      alliance: "None" as "Red" | "Blue" | "None",
      preload: 0,
    });
    setautonData({
      FuelScored: 0,
      FuelMissed: 0,
      autonClimb: ClimbLevels.NO_CLIMB,
    });
    setShiftData({
      shotMade: 0,
      misses: 0,
      humanMade: 0,
      humanMiss: 0,
      outpostFed: 0,
      shuttleCount: 0,
      shotMadeAtFront: 0,
      shotMadeAtTop: 0,
      shotMadeAtBottom: 0,
      defense: false,
    });
    setfinalizeData({
      notes: "",
      red: 0,
      blue: 0,
      penalties: 0,
      ranking: 0,
      review: false,
    });
    setEndgameData({
      climbLevel: ClimbLevels.NO_CLIMB,
      Scoring: 0,
      Misses: 0,
      HumanScore: 0,
      HumanMisses: 0,
    });
  };

  // Debug: Log state changes

  return (
    <>
      <SpaceFlyingImages
        images={[hyperion, orpheus, teamlogo]}
        count={5}
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
                }}
              >
                Match
              </button>

              <button
                className="buttons"
                data-active={page === PageType.AUTON}
                onClick={() => {
                  setPage(PageType.AUTON);
                }}
              >
                Auton
              </button>

              <button
                className="buttons"
                data-active={page === PageType.TransitionalShift}
                onClick={() => {
                  setPage(PageType.TransitionalShift);
                }}
              >
                Shifts
              </button>

              <button
                className="buttons"
                data-active={page === PageType.ENDGAME}
                onClick={() => {
                  setPage(PageType.ENDGAME);
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
                    <Match matchData={MatchData} setMatchData={setMatchData} />
                  )}
                  {page === PageType.AUTON && (
                    <Auton autonData={autonData} setAutonData={setautonData} />
                  )}
                  {page === PageType.TransitionalShift && (
                    <TransitionalShift
                      shiftData={ShiftData}
                      setShiftData={setShiftData}
                    />
                  )}
                  {page === PageType.ENDGAME && (
                    <ENDGAME
                      endgameData={endgameData}
                      setEndgameData={setEndgameData}
                    />
                  )}
                  {page === PageType.FINALIZE && (
                    <Finalize
                      finalizeData={finalizeData}
                      setFinalizeData={setfinalizeData}
                      setPage={setPage}
                    />
                  )}
                  {page === PageType.QR && (
                    <QR
                      matchData={MatchData}
                      autonData={autonData}
                      shiftData={ShiftData}
                      finalizeData={finalizeData}
                      endGameData={endgameData}
                      setPage={setPage}
                      previousPage={previousPage}
                      resetAllData={resetAllData}
                    />
                  )}
                  {page === PageType.PRANK && <Prank setPage={setPage} />}
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}
