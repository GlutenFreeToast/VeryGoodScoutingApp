import "../global.css";
import "./finalize.css"
import type { FunctionalComponent } from "preact";

export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
}

const Finalize: FunctionalComponent<MainpageProps> = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <div class="field-row">
        <input checked disabled type="checkbox" id="FakeChoice"></input>
        <label for="example4">Scouting Notes</label>
      </div>
      <h3>Put good notes (psst, SNS knows where you live):</h3>
      <form onSubmit={handleSubmit}>

        <textarea
          className={"notes"}
          name="notes"
          placeholder="Ex: robot blew up, injured 6 or 7 people"
        />
      </form>

      <h2>---------------</h2>
      <button className={"buttons"}>Submit</button>
    </>
  );
};

export default Finalize;
