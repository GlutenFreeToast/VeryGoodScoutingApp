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
  const name = matchData.name;
  const comp = matchData.comp;
  const team = matchData.team;
  const match = matchData.match;
  const preload = matchData.preload;
  const autoFuelScored = autonData.FuelScored;
  const autoFuelMissed = autonData.FuelMissed;
  const autonClimb = autonData.autonClimb ?? null;
  const shiftShotMade = shiftData.shotMade;
  const shiftShotMissed = shiftData.misses;
  const humanMade = shiftData.humanMade;
  const humanMiss = shiftData.humanMiss;
  const outpostFed = shiftData.outpostFed;
  const shuttleCount = shiftData.shuttleCount;
  const shotMadeAtFront = shiftData.shotMadeAtFront;
  const shotMadeAtTop = shiftData.shotMadeAtTop;
  const shotMadeAtBottom = shiftData.shotMadeAtBottom;
  const defense = shiftData.defense;
  const endgameScoring = endGameData.Scoring;
  const endgameMisses = endGameData.Misses;
  const endgameHumanScore = endGameData.HumanScore;
  const endgameHumanMisses = endGameData.HumanMisses;
  const climbLevel = endGameData.climbLevel;
  const notes = finalizeData.notes;
  const review = finalizeData.review;
  const redScore = finalizeData.red;
  const blueScore = finalizeData.blue;
  const penalties = finalizeData.penalties;
  const rankingPoints = finalizeData.ranking;


  const payload = {
    name,
    comp,
    team,
    match,
    preload,
    autoFuelScored,
    autoFuelMissed,
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
    endgameScoring,
    endgameMisses,
    endgameHumanScore,
    endgameHumanMisses,
    notes,
    redScore,
    blueScore,
    penalties,
    rankingPoints,
    review,
    climbLevel,
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
