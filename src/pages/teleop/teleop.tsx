import "../../app.css";
import type { FunctionalComponent } from "preact";

export interface MainpageProps {
  mainpageData?: { [key: string]: any };
  setmainpageData?: (v: { [key: string]: any }) => void;
}

const Teleop: FunctionalComponent<MainpageProps> = () => {
  return <></>;
};

export default Teleop;
