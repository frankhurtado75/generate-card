import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export class NewHome extends React.Component {
	render() {
		return (
			<div className="text-center mt-5 col">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-primary">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		);
	}
}
