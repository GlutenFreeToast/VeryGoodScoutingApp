import "./AllianceSlider.css";
import { useRef, useEffect, useCallback } from "react";

interface AllianceSliderProps {
  alliance: "Red" | "Blue" | "None";
  setAlliance?: (alliance: "Red" | "Blue" | "None") => void;
}

const AllianceSlider = (props: AllianceSliderProps) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  // Helper to map alliance prop to slider value
  const allianceToValue = (alliance: "Red" | "Blue" | "None") => {
    if (alliance === "Red") return "3";
    if (alliance === "Blue") return "1";
    return "2";
  };

  useEffect(() => {
    // Set initial value based on alliance prop
    if (sliderRef.current) {
      sliderRef.current.value = allianceToValue(props.alliance);
    }
    // Only run on mount or when alliance prop changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.alliance]);

  const getColorIndicator = () => {
    if (props.alliance === "Red") return "#FF0000";
    if (props.alliance === "Blue") return "#0000FF";
    return "#CCCCCC";
  };

  return (
    <div className="alliance-slider-container">
      <button
        style={{ height: "50%", width: "̀50%", background: getColorIndicator() }}
        className="buttons"
        data-active={props.alliance === "Red" || props.alliance === "Blue"}
        onClick={() => {
          if (props.setAlliance) {
            props.setAlliance(props.alliance === "Red" ? "Blue" : "Red");
          }
        }}
      >
        Alliance
      </button>
    </div>
  );
};

export default AllianceSlider;
