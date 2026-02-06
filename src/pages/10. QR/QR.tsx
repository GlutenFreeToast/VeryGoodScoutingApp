import "../global.css";
import type { FunctionalComponent } from "preact";
import QRCode from "react-qr-code";

export interface QRProps {
  matchData: any;
  autonData: any;
  shiftData: any;
  finalizeData: any;
  endGameData: any;
}

const QR: FunctionalComponent<QRProps> = ({ matchData, autonData, shiftData, finalizeData, endGameData }) => {
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <h2>Match Data QR</h2>
      <div style={{ background: "white", padding: 16 }}>
        <QRCode value={json} size={256} />
      </div>
      <textarea readOnly style={{ width: "80%", height: 200 }} value={json} />
    </div>
  );
};

export default QR;
