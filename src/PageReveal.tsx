// Uses match.css for styling
import type { FunctionalComponent } from "preact";
import "./PageReveal.css";

const PageReveal: FunctionalComponent = () => {

  
  return (
    <>
    <div className="cover" />
     <div className="underneath" />
     <div className="outline" />
     <div className="text-overlay">Scouting App </div>
      
    </>
  );
};

export default PageReveal;