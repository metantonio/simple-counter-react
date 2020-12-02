import { checkPropTypes } from "prop-types";
import React, { Component } from "react";

//import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import "./icons.js";

//creating class Counter
class CounterC extends React.Component {
	constructor(props) {
		super(props);
		//se crea un objeto llamado state de modo que al cambiar react tenga que renderizar nuevamente
		//las clases sólo pueden tener un state, pero puede existi un state.counter o state.status, etc...
		this.state = {
			counter: 0,
			on: true
		};
		//this.temporizador = this.temporizador.bind(this);
	}
	//var cuenta = parseInt(window.prompt("Elija un valor para la cuenta regresiva"));
	//aquí irán funciones y cambios de propiedades
	componentDidMount() {
		setInterval(() => {
			//const four = Math.floor((this.state.counter / 1000) % 10);
			//const three = Math.floor((this.state.counter / 100) % 10);
			//	const two = Math.floor((this.state.counter / 10) % 10);
			//	const one = Math.floor((this.state.counter / 1) % 10);
			//	console.log(four, three, two, one);
			this.setState({
				counter: this.state.counter + 1
			});
			//return one, two, three, four;
		}, 1000);
	}

	//********Iniciador y Finalización del contador */
	initCounter = () => {
		if (this.state.on == false) {
			this.setState({ on: true, counter: this.state.counter + 1 });
		}
	};

	resetCounter = () => {
		if (this.state.on) {
			this.setState({ counter: 0 });
		}
	};

	reverseCounter = () => {
		if (this.state.on) {
			this.setState({ counter: this.state.counter - 1 });
		}
	};

	stopCounter() {
		if (this.state.on) {
			this.setState({ on: false });
			clearInterval(handlde);
			let handlde = 0;
		}
	}
	//************ */

	render() {
		return (
			<React.Fragment>
				<div className="counterClock">
					<div className="clock">
						<i className="far fa-clock" />
					</div>
					<div className="four-digit">
						{Math.floor((this.state.counter / 1000) % 10)}
					</div>
					<div className="three-digit">
						{Math.floor((this.state.counter / 100) % 10)}
					</div>
					<div className="two-digit">
						{Math.floor((this.state.counter / 10) % 10)}
					</div>
					<div className="one-digit">
						{Math.floor((this.state.counter / 1) % 10)}
					</div>
					<div className="row justify-content-center">
						<button
							onClick={this.initCounter}
							className="btn-success">
							{"Iniciar Contador"}
						</button>
						<button
							onClick={this.resetCounter}
							className="btn-warning">
							{"Reiniciar Contador"}
						</button>
						<button
							onClick={this.stopCounter.bind(this)}
							className="btn-danger">
							{"Detener Contador"}
						</button>
						<button
							onClick={this.reverseCounter.bind(this)}
							className="btn-danger">
							{"Cuenta Regresiva"}
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CounterC;
