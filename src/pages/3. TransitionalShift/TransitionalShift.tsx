import "../../app.css";
import "../global.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import type { StateUpdater, Dispatch } from "preact/hooks"
import { useState } from "preact/hooks";
import map from "../../assets/map.jpg";
import "./TransitionalShift.css"

export interface MainpageProps {
  mainpageData: ShiftData;
  setmainpageData: Dispatch<StateUpdater<ShiftData>>;
}
{/*the first number represent a different shift*/}
let count = {shift: [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]};

export interface ShiftData {
  shift: number[][];
}



const Shift: FunctionalComponent<MainpageProps> = (_setteleopData ) => {

  const [activeShift, setActiveShift] = useState(0);
  const [shotMade, setshotmade]= useState(count.shift[activeShift][0]);
  const [misses, setmisses]= useState(count.shift[activeShift][1]);
  const [humanmade, sethumanmade]= useState(count.shift[activeShift][2]);
  const [humanmiss, sethumanmiss]= useState(count.shift[activeShift][3]);


  return <>


    <div className="pagecontainer">
      <select  
    value = {activeShift}
    onChange =   {(e) => {
      const shiftIndex = parseInt((e.target as HTMLSelectElement).value);
      setActiveShift(shiftIndex);
      setshotmade(count.shift[shiftIndex][0]);
      setmisses(count.shift[shiftIndex][1]);
      sethumanmade(count.shift[shiftIndex][2]);
      sethumanmiss(count.shift[shiftIndex][3]);
    }}>
      <option value = "0" selected>Transition Shift</option>
      <option value = "1">Shift 1</option>
      <option value = "2">Shift 2</option>
      <option value = "3">Shift 3</option>
      <option value = "4">Shift 4</option>
    </select>



    <div className="button_container"  style={{ position: 'relative', left: -150, top: 50}}>
    <Counter name = "Shot Made" count={shotMade} onButtonDown={() => {count.shift[activeShift][0]--; setshotmade(count.shift[activeShift][0]);}} onButtonUp={() => {count.shift[activeShift][0]++; setshotmade(count.shift[activeShift][0]);}}></Counter>
    <Counter name = "Shot not missed" count={misses} onButtonDown={() => {count.shift[activeShift][1]--; setmisses(count.shift[activeShift][1]);}} onButtonUp={() => {count.shift[activeShift][1]++; setmisses(count.shift[activeShift][1]);}}></Counter>
    
    
    </div>
    <div className="button_container"  style={{ position: 'relative', left: 230, top: -160}}>
    <Counter name = "Human Player Score" count={humanmade} onButtonDown={() => {count.shift[activeShift][2]--; sethumanmade(count.shift[activeShift][2]);}} onButtonUp={() => {count.shift[activeShift][2]++; sethumanmade(count.shift[activeShift][2]);}}></Counter>
    <Counter name = "Human Player misses" count={humanmiss} onButtonDown={() => {count.shift[activeShift][3]--; sethumanmiss(count.shift[activeShift][3]);}} onButtonUp={() => {count.shift[activeShift][3]++; sethumanmiss(count.shift[activeShift][3]);}}></Counter>

    </div>
    <div>
  <img src={map} alt="map" style={{ position: 'relative', width: '100%', height: 'auto'}}></img>
  <button  className="bibby"></button>

      </div>
    
    
    
      
    </div>

    
    
    
    
    </>;
};

export default Shift;
