import "../global.css";
import type { FunctionalComponent } from "preact";
import { useState } from "preact/compat";
import QRCode from "react-qr-code";
import type Shift from "../TransitionalShift/TransitionalShift";
import DoubleCheck from "./DoubleCheck/DoubleCheck";
import type { PageType } from "../../app";
import { triggerConfetti } from "../../Components/triggerConfetti";

export interface QRProps {
  matchData: any;
  autonData: any;
  shiftData: any;
  finalizeData: any;
  endGameData: any;
  setPage?: (page: PageType) => void;
  previousPage?: PageType;
  resetAllData?: () => void;
}
{
  /*Match Data*/
}

const QR: FunctionalComponent<QRProps> = ({
  matchData,
  autonData,
  shiftData,
  finalizeData,
  endGameData,
  setPage,
  previousPage,
  resetAllData,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setname] = useState(matchData.name);
  const [comp, setcomp] = useState(matchData.comp);
  const [team, setteam] = useState(matchData.team);
  const [match, setmatch] = useState(matchData.match);
  const [preload, setpreload] = useState(matchData.preload);
  const [FuelScored, setFuelScored] = useState(autonData.FuelScored);
  const [FuelMissed, setFuelMissed] = useState(autonData.FuelMissed);
  const [autonClimb, setautonClimb] = useState(autonData.autonClimb);
  const [shiftShotMade, setshiftshotMade] = useState(shiftData.shotMade);
  const [shiftShotMissed, setshiftshotMissed] = useState(shiftData.misses);
  const [humanMade, sethumanMade] = useState(shiftData.humanMade);
  const [humanMiss, sethumanMiss] = useState(shiftData.humanMiss);
  const [outpostFed, setoutpostFed] = useState(shiftData.outpostFed);
  const [shuttleCount, setshuttleCount] = useState(shiftData.shuttleCount);
  const [shotMadeAtFront, setshotMadeAtFront] = useState(
    shiftData.shotMadeAtFront,
  );
  const [shotMadeAtTop, setshotMadeAtTop] = useState(shiftData.shotMadeAtTop);
  const [shotMadeAtBottom, setshotMadeAtBottom] = useState(
    shiftData.shotMadeAtBottom,
  );
  const [defense, setdefense] = useState(shiftData.defense);
  const [notes, setnotes] = useState(finalizeData.notes);
  const [redScore, setredScore] = useState(finalizeData.red);
  const [blueScore, setblueScore] = useState(finalizeData.blue);
  const [penalties, setpenalties] = useState(finalizeData.penalties);
  const [rankingPoints, setrankingPoints] = useState(finalizeData.ranking);
  const [review, setreview] = useState(finalizeData.review);
  const [climbLevel, setclimbLevel] = useState(endGameData.climbLevel);
  const [endgameScoring, setendgameScoring] = useState(endGameData.Scoring);
  const [endgameMisses, setendgameMisses] = useState(endGameData.Misses);
  const [endgameHumanScore, setendgameHumanScore] = useState(
    endGameData.HumanScore,
  );
  const [endgameHumanMisses, setendgameHumanMisses] = useState(
    endGameData.HumanMisses,
  );

  const payload = {
    name,
    comp,
    team,
    match,
    preload,
    FuelScored,
    FuelMissed,
    autonClimb,
    shiftShotMade,
    shiftShotMissed,
    humanMade,
    humanMiss,
    outpostFed,
    shuttleCount,
    shotMadeAtFront,
    shotMadeAtTop,
    shotMadeAtBottom,
    defense,
    notes,
    redScore,
    blueScore,
    penalties,
    rankingPoints,
    review,
    climbLevel,
    endgameScoring,
    endgameMisses,
    endgameHumanScore,
    endgameHumanMisses,
  };

  const json = JSON.stringify(payload);
  console.log(json);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <h2>Match Data QR</h2>
      <div style={{ background: "white", padding: 16 }}>
        <QRCode value={json} size={400} />
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <button
          className="buttons"
          style={"width: 200px; height: 100px;"}
          onClick={() => {
            if (setPage && previousPage !== undefined) {
              setPage(previousPage);
            }
          }}
        >
          Back
        </button>
        <button
          className="buttons"
          onClick={() => {
            setShowConfirm(true);
          }}
          style={"width: 200px; height: 100px;background-color: #D9544D;"}
        >
          Reset
        </button>
      </div>
      {showConfirm && (
        <DoubleCheck
          onConfirm={() => {
            if (resetAllData && setPage) {
              resetAllData();
              setPage(0);
              setShowConfirm(false);
              triggerConfetti("burst", "5431");
            }
          }}
          onCancel={() => {
            setShowConfirm(false);
          }}
        />
      )}
    </div>
  );
};

export default QR;
