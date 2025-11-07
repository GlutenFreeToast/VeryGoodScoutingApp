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
      <form onSubmit={handleSubmit}>
        <label>
          Red Points:
          <input
            type="text"
            name="red"
            placeholder={"Ex: 57"}
            className={"field"}
          />
        </label>

        <label>
          Blue Points:
          <input
            type="text"
            name="blue"
            placeholder={"Ex: 90"}
            className={"field"}
          />
        </label>

        <div></div>

        <label>
          Penalties:
          <input
            type="text"
            name="penalties"
            placeholder={"Ex: 296"}
            className={"field"}
          />
        </label>

        <label>
          Ranking Points:
          <input
            type="text"
            name="ranking"
            placeholder={"Ex: 6"}
            className={"field"}
          />
        </label>
      </form>
    </>
  );
};

export default Results;
