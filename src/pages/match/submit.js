"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../app.css");
var Submit = function () {
    var handleSubmit = function (event) {
        event.preventDefault();
    };
    return (<>
      <h1>Submit</h1>
      
      <form onSubmit={handleSubmit}>  
      <label>Red Points:
        <input type="text" name="red" placeholder={"Ex: 57"}/>
      </label>

      <label>Blue Points:
        <input type="text" name="blue" placeholder={"Ex: 90"}/>
      </label>

      <label>Penalties:
        <input type="text" name="penalties" placeholder={"Ex: 296"}/>
      </label>

      <label>Ranking Points:
        <input type="text" name="ranking" placeholder={"Ex: 6"}/>
      </label>

      </form>
    </>);
};
exports.default = Submit;
