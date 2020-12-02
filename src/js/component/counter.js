import { checkPropTypes } from "prop-types";
import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import "./icons.js";

//aquí irán funciones y cambios de propiedades
let counter = 0;

setInterval(() => {
	const four = Math.floor((counter / 1000) % 10);
	const three = Math.floor((counter / 100) % 10);
	const two = Math.floor((counter / 10) % 10);
	const one = Math.floor((counter / 1) % 10);
	console.log(four, three, two, one);
	counter++;
}, 1000);

Counter.protoTypes = {
	digitFour: checkPropTypes.number,
	digitThree: checkPropTypes.number,
	digitTwo: checkPropTypes.number,
	digitOne: checkPropTypes.number
};

//creating function Counter
export function Counter() {
	return (
		<div>
			<div className="counterClock">
				<div className="clock">
					<i className="far fa-clock" />
				</div>
				<div className="four-digit">{props.digitFour}</div>
				<div className="three-digit">{props.digitThree}</div>
				<div className="two-digit">{props.digitTwo}</div>
				<div className="one-digit">{props.digitOne}</div>
			</div>
		</div>
	);
}
