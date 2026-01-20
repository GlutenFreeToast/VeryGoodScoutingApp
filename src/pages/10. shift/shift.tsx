import "../../app.css";
import type { FunctionalComponent } from "preact";
import { useState, type Dispatch, type StateUpdater } from "preact/hooks";
import "xp.css/dist/XP.css";
import Counter from "../../Components/Counter/Counter";


export interface MainpageProps {
  mainpageData: typeof count;
  setmainpageData: Dispatch<StateUpdater<typeof count>>;
}
let count = {
  shift1: [0,0,0,0],
  shift2: [0,0,0,0],
  shift3: [0,0,0,0],
  shift4: [0,0,0,0]
};
export interface ShiftData {
  shift1: [number, number, number, number],
  shift2: [number, number, number, number],
  shift3: [number, number, number, number],
  shift4: [number, number, number, number]
}

useState<ShiftData>({ shift1: [0,0,0,0], shift2: [0,0,0,0], shift3: [0,0,0,0], shift4: [0,0,0,0] });


const Shift: FunctionalComponent<MainpageProps> = (setshift) => {

    return<>  
    <Counter name = "Shift 1" count={count.shift1[0]} onButtonDown={() => {count.shift1[0]--;}} onButtonUp={() => {count.shift1[0]++;}}></Counter>
    <Counter name = "Shift 2" count={count.shift2[0]} onButtonDown={() => {count.shift2[0]--;}} onButtonUp={() => {count.shift2[0]++;}}></Counter>
    <Counter name = "Shift 3" count={count.shift3[0]} onButtonDown={() => {count.shift3[0]--;}} onButtonUp={() => {count.shift3[0]++;}}></Counter>
    <Counter name = "Shift 4" count={count.shift4[0]} onButtonDown={() => {count.shift4[0]--;}} onButtonUp={() => {count.shift4[0]++;}}></Counter>
    
    
    
    </>
      

    
}

export default Shift;
