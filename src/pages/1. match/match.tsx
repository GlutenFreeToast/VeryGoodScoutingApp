import "../global.css";
import "../../app.css";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import DiscreteSlider from "../../Components/Slider/Slider.tsx";
import { blue } from "@mui/material/colors";
import AllianceSlider from "../../Components/Alliance Slider/AllianceSlider.tsx";

export interface FormData {
  name: string;
  comp: string;
  team: number;
  match: number;
  preload: number;
}

export interface MainpageProps {
  mainpageData: FormData;
  setmainpageData: Dispatch<StateUpdater<FormData>>;
}

const Match: FunctionalComponent<MainpageProps> = ({
  mainpageData,
  setmainpageData,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: Event & { currentTarget: HTMLInputElement }) => {
    const { name, value } = event.currentTarget;
    console.log("Input changed:", name, value);
    if (setmainpageData && mainpageData) {
      let processedValue: any = value;

      // Handle number fields with limits
      if (name === "team") {
        const numValue = parseInt(value) || 0;
        processedValue = Math.max(1, Math.min(99999, numValue));
      } else if (name === "match") {
        const numValue = parseInt(value) || 0;
        processedValue = Math.max(1, Math.min(999, numValue));
      }

      const newData = {
        ...mainpageData,
        [name]: processedValue,
      };
      console.log("Updating with:", newData);
      setmainpageData(newData);
    } else {
      console.log("Warning: setmainpageData or mainpageData is undefined");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={"fieldset"}>
          <label className="fieldcontainer">
            Enter Your Name:
            <input
              type="text"
              name="name"
              value={mainpageData?.name || ""}
              onChange={handleChange}
              placeholder={"Ex: Dwayne Johnson"}
              className={"field"}
            />
          </label>

          <label className="fieldcontainer">
            Comp Name:
            <input
              type="text"
              name="comp"
              maxlength={20}
              value={mainpageData?.comp || ""}
              onChange={handleChange}
              placeholder={"Ex: Plano"}
              className={"field"}
            />
          </label>
        </div>
        <div style={"margin: 5vh;"}></div>
        <div className={"fieldset"}>
          <label className={"fieldcontainer"}>
            Team #:
            <input
              type="number"
              name="team"
              step={1}
              max={99999}
              value={mainpageData?.team || ""}
              onChange={handleChange}
              placeholder={"Ex: 5431"}
              className={"field"}
            />
          </label>
          <label className={"fieldcontainer"}>
            Match #:
            <input
              type="number"
              name="match"
              step={1}
              min={1}
              max={999999}
              value={mainpageData?.match || ""}
              onChange={handleChange}
              placeholder={"Ex: 67"}
              className={"field"}
            />
          </label>

          <div
            className={"button_container"}
            style={{ width: "75%", marginTop: "5vh" }}
          >
            <AllianceSlider />
          </div>
          <h2>Preload</h2>
          <div className="field-row" style="width: 700px">
            <label for="range25">Preloaded Fuel:</label>
            <label for="range26">0</label>
            <input
              id="range26"
              type="range"
              min="0"
              max="8"
              value={mainpageData?.preload || 0}
            />
            <label for="range27">8</label>
          </div>
        </div>
      </form>
    </>
  );
};
export default Match;
