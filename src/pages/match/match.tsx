import '../../app.css'
import type { FunctionalComponent } from 'preact'

export interface MainpageProps {
  mainpageData?: { [key: string]: any }
  setmainpageData?: (v: { [key: string]: any }) => void
}

const Match: FunctionalComponent<MainpageProps> = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
  };
  return (
    <>

      <form onSubmit={handleSubmit}>  
      <label>Enter Your Name:
        <input type="text" name="name" placeholder={"Ex: John Pork"} />
      </label>

      <label>Team #:
        <input type="text" name="team" placeholder={"Ex: 5431"} />
      </label>

      <label>Match #:
        <input type="text" name="match" placeholder={"Ex: 67"} />
      </label>
      </form>
    </>
  )
}
export default Match
