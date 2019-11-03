import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skill extends Component {
	progressBar = props => {
		if (props > 0) {
			return (
				<ProgressBar
					style={{ margin: "auto", width: "75%" }}
					progress={props}
				/>
			);
		} else {
			return null;
		}
	};
	render() {
		const skill = this.props;
		return (
			<div style={{ display: "flex", padding: "0em 0em 0em 2em" }}>
				<Cell col={2}>
					<h6>{skill.skill}</h6>
				</Cell>
				{this.progressBar(skill.progress)}
			</div>
		);
	}
}

class SkillList extends Component {
	i = 0;
	render() {
		return (
			<Grid>
				<Cell col={12}>
					{this.props.skills.map(skill => (
						<Skill key={this.i++} {...skill} />
					))}
				</Cell>
			</Grid>
		);
	}
}

export default SkillList;
