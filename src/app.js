"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = App;
var hooks_1 = require("preact/hooks");
require("./app.css");
var match_tsx_1 = require("./pages/match/match.tsx");
var auton_tsx_1 = require("./pages/match/auton.tsx");
var teleop_tsx_1 = require("./pages/match/teleop.tsx");
var submit_tsx_1 = require("./pages/match/submit.tsx");
var buildInfo_json_1 = require("../buildInfo.json");
var Pagetype;
(function (Pagetype) {
    Pagetype[Pagetype["MATCH"] = 0] = "MATCH";
    Pagetype[Pagetype["AUTON"] = 1] = "AUTON";
    Pagetype[Pagetype["TELEOP"] = 2] = "TELEOP";
    Pagetype[Pagetype["SUBMIT"] = 3] = "SUBMIT";
})(Pagetype || (Pagetype = {}));
function App() {
    var _a = (0, hooks_1.useState)(Pagetype.MATCH), page = _a[0], setPage = _a[1];
    var note = (0, hooks_1.useState)(function () { return "Start Time: ".concat(new Date().toLocaleTimeString('en-US')); })[0];
    return (<>

      <div className="sf-footer-version">
        {"Version ".concat(buildInfo_json_1.default.buildMajor, ".").concat(buildInfo_json_1.default.buildMinor, ".").concat(buildInfo_json_1.default.buildRevision, " ").concat(buildInfo_json_1.default.buildTag)}
      </div>

      <div className="buttons">
        <button className="match" onClick={function () {
            setPage(Pagetype.MATCH);
            console.log("Clicked on Match");
        }}>
          Match
        </button>

        <button className="auton" onClick={function () {
            setPage(Pagetype.AUTON);
            console.log("Clicked on Auton");
        }}>
          Auton
        </button>

        <button className="teleop" onClick={function () {
            setPage(Pagetype.TELEOP);
            console.log("Clicked on Teleop");
        }}>
          TeleOP
        </button>

        <button className="submit" onClick={function () {
            setPage(Pagetype.SUBMIT);
            console.log("Clicked on Submit");
        }}>
          Submit
        </button>
      </div>

      <div style={{ padding: 16 }}>
        <div>{note}</div>
        <div style={{ marginTop: 8 }}>
          {page === Pagetype.MATCH && <match_tsx_1.default />}
          {page === Pagetype.AUTON && <auton_tsx_1.default />}
          {page === Pagetype.TELEOP && <teleop_tsx_1.default />}
          {page === Pagetype.SUBMIT && <submit_tsx_1.default />}
        </div>
      </div>
    </>);
}
