import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div
			className={"card " + "mx-auto my-4"}
			style={{
				width: "18rem",
				backgroundColor: props.fondo,
				color: "white"
			}}>
			<div className="card-header">{props.corporation}</div>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<a href="#" className="btn btn-light">
					{props.job}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	corporation: PropTypes.string,
	name: PropTypes.string,
	fondo: PropTypes.string,
	job: PropTypes.string
};
