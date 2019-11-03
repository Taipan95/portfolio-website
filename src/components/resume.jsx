import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import SkillList from "./skills";
import Education from "./education";
import GoalList from "./goals";

const skills = [
	{ skill: "Java", progress: 80 },
	{ skill: "HTML / CSS", progress: 80 },
	{ skill: "JavaScript", progress: 60 },
	{ skill: "C#", progress: 60 },
	{ skill: "MS SQL Server", progress: 60 },
	{ skill: "ReactJS", progress: 50 }
];

const otherSkills = [
	{ skill: "Visual Basic", progress: 0 },
	{ skill: "Android Studio", progress: 0 },
	{ skill: "Python", progress: 0 }
];

const goalsSkills = [
	{ goal: "Xamarin" },
	{ goal: "MongoDB" },
	{ goal: "Angular" }
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
					<Cell
						col={4}
						phone={6}
						tablet={8}
						className="resume-left-col"
					>
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
							<h4 style={{ color: "grey" }}>
								Junior Full Stack Developer
							</h4>
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
								Growing up I fell in love with what the world of
								Computer Science has to offer, with a few lines
								of code and a lot of dedication almost anything
								is possible.
								<br /> I always found myself striving to learn,
								and continuously improve my skills, as well as
								setting new goals for myself.
								<br />
								I recently became fascinated by Web Programming
								and Front End Development in general. I see it
								as a way to express my creativity, as well as a
								way to directly demonstrate my skills and
								capabilities both as a programmer and as a
								designer.
								<br />
							</p>
							<h5
								style={{
									textAlign: "left",
									paddingLeft: "1em"
								}}
							>
								Goals:
							</h5>
							<GoalList
								style={{ paddingLeft: "1em" }}
								goals={goalsSkills}
							/>
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
								<a href="https://github.com/Taipan95">
									https://GitHub.com/Taipan95
								</a>
							</p>
						</div>
					</Cell>

					{/* Right Side */}
					<Cell
						col={8}
						phone={6}
						tablet={8}
						className="resume-right-col"
					>
						{/* Education section */}
						<>
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
						</>
						<hr
							style={{
								borderTop: "3px solid #6441A5",
								width: "100%"
							}}
						/>

						{/*Experience section*/}
						<>
							<h3 style={{ display: "none", padding: "1em" }}>
								Experience:
							</h3>
							<hr
								style={{
									borderTop: "3px solid #6440A5",
									display: "none"
								}}
							/>
						</>

						{/* Skills Section */}
						<>
							<h3>Skills:</h3>
							{/* Programming skills */}
							<h4>Programming Skills:</h4>
							<SkillList skills={skills} />
							<hr
								style={{
									borderTop: "3px solid #6440A5",
									marginLeft: "5em",
									width: "80%"
								}}
							/>
							<h4>Other Skills:</h4>
							<SkillList
								style={{ paddingLeft: "1em" }}
								skills={otherSkills}
							/>
						</>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
