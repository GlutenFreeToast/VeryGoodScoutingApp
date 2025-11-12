import "../../app.css";
import type { FunctionalComponent } from "preact";


export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
}

const Results: FunctionalComponent<MainpageProps> = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
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

export default Results;
