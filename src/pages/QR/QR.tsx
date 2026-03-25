import "../global.css";
import type { FunctionalComponent } from "preact";
import { useState } from "preact/compat";
import QRCode from "react-qr-code";
import type Shift from "../TransitionalShift/TransitionalShift";
import DoubleCheck from "./DoubleCheck/DoubleCheck";
import type { PageType } from "../../app";
import { triggerConfetti } from "../../Components/triggerConfetti";
import type { MatchData } from "../match/match";
import type { AutonData } from "../auton/auton";
import type { ShiftData } from "../TransitionalShift/TransitionalShift";
import type { FinalizeData } from "../finalize/finalize";
import type { EndGameData } from "../endGame/endGame";

export interface QRProps {
  matchData: MatchData;
  autonData: AutonData;
  shiftData: ShiftData;
  finalizeData: FinalizeData;
  endGameData: EndGameData;
  setPage?: (page: PageType) => void;
  previousPage?: PageType;
  resetAllData?: () => void;
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
  const show = matchData.show;
  const match = matchData.match;
  const alliance = matchData.alliance;
  const preload = matchData.preload;
  const autoFuelScored = autonData.fuelScored;
  const autoFuelMissed = autonData.fuelMissed;
  const autoShuttleCount = autonData.autonShuttleCount;
  const autonClimb = autonData.autonClimb ?? null;
  const depotSourced = autonData.depotSourced;
  const outpostSourced = autonData.outpostSourced;
  const neutralZoneSourced = autonData.neutralZoneSourced;
  const shiftShotMade = shiftData.shotMade;
  const shiftShotMissed = shiftData.misses;
  const ShuttleCount = shiftData.ShuttleCount;
  const endgameScoring = endGameData.Scoring;
  const endgameMisses = endGameData.Misses;
  const climbLevel = endGameData.climbLevel;
  const notes = finalizeData.notes;
  const defenseRating = finalizeData.defenseRating;
  const speedRating = finalizeData.speedRating;
  const review = finalizeData.review;
  const redScore = finalizeData.red;
  const blueScore = finalizeData.blue;
  const penalties = finalizeData.penalties;
  const rankingPoints = finalizeData.ranking;

  const payload = {
    name,
    comp,
    team,
    show,
    match,
    alliance,
    preload,
    autoFuelScored,
    autoFuelMissed,
    autoShuttleCount,
    autonClimb,
    depotSourced,
    outpostSourced,
    neutralZoneSourced,
    shiftShotMade,
    shiftShotMissed,
    ShuttleCount,
    endgameScoring,
    endgameMisses,
    notes,
    defenseRating,
    speedRating,
    redScore,
    blueScore,
    penalties,
    rankingPoints,
    review,
    climbLevel,
  };

  const json = JSON.stringify(payload);
  console.log(json, autonData);
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
            console.log(payload);
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
