import "../global.css";
import "xp.css/dist/XP.css";
import "../../app.css";
import { triggerConfetti } from "../../Components/triggerConfetti";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import DiscreteSlider from "../../Components/Slider/Slider.tsx"
import { blue } from "@mui/material/colors";

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

const Match: FunctionalComponent<MainpageProps> = ({ mainpageData, setmainpageData}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: Event & { currentTarget: HTMLInputElement }) => {
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
      <form onSubmit={handleSubmit}>
        <div className={"fieldset"}>
            <label className="fieldcontainer">
              Enter Your Name:
              <input
                type="text"
                name="name"
                value={mainpageData?.name || ""}
                onChange={handleChange}
                placeholder={"Ex: John Pork"}
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

          
          <div className={"button_container"} style={{width: "100%"}}>
            <button className={"button"} onClick={()=>{triggerConfetti('cannon','red')}} style={"color: red"}>Red</button>
            <button className={"button"} onClick={()=>{triggerConfetti('cannon','blue')}} style={"color: blue"}>Blue</button>
          </div>
          <h2>PreLoaded</h2>
         <div className="field-row" style="width: 600px; margin: 0 auto; height: 0px; ">
          

          <DiscreteSlider></DiscreteSlider>
          
        </div>
          </div>

        


      </form>
      
      
    </>
    
  );
};
export default Match;
