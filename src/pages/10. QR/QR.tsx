import "../global.css";
import type { FunctionalComponent } from "preact";
import { useState } from "preact/compat";
import QRCode from "react-qr-code";
import type Shift from "../3. TransitionalShift/TransitionalShift";
import DoubleCheck from "./DoubleCheck/DoubleCheck";
import type { PageType } from "../../app";

export interface QRProps {
  matchData: any;
  autonData: any;
  shiftData: { shift: number[][] };
  finalizeData: any;
  endGameData: any;
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
  const payload = {
    version: 1,
    timestamp: new Date().toISOString(),
    match: matchData,
    auton: autonData,
    Shift: shiftData,
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
          onClick={() => setShowConfirm(true)}
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
            }
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default QR;
