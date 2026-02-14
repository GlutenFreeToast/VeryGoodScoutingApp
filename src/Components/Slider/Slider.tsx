import "./slider.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import gamePiece from "../../assets/gamePiece.png";
import { Height } from "@mui/icons-material";
function valuetext(value: number) {
  return `${value}°C`;
}
const minimalSliderStyles = {
  // Styles for the main slider elements to make the track and rail thicker
  "& .MuiSlider-track": {
    height: 40, // Increase track height (filled part)
    border: "none", // Remove default border
    borderRadius: 4, // Add rounded corners
  },
  "& .MuiSlider-rail": {
    height: 40, // Increase rail height (unfilled part)
    borderRadius: 4, // Add rounded corners
  },
  // Styles to completely hide the slider thumb (the circle)
  "& .MuiSlider-thumb": {
    // Completely hide the thumb circle
    opacity: 1,
    height: 0,
    // Remove the default shadow ring
    "&:before": {
      boxShadow: "none",
    },
    // Remove the hover and focus effect circles
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none",
    },
  },
  // Styles for the discrete steps (marks) to make them small circles
  "& .MuiSlider-mark": {
    width: 0,
    height: 0,
    borderRadius: "100%",
    backgroundImage: `url(${gamePiece})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "black", // Ensure the background color doesn't interfere with the image
    opacity: 0.5, // Make them subtle
    top: "calc(100% + 24px)", // Vertically center the 8px mark on the 12px track
    // Remove the default vertical line appearance if any remained
    "&.MuiSlider-markActive": {
      opacity: 1, // Full opacity when active
    },
  },
};

interface DiscreteSliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

export default function DiscreteSlider({
  value = 0,
  onChange,
}: DiscreteSliderProps) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const numValue = typeof newValue === "number" ? newValue : newValue[0];
    if (onChange) {
      onChange(numValue);
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        padding: "80px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        className="sliderBar"
        aria-label="Preload"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        getAriaLabel={() => "Minimum distance"}
        shiftStep={0}
        step={1}
        marks={true}
        min={0}
        max={8}
        sx={minimalSliderStyles}
        disableSwap
      />
    </Box>
  );
}
