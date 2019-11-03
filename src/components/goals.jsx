import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Goal extends Component {
	render() {
		const goal = this.props;
		return (
			<Cell>
				<h6 style={{ margin: "0" }}>{goal.goal}</h6>
			</Cell>
		);
	}
}

class GoalList extends Component {
	i = 0;
	render() {
		return (
			<Grid style={{ padding: "0 0 0 1em", margin: "0" }}>
				{this.props.goals.map(goal => (
					<Goal key={this.i++} {...goal} />
				))}
			</Grid>
		);
	}
}

export default GoalList;
