import '../../app.css'
import type { FunctionalComponent } from 'preact'

export interface MainpageProps {
  mainpageData?: { [key: string]: any }
  setmainpageData?: (v: { [key: string]: any }) => void
}

const Match: FunctionalComponent<MainpageProps> = () => {
  return (
    <>
      <h1>Match Paged</h1>
      <form>  
      <label>Enter Your Name:
        <input type="text" name="name" />
      </label>
      </form>
    </>
  )
}

export default Match
