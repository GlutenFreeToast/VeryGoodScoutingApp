import "../../app.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import type { StateUpdater, Dispatch } from "preact/hooks"

export interface MainpageProps {
  mainpageData: autonData;
  setmainpageData: Dispatch<StateUpdater<autonData>>;
}
export interface autonData{
    FuelScored: number,

}     


const Auton: FunctionalComponent<MainpageProps> = (_setautonData ) => {

  

  return <>
    <div className="pagecontainer">
      <Counter name = "Fuel Scored" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "Fuel Miseed" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>

      
      <select>
        <option>No Climb</option>
        <option>L1 Climb</option>
        <option>L2 Climb</option>
        <option>L3 Climb</option>
      </select>
      
    </div>

    
    
    
    
    </>;
};

export default Auton;
