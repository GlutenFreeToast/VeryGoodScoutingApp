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

      <fieldset>
        <legend>Set Once:</legend>

        <label>Enter Your Name:
          <input type="text" name="name" placeholder={"Ex: John Pork"} className={"field"}/>
        </label>

        <div></div>

        <label>Comp Name:
          <input type="text" name="comp" placeholder={"Ex: Plano"} className={"field"}/>
        </label>
      </fieldset>
      
      <label>Team #:
        <input type="text" name="team" placeholder={"Ex: 5431"} className={"field"}/>
      </label>

      <label>Match #:
        <input type="text" name="match" placeholder={"Ex: 67"} className={"field"}/>
      </label>
      </form>
    </>
  )
}
export default Match
