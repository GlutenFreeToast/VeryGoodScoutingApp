import '../../app.css'
import type { FunctionalComponent } from 'preact'

export interface MainpageProps {
  mainpageData?: { [key: string]: any }
  setmainpageData?: (v: { [key: string]: any }) => void
}

const Submit: FunctionalComponent<MainpageProps> = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
  };
  return (
    <>
      <h1>Submit</h1>
      
      <form onSubmit={handleSubmit}>  
      <label>Red Points:
        <input type="text" name="red" placeholder={"Ex: 57"} />
      </label>

      <label>Blue Points:
        <input type="text" name="blue" placeholder={"Ex: 90"} />
      </label>

      <label>Penalties:
        <input type="text" name="penalties" placeholder={"Ex: 296"} />
      </label>

      <label>Ranking Points:
        <input type="text" name="ranking" placeholder={"Ex: 6"} />
      </label>

      </form>
    </>
  )
}

export default Submit
