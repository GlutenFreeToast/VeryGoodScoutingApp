import '../../app.css'
import type { FunctionalComponent } from 'preact'

export interface MainpageProps {
  mainpageData?: { [key: string]: any }
  setmainpageData?: (v: { [key: string]: any }) => void
}

const Auton: FunctionalComponent<MainpageProps> = () => {
  return (
    <>
      <h1>Auton</h1>
      
    </>
  )
}

export default Auton
