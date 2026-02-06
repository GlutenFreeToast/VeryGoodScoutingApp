import "../../app.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import { type StateUpdater, type Dispatch, useState } from "preact/hooks"

export interface MainpageProps {
  mainpageData: autonData;
  setmainpageData: Dispatch<StateUpdater<autonData>>;
}
export interface autonData{
    FuelScored: number,
    FuelMissed: number,
    climb: number
}     






const Auton: FunctionalComponent<MainpageProps> = ({ mainpageData, setmainpageData }) => {

  

  

  return <>
    <div className="pagecontainer">
      
      <Counter name="Fuel Scored" count={mainpageData.FuelScored} onButtonDown={() => mainpageData.FuelScored > 0 && setmainpageData({ ...mainpageData, FuelScored: mainpageData.FuelScored - 1 })} onButtonUp={() => mainpageData.FuelScored < 8 && setmainpageData({ ...mainpageData, FuelScored: mainpageData.FuelScored + 1 })} />
      <Counter name="Fuel Missed" count={mainpageData.FuelMissed} onButtonDown={() => mainpageData.FuelMissed > 0 && setmainpageData({ ...mainpageData, FuelMissed: mainpageData.FuelMissed - 1 })} onButtonUp={() => mainpageData.FuelMissed < 8 && setmainpageData({ ...mainpageData, FuelMissed: mainpageData.FuelMissed + 1 })} />
      <select value={mainpageData.climb} onChange={(e) => setmainpageData({ ...mainpageData, climb: parseInt(e.currentTarget.value) })}>
        <option value="0">No Climb</option>
        <option value="1">L1 Climb</option>
      </select>
      
    </div>

    
    
    
    
    </>;
};

export default Auton;
