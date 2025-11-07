import "../../app.css";
import type { FunctionalComponent } from "preact";

export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
}

const Submit: FunctionalComponent<MainpageProps> = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <h5>Put good notes (psst, SNS knows where you live):</h5>
      <form onSubmit={handleSubmit}>

        <textarea
          className={"notes"}
          name="notes"
          placeholder="Ex: robot blew up, injured 6 or 7 people"
        />
      </form>

      <h2>---------------</h2>
      <button className={"buttons"}>Create QR Code with Results</button>
    </>
  );
};

export default Submit;
