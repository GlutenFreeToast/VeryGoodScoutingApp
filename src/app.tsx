import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import match from './pages/match/match.tsx'

export function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState<String>("Match");

  return (
    <>
    <div className="buttons">
      <button className={"match"}> 
        onClick={() => { setPage("Match") }} 
      Match</button>

      <button className={"auton"}> 

      Auton</button>

      <button className={"teleop"}> 

      TeleOP</button>
      
      <button className={"submit"}> 

      Submit</button>

    </div>


      <div>

        <a href="https://code.wucode.org/login" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
