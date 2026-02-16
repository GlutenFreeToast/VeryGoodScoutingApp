import "../global.css";
import "./finalize.css";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { PageType } from "../../app.tsx";
import { triggerConfetti } from "../../Components/triggerConfetti.tsx";
import Checkbox from "@mui/material/Checkbox";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FlagIcon from "@mui/icons-material/Flag";

export interface FormData {
  notes: string;
  red: number;
  blue: number;
  penalties: number;
  ranking: number;
  review: boolean;
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

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

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
            <div>
              <Checkbox
                name="review"
                checked={mainpageData.review === true}
                onChange={(event) => {
                  setmainpageData({
                    ...mainpageData,
                    review: (event.target as HTMLInputElement).checked,
                  });
                }}
                style={{
                  background: "#241f68",
                }}
                {...label}
                icon={
                  <OutlinedFlagIcon
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundcolor: "red",
                    }}
                  />
                }
                checkedIcon={
                  <FlagIcon
                    style={{
                      height: "80px",
                      width: "80px",
                    }}
                  />
                }
              />
            </div>
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
