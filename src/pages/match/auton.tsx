import '../../app.css'
import type { FunctionalComponent } from 'preact'

export interface MainpageProps {
  mainpageData?: { [key: string]: any }
  setmainpageData?: (v: { [key: string]: any }) => void
}

const auton: FunctionalComponent<MainpageProps> = () => {
  return (
    <>
      <h1>Match Page</h1>
      <form>  
      <label>Enter Your Name:
        <input type="text" name="name" />
      </label>
      </form>
    </>
  )
}

export default auton
