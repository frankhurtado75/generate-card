import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import { NewHome } from "./NewHome.js";
import { Card } from "./Card";

//create your first component
export function Home() {
	//const [nombreDelEstado, setNombreDelEstado] = useState(valorInicialDelEstado)
	const [people, setPeople] = useState([]);
	const [corporation, setCorporation] = useState("");
	const [name, setName] = useState("");
	const [fondo, setFondo] = useState("");
	const [job, setJob] = useState("");
	return (
		<div className="row">
			<label htmlFor="corporation">{"Work:"}</label>
			<input
				type="text"
				name="corporation"
				onChange={event => {
					setCorporation(event.target.value);
				}}
				value={corporation}
			/>
			<label htmlFor="name">{"Name:"}</label>
			<input
				type="text"
				name="name"
				onChange={event => {
					setName(event.target.value);
				}}
				value={name}
			/>
			<label htmlFor="fondo">{"Background:"}</label>
			<input
				type="text"
				name="fondo"
				onChange={event => {
					setFondo(event.target.value);
				}}
				value={fondo}
			/>
			<label htmlFor="job">{"Job:"}</label>
			<input
				type="text"
				name="job"
				onChange={event => {
					setJob(event.target.value);
				}}
				value={job}
			/>

			<button
				className="btn btn-primary"
				onClick={e => {
					//Hay que actualizar el estado people con los valores de los estados
					let person = {
						corporation: corporation,
						name: name,
						fondo: fondo,
						job: job
					};
					setPeople([person]);
				}}>
				{"Add Card"}
			</button>

			{people.map((person, index) => {
				//Renderiza Card para persona con nombre, fondo y job
				return (
					<Card
						key={index}
						corporation={person.corporation}
						name={person.name}
						fondo={person.fondo}
						job={person.job}
					/>
				);
			})}
		</div>
	);
}
