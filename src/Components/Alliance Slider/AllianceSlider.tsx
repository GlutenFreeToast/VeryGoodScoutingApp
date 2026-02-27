import "./AllianceSlider.css";
import { triggerConfetti } from "../../Components/triggerConfetti";
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

  const updateSlider = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const min = Number(slider.min);
    const max = Number(slider.max);
    const val = Number(slider.value);
    const percentage = ((val - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, red ${percentage}%, blue ${percentage}%)`;

    let newAlliance: "Red" | "Blue" | "None" = "None";
    if (percentage > 50) {
      triggerConfetti("cannon", "red");
      newAlliance = "Red";
    } else if (percentage < 50) {
      triggerConfetti("cannon", "blue");
      newAlliance = "Blue";
    }
    if (props.setAlliance) props.setAlliance(newAlliance);
    // percentage === 50 means it's in the middle (value = 2), so no confetti
  }, [props]);

  useEffect(() => {
    // Set initial value based on alliance prop
    if (sliderRef.current) {
      sliderRef.current.value = allianceToValue(props.alliance);
      updateSlider();
    }
    // Only run on mount or when alliance prop changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.alliance]);

  return (
    <input
      ref={sliderRef}
      type="range"
      min="1"
      max="3"
      defaultValue={allianceToValue(props.alliance)}
      className="slider"
      id="alliance"
      onChange={updateSlider}
      aria-label="Alliance Selector"
    />
  );
};

export default AllianceSlider;
