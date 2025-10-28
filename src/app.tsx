import { useState } from 'preact/hooks'
import './app.css'
import Match from './pages/match/match_new.tsx'

export function App() {
  const [page, setPage] = useState<string>("Match")
  const [note] = useState(() => `build:${new Date().toLocaleTimeString()}`)

  return (
    <>
      <div className="buttons">
        <button
          className="match"
          onClick={() => {
            setPage("Match")
            console.log("Clicked on Match")
          }}
        >
          Match
        </button>

        <button
          className="auton"
          onClick={() => {
            setPage("Auton")
            console.log("Clicked on Auton")
          }}
        >
          Auton
        </button>

        <button
          className="teleop"
          onClick={() => {
            setPage("Teleop")
            console.log("Clicked on Teleop")
          }}
        >
          TeleOP
        </button>

        <button
          className="submit"
          onClick={() => {
            setPage("Submit")
            console.log("Clicked on Submit")
          }}
        >
          Submit
        </button>
      </div>

      <div style={{ padding: 16 }}>
        <div>{note}</div>
        <div style={{ marginTop: 8 }}>
          {page === 'Match' && <Match />}
          {page !== 'Match' && <div>{page} page (placeholder)</div>}
        </div>
      </div>
    </>
  )
}
