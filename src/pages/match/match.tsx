
import type { App } from '../../app';
import './app.css'
import { useEffect, useState } from 'react'

export interface mainpageProps{
  mainpageData: {[key:string]: any};
  setmainpageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Mainpage: React.FC<mainpageProps> = ({mainpageData, setmainpageData}: mainpageProps) => {

//Constants
  const [currentPage, setCurrentPage] = useState("Match");
  const [scoutName, setScoutName] = useState("");
  const [teamID, setteamID] = useState("");
  const [matchID, setMatchID] = useState("");
  const [compLocation, setcompLocation] = useState("");
  const [allianceColor, setallianceColor] = useState("");
  const [startingPosition, setstartingPosition] = useState("");



  return (
    <>
    <div className="buttons">
      <button className={"match"}> 
        
      Match</button>

      <button className={"auton"}> 

      Auton</button>

      <button className={"teleop"}> 

      TeleOP</button>
      
      <button className={"submit"}> 

      Submit</button>

    </div>
    <div>
      <Field type="text" value{scoutName} ></Field>
    </div>
    </>
  )}


export default App
