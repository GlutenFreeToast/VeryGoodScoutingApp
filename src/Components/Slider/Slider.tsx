import {useState} from "preact/hooks"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import gamePiece from "../../assets/gamePiece.png"




const minimalSliderStyles = {

    
  // Styles for the main slider elements to make the track and rail thicker
  '& .MuiSlider-track': {
    height: 40, // Increase track height (filled part)
    width: '110%', // Ensure the track fills the entire width
    border: 'none', // Remove default border
    borderRadius: 4, // Add rounded corners
  },
  '& .MuiSlider-rail': {
    height: 40, // Increase rail height (unfilled part)
    width: '110%', // Ensure the rail fills the entire width
    borderRadius: 4, // Add rounded corners
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
  // Styles for the discrete steps (marks) to make them small circles
  '& .MuiSlider-mark': {
    width: 28,
    height: 28,
    right: '-14px !important' , // Center the mark on the track
    borderRadius: '100%',
    backgroundImage: `url(${gamePiece})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black', // Ensure the background color doesn't interfere with the image
    opacity: 0.5, // Make them subtle
    top: 'calc(50%)', // Vertically center the 8px mark on the 12px track
    // Remove the default vertical line appearance if any remained
    '&.MuiSlider-markActive': {
      opacity: 1, // Full opacity when active
    },
    
  },
}

export default function DiscreteSlider() {
  const min = 0;
  const max = 8; // change this to whatever max you need

  const marks = Array.from({ length: max }, (_, i) => ({ value: i + 1 }));


  const [currentvalue, setcurrentvalue] = useState(min);

  return (
    <Box sx={{ width: 500, padding: '0 20px' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Slider
        className="sliderBar"
        aria-label="Discrete slider"
        value={currentvalue}
        onChange={(e, newValue) => setcurrentvalue(newValue as number)}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={min}
        max={max}
        sx={minimalSliderStyles}
      />
    </Box>
  );
}