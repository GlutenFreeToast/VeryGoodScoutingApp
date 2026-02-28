import "../global.css";
import "./finalize.css";
import type { FunctionalComponent } from "preact";
import { type StateUpdater, type Dispatch, useState } from "preact/hooks";
import { PageType } from "../../app.tsx";
import { triggerConfetti } from "../../Components/triggerConfetti.tsx";
import Checkbox from "@mui/material/Checkbox";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import FlagIcon from "@mui/icons-material/Flag";

export interface FinalizeData {
  notes: string;
  red: number;
  blue: number;
  penalties: number;
  ranking: number;
  review: boolean;
}

export interface FinalizeProps {
  finalizeData: FinalizeData;
  setFinalizeData: Dispatch<StateUpdater<FinalizeData>>;
  setPage: Dispatch<StateUpdater<PageType>>;
}

const Finalize: FunctionalComponent<FinalizeProps> = ({
  finalizeData: finalizeData,
  setFinalizeData: setFinalizeData,
  setPage,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (
    event: Event & { currentTarget: HTMLTextAreaElement },
  ) => {
    const { name, value } = event.currentTarget;
    if (setFinalizeData && finalizeData) {
      const newData = {
        ...finalizeData,
        [name]: value,
      };
      setFinalizeData(newData);
    } else {
      console.log("Warning: setmainpageData or mainpageData is undefined");
    }
  };

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const [showNotes, setShowNotes] = useState(false);


  return (
    <>
      <form onSubmit={handleSubmit}>
        {showNotes && <div className="double-note-container">
        {showNotes && <div className="note-container">
            <form onSubmit={handleSubmit} className="form">
              <textarea
                className={"notes"}
                name="notes"
                value={finalizeData?.notes || ""}
                onChange={handleChange}
                placeholder="Ex: robot blew up, injured 6 or 7 people"
              />
              <button onClick={()=>setShowNotes(false)} className="close-notes-button">close</button>
            </form>
            </div>}
            </div>}
        <div className={"fieldset"}>
          <label className={"fieldcontainer"}>
            🟥Red Points:
            <input
              type="text"
              name="red"
              placeholder={"Ex: 57"}
              className={"field"}
              value={finalizeData.red || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(999, value));
                setFinalizeData({
                  ...finalizeData,
                  red: clamped,
                });
              }}
            />
          </label>

          <label className={"fieldcontainer"}>
            🟦Blue Points:
            <input
              type="text"
              name="blue"
              placeholder={"Ex: 90"}
              className={"field"}
              value={finalizeData.blue || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(999, value));
                setFinalizeData({
                  ...finalizeData,
                  blue: clamped,
                });
              }}
            />
          </label>
        </div>
        <div style={"margin: 5vh;"}></div>
        <div className={"fieldset"}>
          <label className={"fieldcontainer"}>
            ❌Penalties:
            <input
              type="text"
              name="penalties"
              placeholder={"Ex: 296"}
              className={"field"}
              value={finalizeData.penalties || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(999, value));
                setFinalizeData({
                  ...finalizeData,
                  penalties: clamped,
                });
              }}
            />
          </label>

          <label className={"fieldcontainer"}>
            ✔️Ranking Points:
            <input
              type="text"
              name="ranking"
              placeholder={"Ex: 6"}
              className={"field"}
              value={finalizeData.ranking || ""}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value) || 0;
                const clamped = Math.max(0, Math.min(6, value));
                setFinalizeData({
                  ...finalizeData,
                  ranking: clamped,
                });
              }}
            />
          </label>
          <div class="field-row"></div>

          <div>
            <div style={"padding-bottom: 3vw"}>
              <p>Mark for Review</p>
              <Checkbox
                name="review"
                checked={finalizeData.review === true}
                onChange={(event) => {
                  setFinalizeData({
                    ...finalizeData,
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
            <button onClick={()=>showNotes ? setShowNotes(false) : setShowNotes(true)} className="open-notes">Open Notes</button>
          </div>
        </div>
        <button
          className={"buttons"}
          onClick={() => {
            console.log("Clicked Submit");
            if (finalizeData.notes === "") {
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
