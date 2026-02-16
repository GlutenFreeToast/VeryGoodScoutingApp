import "../../app.css";
import "../global.css";
import type { FunctionalComponent } from "preact";
import Counter from "../../Components/Counter/Counter";
import Counter2 from "../../Components/Counter/Counter2";
import type { StateUpdater, Dispatch } from "preact/hooks";
import { useState, useEffect } from "preact/hooks";
import map from "../../assets/field.png";
import "./TransitionalShift.css";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton, { toggleButtonClasses } from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: "4.2rem",
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
}));

export interface MainpageProps {
  mainpageData: ShiftData;
  setmainpageData: Dispatch<StateUpdater<ShiftData>>;
}
{
  /*the first number represent a different shift*/
}

export interface ShiftData {
  shift: number[][];
  location: number[];
}

const Shift: FunctionalComponent<MainpageProps> = ({
  mainpageData,
  setmainpageData,
}) => {
  const [activeShift, setActiveShift] = useState(0);
  const [shotMade, setshotmade] = useState(mainpageData.shift[activeShift][0]);
  const [misses, setmisses] = useState(mainpageData.shift[activeShift][1]);
  const [humanmade, sethumanmade] = useState(
    mainpageData.shift[activeShift][2],
  );
  const [currentlocation, setcurrentlocation] = useState(0);
  const [humanmiss, sethumanmiss] = useState(
    mainpageData.shift[activeShift][3],
  );
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setshotmade(mainpageData.shift[activeShift][0]);
    setmisses(mainpageData.shift[activeShift][1]);
    sethumanmade(mainpageData.shift[activeShift][2]);
    sethumanmiss(mainpageData.shift[activeShift][3]);
  }, [mainpageData, activeShift]);

  const [color, setColor] = useState("");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {};

  if (isActive)
    return (
      <>
        <div style="height: 2vh;"></div>
        <div className="pagecontainer">
          <select
            className={"dropdown"}
            value={activeShift}
            onChange={(e) => {
              const shiftIndex = parseInt(
                (e.target as HTMLSelectElement).value,
              );
              setActiveShift(shiftIndex);
              setIsActive(shiftIndex === 0);
              setshotmade(mainpageData.shift[shiftIndex][0]);
              setmisses(mainpageData.shift[shiftIndex][1]);
              sethumanmade(mainpageData.shift[shiftIndex][2]);
              sethumanmiss(mainpageData.shift[shiftIndex][3]);
            }}
          >
            <option value="0" selected>
              Active
            </option>
            <option value="1">Inactive</option>
          </select>

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter2
              name="🤖Robot Score"
              count={shotMade}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][0] > 0) {
                  newData.shift[activeShift][0]--;
                  setmainpageData(newData);
                  setshotmade(newData.shift[activeShift][0]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][0] < 99) {
                  newData.shift[activeShift][0]++;
                  setmainpageData(newData);
                  setshotmade(newData.shift[activeShift][0]);
                  newData.location[currentlocation] =
                    newData.shift[activeShift][0];
                  console.log("update " + newData.shift[activeShift][0]);
                }
              }}
            ></Counter2>
            <Counter2
              name="🤖Robot Missed"
              count={misses}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][1] > 0) {
                  newData.shift[activeShift][1]--;
                  setmainpageData(newData);
                  setmisses(newData.shift[activeShift][1]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][1] < 99) {
                  newData.shift[activeShift][1]++;
                  setmainpageData(newData);
                  setmisses(newData.shift[activeShift][1]);
                }
              }}
            ></Counter2>
          </div>

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter
              name="👱Human Score"
              count={humanmade}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][2] > 0) {
                  newData.shift[activeShift][2]--;
                  setmainpageData(newData);
                  sethumanmade(newData.shift[activeShift][2]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][2] < 99) {
                  newData.shift[activeShift][2]++;
                  setmainpageData(newData);
                  sethumanmade(newData.shift[activeShift][2]);
                }
              }}
            ></Counter>
            <Counter
              name="👱Human Missed"
              count={humanmiss}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][3] > 0) {
                  newData.shift[activeShift][3]--;
                  setmainpageData(newData);
                  sethumanmiss(newData.shift[activeShift][3]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][3] < 99) {
                  newData.shift[activeShift][3]++;
                  setmainpageData(newData);
                  sethumanmiss(newData.shift[activeShift][3]);
                  console.log("update " + JSON.stringify(newData));
                }
              }}
            ></Counter>
          </div>
          <div>
            <div style="height: 5vh;"></div>
            <img
              src={map}
              alt="map"
              style={{ position: "relative", width: "100%", height: "auto" }}
            ></img>
            <StyledToggleButtonGroup
              value={color}
              color="primary"
              exclusive
              style={{ position: "absolute", top: "580px", left: "162px" }}
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                onChange={() => setcurrentlocation(0)}
                style={{
                  height: "200px",
                  width: "60px",
                  backgroundColor:
                    currentlocation === 0 ? "#6b3fe4" : "#e43f3f",
                  opacity: 0.8,
                }}
              ></ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                onChange={() => setcurrentlocation(1)}
                style={{
                  height: "200px",
                  width: "60px",
                  backgroundColor:
                    currentlocation === 1 ? "#6b3fe4" : "#e43f3f",
                  opacity: 0.8,
                }}
              ></ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                onChange={() => setcurrentlocation(2)}
                style={{
                  height: "200px",
                  width: "60px",
                  backgroundColor:
                    currentlocation === 2 ? "#6b3fe4" : "#3f3fe4",
                  opacity: 0.8,
                }}
              ></ToggleButton>
              <ToggleButton
                value="right"
                aria-label="right aligned"
                onChange={() => {
                  setcurrentlocation(3);
                  console.log(currentlocation);
                }}
                style={{
                  height: "200px",
                  width: "60px",
                  backgroundColor:
                    currentlocation === 3 ? "#6b3fe4" : "#3f3fe4",
                  opacity: 0.8,
                }}
              ></ToggleButton>
            </StyledToggleButtonGroup>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div style="height: 2vh;"></div>
        <div className="pagecontainer">
          <select
            className={"dropdown"}
            value={activeShift}
            onChange={(e) => {
              const shiftIndex = parseInt(
                (e.target as HTMLSelectElement).value,
              );
              setActiveShift(shiftIndex);
              setIsActive(shiftIndex === 0);
              setshotmade(mainpageData.shift[shiftIndex][0]);
              setmisses(mainpageData.shift[shiftIndex][1]);
              sethumanmade(mainpageData.shift[shiftIndex][2]);
              sethumanmiss(mainpageData.shift[shiftIndex][3]);
            }}
          >
            <option value="0" selected>
              Active
            </option>
            <option value="1">Inactive</option>
          </select>

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter2
              name="🤖Robot Score"
              count={shotMade}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][0] > 0) {
                  newData.shift[activeShift][0]--;
                  setmainpageData(newData);
                  setshotmade(newData.shift[activeShift][0]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][0] < 99) {
                  newData.shift[activeShift][0]++;
                  setmainpageData(newData);
                  setshotmade(newData.shift[activeShift][0]);
                }
              }}
            ></Counter2>
            <Counter2
              name="🤖Robot Missed"
              count={misses}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][1] > 0) {
                  newData.shift[activeShift][1]--;
                  setmainpageData(newData);
                  setmisses(newData.shift[activeShift][1]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][1] < 99) {
                  newData.shift[activeShift][1]++;
                  setmainpageData(newData);
                  setmisses(newData.shift[activeShift][1]);
                }
              }}
            ></Counter2>
          </div>

          <div style="height: 5vh;"></div>

          <div className="button_container">
            <Counter
              name="👱Human Score"
              count={humanmade}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][2] > 0) {
                  newData.shift[activeShift][2]--;
                  setmainpageData(newData);
                  sethumanmade(newData.shift[activeShift][2]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][2] < 99) {
                  newData.shift[activeShift][2]++;
                  setmainpageData(newData);
                  sethumanmade(newData.shift[activeShift][2]);
                }
              }}
            ></Counter>
            <Counter
              name="👱Human Missed"
              count={humanmiss}
              onButtonDown={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][3] > 0) {
                  newData.shift[activeShift][3]--;
                  setmainpageData(newData);
                  sethumanmiss(newData.shift[activeShift][3]);
                }
              }}
              onButtonUp={() => {
                const newData = { ...mainpageData };
                if (newData.shift[activeShift][3] < 99) {
                  newData.shift[activeShift][3]++;
                  setmainpageData(newData);
                  sethumanmiss(newData.shift[activeShift][3]);
                  console.log("update " + JSON.stringify(newData));
                }
              }}
            ></Counter>
          </div>
          <div>
            <div style={{ position: "relative", height: "5vh" }}></div>
            <img
              src={map}
              alt="map"
              style={{ position: "relative", width: "100%", height: "auto" }}
            ></img>
          </div>
        </div>
      </>
    );
};
export default Shift;
