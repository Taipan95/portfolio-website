import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories = () => {
		switch (this.state.activeTab) {
			case 0:
				return (
					<div>
						<h1>This is React</h1>
					</div>
				);
			case 1:
				return (
					<div>
						<h1>This is JavaScript</h1>
					</div>
				);
			case 2:
				return (
					<div>
						<h1>This is Java</h1>
					</div>
				);
			case 3:
				return (
					<div>
						<h1>This is OpenGL</h1>
					</div>
				);
			case 4:
				return (
					<div>
						<h1>This is Unity</h1>
					</div>
				);
			default:
				break;
		}
		if (this.state.activeTab === 0) {
		}
	};

	render() {
		return (
			<div className="category-tabs">
				<Tabs
					activeTab={this.state.activeTab}
					onChange={tabId => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab>React</Tab>
					<Tab>JavaScript</Tab>
					<Tab>Java</Tab>
					<Tab>OpenGL</Tab>
					<Tab>Unity</Tab>
				</Tabs>

				<section className="projects-grid">
					{this.toggleCategories()}
				</section>
			</div>
		);
	}
}

export default Projects;
