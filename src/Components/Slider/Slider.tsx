import "./slider.css";
import {useState} from "preact/hooks"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const minimalSliderStyles = {
  // Styles for the main slider elements to make the track and rail thicker
  '& .MuiSlider-track': {
    height: 30, // Increase track height (filled part)
    border: 'none', // Remove default border
    borderRadius: 6, // Add rounded corners
  },
  '& .MuiSlider-rail': {
    height: 30, // Increase rail height (unfilled part)
    borderRadius: 6, // Add rounded corners
  },
  // Styles to completely hide the slider thumb (the circle)
  '& .MuiSlider-thumb': {
    // Completely hide the thumb circle
    opacity: 0,
    // Remove the default shadow ring
    '&:before': {
      boxShadow: 'none',
    },
    // Remove the hover and focus effect circles
    '&:hover, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
}

export default function DiscreteSlider() {
  const [currentvalue, setcurrentvalue] = useState(Number);

  return (
    <Box sx={{ width: 600}}>
      <Slider
      
        className="sliderBar"
        aria-label="Temperature"
        defaultValue={0}
        valueLabelDisplay="auto"
        shiftStep={0}
        step={1}
        marks = {true}
        min={1}
        max={8}
        sx= {minimalSliderStyles}
        
        
      />
      <Slider
      
        className="sliderBar"
        defaultValue={currentvalue}
        step={1}
        marks = {true}
        min={1}
        max={8}
        sx= {minimalSliderStyles}
        
      />
    </Box>
  );
}