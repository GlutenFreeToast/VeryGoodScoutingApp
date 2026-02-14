import "./AllianceSlider.css";
import { triggerConfetti } from "../../Components/triggerConfetti";

import { useRef, useEffect, useCallback } from "react";

interface AllianceSliderProps {
  // You can add props here if needed, such as a callback for when the alliance changes
}

const AllianceSlider = () => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const updateSlider = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const min = Number(slider.min);
    const max = Number(slider.max);
    const val = Number(slider.value);
    const percentage = ((val - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, red ${percentage}%, blue ${percentage}%)`;

    if (percentage > 50) {
      triggerConfetti("cannon", "red");
    } else if (percentage < 50) {
      triggerConfetti("cannon", "blue");
    }
    // percentage === 50 means it's in the middle (value = 2), so no confetti
  }, []);

  useEffect(() => {
    updateSlider();
  }, [updateSlider]);

  return (
    <input
      ref={sliderRef}
      type="range"
      min="1"
      max="3"
      defaultValue="2"
      className="slider"
      id="alliance"
      onChange={updateSlider}
    />
  );
};

export default AllianceSlider;
