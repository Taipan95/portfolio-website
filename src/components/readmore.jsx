import React, { Component } from "react";

class ReadMore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			truncLimit: 100
		};
	}

	expandText = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	readMoreText = () => {
		const text = this.props.text;
		if (text.length > this.state.truncLimit) {
			if (!this.state.expanded) {
				return (
					<div>
						{text.substring(0, this.state.truncLimit)}
						<br />
						{/* eslint-disable-next-line */}
						<a
							style={{
								textDecoration: "underline",
								color: "blue"
							}}
							onClick={this.expandText}
						>
							Read More
						</a>
					</div>
				);
			} else return <div>{text}</div>;
		} else return <div>{text}</div>;
	};

	render() {
		return this.readMoreText();
	}
}

export default ReadMore;
