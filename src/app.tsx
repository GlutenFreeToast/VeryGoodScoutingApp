import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import match from './pages/match/match.tsx'
import Match from './pages/match/match.tsx'

export function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState<String>("Match");

  return (
    <>
    <div className="buttons">
      <button className={"match"}> 
      onClick={() => { setPage("Match") }} 
      Match</button>

      <button className={"auton"}
      onClick={() => { setPage("Auton");console.log("Clicked on " + page); }} 
> 

      Auton</button>

      <button className={"teleop"}
      onClick={() => { setPage("Teleop");console.log("Clicked on " + page); }} 
> 

      TeleOP</button>
      
      <button className={"submit"}
    onClick={() => { setPage("Submit");console.log("Clicked on " + page); }} 
> 

      Submit</button>

    </div>

    {page  ? "Match" : <Match />}
     </>)
}
