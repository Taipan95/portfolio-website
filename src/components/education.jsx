import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
	render() {
		return (
			<Grid style={{ padding: "1em" }}>
				<Cell col={4}>
					<p>
						{this.props.startYear} - {this.props.endYear}
					</p>
				</Cell>
				<Cell
					col={8}
					style={{ paddingRight: "1em", textAlign: "center" }}
				>
					<h4 style={{ marginTop: "0px" }}>
						{this.props.schoolName}
					</h4>
					<p>{this.props.schoolDescription}</p>
				</Cell>
			</Grid>
		);
	}
}

export default Education;
