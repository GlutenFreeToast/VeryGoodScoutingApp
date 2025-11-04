import { useState } from 'preact/hooks'
import './app.css'
import Match from './pages/match/match.tsx'
import Auton from './pages/match/auton.tsx'
import Teleop from './pages/match/teleop.tsx'
import Submit from './pages/match/submit.tsx'
import build from '../buildInfo.json'

export const PageType = {
  MATCH: 0,
  AUTON: 1,
  TELEOP: 2,
  SUBMIT: 3
} as const;

export type PageType = typeof PageType[keyof typeof PageType];

export function App() {
    
  const [page, setPage] = useState<PageType>(PageType.MATCH)
  const [note] = useState()
  
  return (
    <>

      <div className="version">
        {`Build # ${build.buildRevision}`}
      </div>

      <div className="buttons">
        <button
          className="match"
          onClick={() => {
            setPage(PageType.MATCH)
            console.log("Clicked on Match")
          }}
        >
          Match
        </button>

        <button
          className="auton"
          onClick={() => {
            setPage(PageType.AUTON)
            console.log("Clicked on Auton")
          }}
        >
          Auton
        </button>

        <button
          className="teleop"
          onClick={() => {
            setPage(PageType.TELEOP)
            console.log("Clicked on Teleop")
          }}
        >
          TeleOP
        </button>

        <button
          className="submit"
          onClick={() => {
            setPage(PageType.SUBMIT)
            console.log("Clicked on Submit")
          }}
        >
          Submit
        </button>
      </div>

      <div style={{ padding: 16 }}>
        <div>{note}</div>
        <div style={{ marginTop: 8 }}>
          {page === PageType.MATCH && <Match />}
          {page === PageType.AUTON && <Auton />}
          {page === PageType.TELEOP && <Teleop />}
          {page === PageType.SUBMIT && <Submit />}
        </div>
      </div>
    </>
  )
}
