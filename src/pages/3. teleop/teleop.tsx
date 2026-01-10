import "../../app.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
//import { count } from "console";
import type { StateUpdater, Dispatch } from "preact/hooks"

export interface MainpageProps {
  mainpageData: teleopData;
  setmainpageData: Dispatch<StateUpdater<teleopData>>;
}
export interface teleopData{
    FuelScored: number,
    L2: number,
    L3: number,
    L4: number,
    CoralMissed: number,
    DeAlgae: number,
    Algaenet: number,
    Processor: number,
    LeftStart: boolean,
}     


const Teleop: FunctionalComponent<MainpageProps> = (
  // autonData,
   _setteleopData ) => {

  

  return <>
    <div className="pagecontainer">
      <Counter name = "Fuel Scored" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "L2" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "L3" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "C1" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "C2" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "C3" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "R1" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "R2" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>     

      <select>
        <option>No Climb</option>
        <option>L1 Climb</option>
        <option>L2 Climb</option>
        <option>L3 Climb</option>
      </select>
      
    </div>

    
    
    
    
    </>;
};

export default Teleop;
