import "../global.css";
import "../../app.css";
import "../../pages/match/match.css";
import type { FunctionalComponent } from "preact";
import type { StateUpdater, Dispatch } from "preact/hooks";
import DiscreteSlider from "../../Components/Slider/Slider.tsx";
import AllianceSlider from "../../Components/Alliance Slider/AllianceSlider.tsx";
export interface MatchData {
  name: string;
  comp: string;
  team: number;
  match: number;
  alliance: "Red" | "Blue" | "None";
  preload: number;
  show: boolean;
}

export interface MatchProps {
  matchData: MatchData;
  setMatchData: Dispatch<StateUpdater<MatchData>>;
}

const Match: FunctionalComponent<MatchProps> = ({
  matchData: matchData,
  setMatchData: setMatchData,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: Event & { currentTarget: HTMLInputElement }) => {
    const { name, value } = event.currentTarget;
    if (setMatchData && matchData) {
      let processedValue: any = value;

      // Handle number fields with limits
      if (name === "team") {
        const numValue = parseInt(value) || 0;
        processedValue = Math.max(0, Math.min(99999, numValue));
      } else if (name === "match") {
        const numValue = parseInt(value) || 0;
        processedValue = Math.max(0, Math.min(999, numValue));
      }

      const newData = {
        ...matchData,
        [name]: processedValue,
      };
      setMatchData(newData);
    } else {
      console.log("Warning: setmainpageData or mainpageData is undefined");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={"fieldset"} style={{ height: "250px" }}>
          <label className="fieldcontainer">
            🫵Your Name:
            <input
              type="text"
              name="name"
              value={matchData?.name || ""}
              onChange={handleChange}
              placeholder={"Ex: Dwayne Johnson"}
              className={"field"}
            />
          </label>

          <label className="fieldcontainer">
            ⚔️Comp Name:
            <input
              type="text"
              name="comp"
              maxlength={20}
              value={matchData?.comp || ""}
              onChange={handleChange}
              placeholder={"Ex: Plano"}
              className={"field"}
            />
          </label>
        </div>
        <div style={"margin: 5vh;"}></div>
        <div className={"fieldset"}>
          <label className={"fieldcontainer"}>
            👯Team #:
            <div className={"addfield"}>
              <input
                type="number"
                name="team"
                step={1}
                max={99999}
                value={matchData?.team || ""}
                onChange={handleChange}
                placeholder={"Ex: 5431"}
                className={"fieldb"}
                style={{ width: "17vw" }}
              />
              <button
                onTouchStart={(
                  event: Event & { currentTarget: HTMLButtonElement },
                ) => {
                  const newData = {
                    ...matchData,
                    show: !matchData?.show,
                  };
                  setMatchData(newData);
                }}
                className={"addbutton"}
                style={{
                  backgroundColor: matchData?.show ? "#4CAF50" : "#FF0000",
                  color: "white",
                  marginLeft: "",
                }}
              >
                {matchData?.show ? "Show" : "No Show"}
              </button>
            </div>
          </label>
          <label className={"fieldcontainer"}>
            📋Match #:
            <div className={"addfield"}>
              <input
                type="number"
                name="match"
                step={1}
                min={0}
                max={999}
                value={matchData?.match || ""}
                onChange={handleChange}
                placeholder={"Ex: 67"}
                className={"fieldb"}
              />
              <button
                onTouchStart={(
                  event: Event & { currentTarget: HTMLButtonElement },
                ) => {
                  const value =
                    parseInt(matchData?.match.toString() || "0") || 0;
                  const newData = {
                    ...matchData,
                    match: value + 1,
                  };
                  setMatchData(newData);
                }}
                className={"addbutton"}
              >
                +
              </button>
            </div>
          </label>

          <div
            className={"button_container"}
            style={{ width: "75%", marginTop: "3vh" }}
          >
            <AllianceSlider
              alliance={matchData?.alliance || "none"}
              setAlliance={(alliance) => {
                setMatchData({ ...matchData, alliance });
              }}
            />
          </div>

          <label
            className={"fieldcontainer"}
            style={{ width: "65%", marginTop: "5vh" }}
          >
            🟡Preload:
            <DiscreteSlider
              value={matchData?.preload || 0}
              onChange={(value) => {
                setMatchData({
                  ...matchData,
                  preload: value,
                });
              }}
            />
          </label>
        </div>
      </form>
    </>
  );
};
export default Match;
