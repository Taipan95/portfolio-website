import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import SkillList from "./skills";
import Education from "./education";

const skills = [
	{ skill: "Java", progress: 80 },
	{ skill: "HTML / CSS", progress: 80 },
	{ skill: "JavaScript", progress: 60 },
	{ skill: "C#", progress: 60 },
	{ skill: "ReactJS", progress: 40 },
	{ skill: "MS SQL Server", progress: 60 }
];

const otherSkills = [
	{ skill: "Visual Basic", progress: 0 },
	{ skill: "Android Studio", progress: 0 },
	{ skill: "Python", progress: 0 }
];

class Resume extends Component {
	render() {
		return (
			<div className="resume-page">
				<Grid
					style={{
						margin: "2em",
						background: "#6441a5",
						// eslint-disable-next-line
						background:
							"-webkit-linear-gradient(to right, #63159f, #6441a5)",
						// eslint-disable-next-line
						background:
							"linear-gradient(to right, #63159f, #6441a5)",
						borderRadius: "20px",
						color: "white"
					}}
				>
					{/* Left Side */}
					<Cell col={4} className="resume-left-col">
						<div style={{ textAlign: "center" }}>
							<img
								style={{
									height: "200px",
									marginTop: "5em",
									borderRadius: "20px",
									textAlign: "center"
								}}
								src="https://avatars2.githubusercontent.com/u/41122991?s=460&v=4"
								alt="avatar"
							/>
							<h2 style={{ paddingTop: "1em", color: "white" }}>
								Athanasios Evangelou
							</h2>
							<h4 style={{ color: "grey" }}>Graduate Student</h4>
							<hr
								style={{
									borderTop: "3px solid #63159F"
								}}
							/>
							<p
								style={{
									color: "white",
									padding: "1em",
									textAlign: "start"
								}}
							>
								Growing up I fell in love with the Computer
								Science and its countless, endless
								possibilities. I always found myself striving to
								learn, practice and eventually master skills
								such as various programming languages and
								database management tools. Consequently, this
								led me to pursue my studies in the Department of
								Informatics of Athens University of Economics
								and Business. After graduating, I am constantly
								trying to learn new skills and to improve
								myself.
								<br />I firmly believe that I have the passion,
								discipline and ambition to succeed in such a
								demanding area as computer science where I
								desire to achieve and succeed.
							</p>
							<hr
								style={{
									borderTop: "3px solid #63159F"
								}}
							/>
							<h5>Phone:</h5>
							<p>
								0030 694-3164-339 (Greece) <br />
								00357 99-9926212 (Cyprus)
							</p>
							<h5>E-mail:</h5>
							<p>sakis_95@live.com </p>
							<h5>GitHub:</h5>
							<p style={{ color: "white" }}>
								<a href="https://GitHub.com/Taipan95">
									https://GitHub.com/Taipan95
								</a>
							</p>
						</div>
					</Cell>

					{/* Right Side */}
					<Cell col={8} className="resume-right-col">
						<h3>Education:</h3>
						{/* EDUCATION */}
						<Education
							startYear={2011}
							endYear={2013}
							schoolName={"Archbishop Makarios III Lyceum"}
							schoolDescription={""}
						/>

						<hr
							style={{
								borderTop: "3px solid #6440A5",
								marginLeft: "5em",
								width: "80%"
							}}
						/>

						<Education
							startYear={2015}
							endYear={2019}
							schoolName={
								"Athens University of Economics and Business"
							}
							schoolDescription={"Department of Informatics"}
						/>
						<hr
							style={{
								borderTop: "3px solid #6441A5",
								width: "100%"
							}}
						/>
						<h3>Military Service:</h3>
						<Education
							startYear={2013}
							endYear={2015}
							schoolName={"Cypriot National Guard"}
							schoolDescription={""}
						/>

						<hr
							style={{
								borderTop: "3px solid #6441A5",
								width: "100%"
							}}
						/>

						<h3 style={{ display: "none", padding: "1em" }}>
							Experience:
						</h3>
						<hr
							style={{
								borderTop: "3px solid #6440A5",
								display: "none"
							}}
						/>
						<h3>Skills:</h3>
						{/* SKILLS */}
						<SkillList style={{ padding: "1em" }} skills={skills} />
						<hr
							style={{
								borderTop: "3px solid #6440A5",
								width: "100%"
							}}
						/>
						<h3>Other Skills:</h3>
						<SkillList
							style={{ padding: "1em" }}
							skills={otherSkills}
						/>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
