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
							<h1>Sakis Evangelou</h1>
							<hr />
							<p> Java | JavaScript | ReactJS | Unity </p>
							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/in/sakis-evangelou-37390617a/"
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
									href="https://github.com/Taipan95"
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
