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
  team: string;
  match: string;
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
      const newData = {
        ...mainpageData,
        [name]: value,
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
              type="text"
              name="team"
              value={mainpageData?.team || ""}
              onChange={handleChange}
              placeholder={"Ex: 5431"}
              className={"field"}
            />
          </label>
          <label className={"fieldcontainer"}>
            Match #:
            <input
              type="text"
              name="match"
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
