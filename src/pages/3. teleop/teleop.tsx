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
    L1: number,
    L2: number,
    L3: number,
    L4: number,
    CoralMissed: number,
    DeAlgae: number,
    Algaenet: number,
    Processor: number,
    LeftStart: boolean,
}     


const TeleOp: FunctionalComponent<MainpageProps> = (
  // teleopData,
   _setteleopData ) => {

  

  return <>
    <div className="pagecontainer">
      <Counter name = "L1" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "L2" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "L3" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "C1" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "C2" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "C3" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "R1" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>
      <Counter name = "R2" count={0} onButtonDown={() => {}} onButtonUp={() => {}}></Counter>     

      
    </div>

    
    
    
    
    </>;
};

export default TeleOp;
