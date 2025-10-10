
import type { App } from '../../app';
import { useNavigate } from "react-router-dom";
import '../../app.css'
import { useEffect, useState } from 'react'

export interface mainpageProps{
  mainpageData: {[key:string]: any};
  setmainpageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;

}
// {mainpageData, setmainpageData}: mainpageProps
const Match: React.FC<mainpageProps> = () => {

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
    <h1>Match Page</h1>
    </>
  )}


export default Match
