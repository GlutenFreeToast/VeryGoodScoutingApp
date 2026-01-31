import "../global.css";
import "./finalize.css"
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import prank from "../9. help/notes-prank";
import { PageType } from "../../app.tsx";
import { triggerConfetti } from "../../Components/triggerConfetti.tsx";



export interface FormData {
  notes: string;
}

export interface FinalizeProps {
  mainpageData: FormData;
  setmainpageData: Dispatch<StateUpdater<FormData>>;
  setPage: Dispatch<StateUpdater<PageType>>;
}

const Finalize: FunctionalComponent<FinalizeProps> = ({ mainpageData, setmainpageData, setPage }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: Event & { currentTarget: HTMLTextAreaElement }) => {
    const { name, value } = event.currentTarget;
    console.log('Input changed:', name, value);
    if (setmainpageData && mainpageData) {
      const newData = {
        ...mainpageData,
        [name]: value
      };
      console.log('Updating with:', newData);
      setmainpageData(newData);
    } else {
      console.log('Warning: setmainpageData or mainpageData is undefined');
    }
  };



  return (
    <>
      <div class="field-row">
        <input checked disabled type="checkbox" id="FakeChoice"></input>
        <label for="FakeChoice">Scouting Notes</label>
      </div>
      <h3>Put good notes (psst, SNS knows where you live):</h3>
      <form onSubmit={handleSubmit}>

        <textarea
          className={"notes"}
          name="notes"
          value={mainpageData?.notes || ""}
          onChange={handleChange}
          placeholder="Ex: robot blew up, injured 6 or 7 people"
        />

      </form>

      <h2>---------------</h2>
      <button className={"buttons"}
      onClick={() => {
        console.log("Clicked Submit");
        triggerConfetti('burst','5431')
        if (mainpageData.notes === "") {
          console.log("Notes are empty");
          setPage(PageType.PRANK);
          return;

        } else {
          console.log("Notes submitted:", mainpageData.notes);
        }

      }}
      >Submit</button>
      <div style={"margin: 5vh;"}></div>
      <form onSubmit={handleSubmit}>
        <div className={"fieldset"}>
        <label className={"fieldcontainer"}>
          Red Points:
          <input
            type="text"
            name="red"
            placeholder={"Ex: 57"}
            className={"field"}
          />
        </label>

        <label className={"fieldcontainer"}>
          Blue Points:
          <input
            type="text"
            name="blue"
            placeholder={"Ex: 90"}
            className={"field"}
          />
        </label>
        </div>
        <div style={"margin: 5vh;"}></div>
        <div className={"fieldset"}>
        <label className={"fieldcontainer"}>
          Penalties:
          <input
            type="text"
            name="penalties"
            placeholder={"Ex: 296"}
            className={"field"}
          />
        </label>

        <label className={"fieldcontainer"}>
          Ranking Points:
          <input
            type="text"
            name="ranking"
            placeholder={"Ex: 6"}
            className={"field"}
          />
        </label>
        </div>
      </form>
    </>
  );
};

export default Finalize;
