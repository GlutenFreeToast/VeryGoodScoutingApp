import "../../app.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import type { StateUpdater, Dispatch } from "preact/hooks"
import { useState } from "preact/hooks";
import type { NumberArrayType } from "../../Components/NumberArray";

export interface MainpageProps {
  mainpageData: TransitionalShiftData;
  setmainpageData: Dispatch<StateUpdater<TransitionalShiftData>>;
}
{/*the first number represent a different shift*/}
let count = {shift: [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]};

export interface TransitionalShiftData {
  shift: Array<Array<number>>;
}




const Teleop: FunctionalComponent<MainpageProps> = (_setteleopData ) => {

  const [shiftnumber, setshiftnumber]= useState(count);
  const [activeShift, setActiveShift] = useState(0);
  const [shotMade, setshotmade]= useState(count.shift[activeShift][0]);
  

  return <>
    <div className="pagecontainer">
    <select  
    value = {activeShift}
    onChange =   {(e) => {
      const shiftIndex = parseInt((e.target as HTMLSelectElement).value);
      setActiveShift(shiftIndex);
      setshotmade(count.shift[shiftIndex][0]);
    }}>
      <option value = "0" selected>Shift 1</option>
      <option value = "1">Shift 2</option>
      <option value = "2">Shift 3</option>
      <option value = "3">Shift 4</option>
    </select>
    <div className="pagecontainer"  style= "display:flex; flex-direction: row;">
    <Counter name = "Shot Made" count={shotMade} onButtonDown={() => {count.shift[activeShift][0]--; setshotmade(count.shift[activeShift][0]);}} onButtonUp={() => {count.shift[activeShift][0]++; setshotmade(count.shift[activeShift][0]);}}></Counter>
    <Counter name = "Shot not made" count={shotMade} onButtonDown={() => {count.shift[activeShift][0]--; setshotmade(count.shift[activeShift][0]);}} onButtonUp={() => {count.shift[activeShift][0]++; setshotmade(count.shift[activeShift][0]);}}></Counter>
    
    </div>
    <div className="pagecontainer" style= "display:flex; flex-direction: row;">
    <Counter name = "Shot missed" count={shotMade} onButtonDown={() => {count.shift[activeShift][0]--; setshotmade(count.shift[activeShift][0]);}} onButtonUp={() => {count.shift[activeShift][0]++; setshotmade(count.shift[activeShift][0]);}}></Counter>

    </div>
    </div>
    </>;
};

export default Teleop;
