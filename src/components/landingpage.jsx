import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://avatars2.githubusercontent.com/u/41122991?s=460&v=4"
							alt="Avatar"
							className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Chimi chimi changas</h1>
							<hr />
							<p> Maybe | things | will | work | now? </p>
							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="https://www.google.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<i
										className="fa fa-linkedin-square"
										aria-hidden="true"
									/>
								</a>
								{/* GitHub */}
								<a
									href="https://www.google.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<i
										className="fa fa-github-square"
										aria-hidden="true"
									/>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
