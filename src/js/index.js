//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
//import { Card } from "./component/card.js";
//import Timer from "./component/Timer";
//import { Counter } from "./component/counter"; //Counter as function
import CounterC from "./component/counterClass"; //Counter as Class

//render your react application
ReactDOM.render(<CounterC />, document.querySelector("#app"));
