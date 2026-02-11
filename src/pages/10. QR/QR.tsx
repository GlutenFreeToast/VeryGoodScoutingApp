import "../global.css";
import type { FunctionalComponent } from "preact";
import { useState } from "preact/compat";
import QRCode from "react-qr-code";

export interface QRProps {
  matchData: any;
  autonData: any;
  shiftData: any;
  finalizeData: any;
  endGameData: any;
}

const QR: FunctionalComponent<QRProps> = ({
  matchData,
  autonData,
  shiftData,
  finalizeData,
  endGameData,
}) => {
  const [ScouterName, setScouterName] = useState(
    matchData.name || "Unknown Scouter",
  );
  const [TeamNumber, setTeamNumber] = useState(
    matchData.team || "Unknown Team",
  );
  const [MatchNumber, setMatchNumber] = useState(
    matchData.match || "Unknown Match",
  );
  const [Competition, setCompetition] = useState(
    matchData.comp || "Unknown Competition",
  );
  const [Preload, setPreload] = useState(matchData.preload || 0);
  const [FuelScored, setFuelScored] = useState(autonData.FuelScored || 0);
  const [FuelMissed, setFuelMissed] = useState(autonData.FuelMissed || 0);
  const [ClimbLevel, setClimbLevel] = useState(endGameData.climbLevel || 0);
  const [ActiveRobotMade, setActiveRobotMade] = useState(
    shiftData.shift[0][0] || 0,
  );
  const [ActiveRobotMissed, setActiveRobotMissed] = useState(
    shiftData.shift[0][1] || 0,
  );
  const [ActiveHumanMade, setActiveHumanMade] = useState(
    shiftData.shift[0][2] || 0,
  );
  const [ActiveHumanMissed, setActiveHumanMissed] = useState(
    shiftData.shift[0][3] || 0,
  );

  const [inActiveRobotMade, setinActiveRobotMade] = useState(
    shiftData.shift[1][0] || 0,
  );
  const [inActiveRobotMissed, setinActiveRobotMissed] = useState(
    shiftData.shift[1][1] || 0,
  );
  const [inActiveHumanMade, setinActiveHumanMade] = useState(
    shiftData.shift[1][2] || 0,
  );
  const [inActiveHumanMissed, setinActiveHumanMissed] = useState(
    shiftData.shift[1][3] || 0,
  );

  const payload = {
    version: 1,
    timestamp: new Date().toISOString(),
    match: matchData,
    auton: autonData,
    shifts: shiftData,
    finalize: finalizeData,
    endgame: endGameData,
  };

  const json = JSON.stringify(payload);

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
        <QRCode value={json} size={256} />
      </div>
      <textarea readOnly style={{ width: "80%", height: 200 }} value={json} />
    </div>
  );
};

export default QR;
