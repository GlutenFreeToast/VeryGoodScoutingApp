import "../global.css";
import "./finalize.css";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { PageType } from "../../app.tsx";
import { triggerConfetti } from "../../Components/triggerConfetti.tsx";

export interface FormData {
  notes: string;
  red: number;
  blue: number;
  penalties: number;
  ranking: number;
}

export interface FinalizeProps {
  mainpageData: FormData;
  setmainpageData: Dispatch<StateUpdater<FormData>>;
  setPage: Dispatch<StateUpdater<PageType>>;
}

const Finalize: FunctionalComponent<FinalizeProps> = ({
  mainpageData,
  setmainpageData,
  setPage,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (
    event: Event & { currentTarget: HTMLTextAreaElement },
  ) => {
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
          <label className={"fieldcontainer"}>
            Red Points:
            <input
              type="text"
              name="red"
              placeholder={"Ex: 57"}
              className={"field"}
              value={mainpageData.red || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(999, value));
                setmainpageData({
                  ...mainpageData,
                  red: clamped,
                });
              }}
            />
          </label>

          <label className={"fieldcontainer"}>
            Blue Points:
            <input
              type="text"
              name="blue"
              placeholder={"Ex: 90"}
              className={"field"}
              value={mainpageData.blue || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(999, value));
                setmainpageData({
                  ...mainpageData,
                  blue: clamped,
                });
              }}
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
              value={mainpageData.penalties || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(999, value));
                setmainpageData({
                  ...mainpageData,
                  penalties: clamped,
                });
              }}
            />
          </label>

          <label className={"fieldcontainer"}>
            Ranking Points:
            <input
              type="text"
              name="ranking"
              placeholder={"Ex: 6"}
              className={"field"}
              value={mainpageData.ranking || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(99, value));
                setmainpageData({
                  ...mainpageData,
                  ranking: clamped,
                });
              }}
            />
          </label>

          <div class="field-row"></div>

          <div>
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
          </div>
        </div>
        <h2>---------------</h2>
        <button
          className={"buttons"}
          onClick={() => {
            console.log("Clicked Submit");
            triggerConfetti("burst", "5431");
            if (mainpageData.notes === "") {
              console.log("Notes are empty");
              setPage(PageType.PRANK);
              return;
            } else {
              setPage(PageType.QR);
            }
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Finalize;
