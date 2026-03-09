import { useState } from "preact/hooks";
import "./PasscodeModal.css";

interface PasscodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeChange: (theme: "light" | "dark") => void;
}

export default function PasscodeModal({
  isOpen,
  onClose,
  onThemeChange,
}: PasscodeModalProps) {
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");

  const handleKeyPress = (key: string) => {
    if (key === "DEL") {
      setPasscode(passcode.slice(0, -1));
      setMessage("");
    } else if (key === "CLR") {
      setPasscode("");
      setMessage("");
    } else {
      const newPasscode = passcode + key;
      setPasscode(newPasscode);

      // Check for passcodes
      if (newPasscode === "785456") {
        setMessage("Dark Theme Activated!");
        onThemeChange("dark");
        setTimeout(() => {
          setPasscode("");
          setMessage("");
          onClose();
        }, 1500);
      } else if (newPasscode === "1") {
        setMessage("Light Theme Activated!");
        onThemeChange("light");
        setTimeout(() => {
          setPasscode("");
          setMessage("");
          onClose();
        }, 1500);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="passcode-modal-overlay" onClick={onClose}>
      <div className="passcode-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Enter Passcode</h2>
        <div className="passcode-display">{"●".repeat(passcode.length)}</div>
        {message && <div className="passcode-message">{message}</div>}
        <div className="passcode-keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              className="passcode-key"
              onClick={() => handleKeyPress(String(num))}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="passcode-actions">
          <button
            className="passcode-action-btn del-btn"
            onClick={() => handleKeyPress("DEL")}
          >
            DEL
          </button>
          <button
            className="passcode-action-btn clr-btn"
            onClick={() => handleKeyPress("CLR")}
          >
            CLR
          </button>
          <button className="passcode-action-btn cancel-btn" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
