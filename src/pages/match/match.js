"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../app.css");
var Match = function () {
    var handleSubmit = function (event) {
        event.preventDefault();
    };
    return (<>
      <h1>Match Information</h1>
      <form onSubmit={handleSubmit}>  
      <label>Enter Your Name:
        <input type="text" name="name" placeholder={"Ex: John Pork"}/>
      </label>

      <label>Team #:
        <input type="text" name="team" placeholder={"Ex: 5431"}/>
      </label>

      <label>Match #:
        <input type="text" name="match" placeholder={"Ex: 67"}/>
      </label>
      </form>
    </>);
};
exports.default = Match;
