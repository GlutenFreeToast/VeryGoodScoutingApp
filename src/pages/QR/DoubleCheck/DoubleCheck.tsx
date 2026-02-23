import "../../global.css";
import type { FunctionalComponent } from "preact";

export interface DoubleCheckProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DoubleCheck: FunctionalComponent<DoubleCheckProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Are you sure?</h2>
        <p>Do you want to reset all your data?</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            className="buttons"
            onClick={onCancel}
            style={{ minWidth: "100px" }}
          >
            No
          </button>
          <button
            className="buttons"
            onClick={onConfirm}
            style={{
              minWidth: "100px",
              backgroundColor: "#D9544D",
              color: "white",
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleCheck;
