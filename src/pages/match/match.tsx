import "../../app.css";
import type { FunctionalComponent } from "preact";
import type { JSX } from "preact/jsx-runtime";

export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
}

const Match: FunctionalComponent<MainpageProps> = ({ mainpageData, setmainpageData }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: JSX.TargetedEvent<HTMLInputElement>) => {
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
        <fieldset>
          <legend>Set Once:</legend>

          <label>
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

          <div></div>

          <label>
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
        </fieldset>

        <label>
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

        <label>
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
      </form>
      
      {/* Debug section to show current values */}
      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <h4>Current Data:</h4>
        <pre>
          {JSON.stringify(mainpageData, null, 2)}
        </pre>
      </div>
    </>
  );
};
export default Match;
