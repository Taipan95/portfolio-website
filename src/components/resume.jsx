import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

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
						className="resume-left-col"
						style={{
							background: "#292B2C",
							// eslint-disable-next-line
							background:
								"-webkit-linear-gradient(to top, #414345, #292B2C)",
							// eslint-disable-next-line
							background:
								"linear-gradient(to top, #414345, #292B2C)",
							borderRadius: "20px"
						}}
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
							<h4 style={{ color: "grey" }}>Graduate Student</h4>
							<hr
								style={{
									borderTop: "3px solid #833fb2"
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
								desire to achieve and succeed
							</p>
							<hr
								style={{
									borderTop: "3px solid #833fb2"
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
					<Cell
						col={8}
						className="resume-right-col"
						style={{
							background: "#292B2C",
							// eslint-disable-next-line
							background:
								"-webkit-linear-gradient(to top, #414345, #292B2C)",
							// eslint-disable-next-line
							background:
								"linear-gradient(to top, #414345, #292B2C)",
							borderRadius: "20px"
						}}
					>
						<p style={{ margin: "1em" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Aliquam diam mi, efficitur non metus a,
							sodales sodales lacus. Cras quam nunc, ullamcorper
							non posuere id, aliquam non erat. Aenean porttitor
							viverra iaculis. Mauris condimentum tincidunt libero
							non rhoncus. Morbi eu sodales nunc, vitae pharetra
							neque. Suspendisse eu sagittis neque, id accumsan
							sem. Donec dictum et nisl vel dapibus. Aliquam
							feugiat euismod finibus. Donec venenatis in elit a
							mattis. Quisque vitae fringilla lectus, vel
							pellentesque enim. Phasellus vel vulputate ipsum.
							Sed venenatis tempus urna, vitae vestibulum metus
							rutrum a. Donec et iaculis ex, id bibendum nibh. In
							maximus lorem id gravida euismod. Suspendisse
							vehicula mauris nec tellus accumsan, id vulputate
							velit dapibus. Mauris efficitur congue enim in
							laoreet. Nulla quis sagittis nibh. Vivamus nec
							libero pretium, rutrum nisl id, convallis elit.
							Praesent pulvinar venenatis leo, et sollicitudin leo
							consequat id. Maecenas aliquam finibus porta. Mauris
							sagittis mattis dui rutrum ultricies. Sed id euismod
							leo, sed malesuada lectus. Donec cursus, sem aliquet
							finibus ultricies, quam lacus faucibus ligula, quis
							vehicula ipsum odio a magna. In in risus id mi
							facilisis rhoncus. Orci varius natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus
							mus. Nam quis lacus in est placerat commodo vel quis
							felis. Maecenas fringilla commodo massa, sit amet
							blandit tellus faucibus sed. Suspendisse hendrerit
							neque lectus, id porttitor risus pretium eu.
							Praesent sed eros at sem tempus condimentum
							venenatis eu metus. Curabitur vel nisi tristique,
							facilisis ligula id, egestas metus. Proin efficitur
							lectus est, sed pellentesque lorem pretium sed.
							Praesent et lacinia diam. Donec non vestibulum
							dolor. Donec blandit erat non ligula sagittis
							placerat ac nec nunc. Donec eget mattis tellus,
							ultrices mattis nibh. Nam commodo nulla eros, id
							dignissim est tristique at. Vestibulum ante ipsum
							primis in faucibus orci luctus et ultrices posuere
							cubilia Curae; Maecenas et ligula ut nisl malesuada
							venenatis efficitur eu leo. Quisque pellentesque
							ante id ex pharetra, nec sollicitudin tellus
							tincidunt. Vestibulum mollis orci ante, et
							consectetur nulla lobortis eu. Cras at egestas
							libero. Morbi placerat leo id eros dignissim, sit
							amet ullamcorper nulla scelerisque. Donec gravida
							arcu lacus, id blandit massa ultricies vel. Quisque
							ac ornare mauris. Sed interdum vulputate dui vel
							accumsan. In mauris neque, cursus quis felis nec,
							tristique vulputate metus. Vestibulum at nibh eu
							nunc blandit bibendum sit amet eu augue. Phasellus
							et sem risus. Nam commodo pellentesque mollis.
							Maecenas eu sapien eget ante auctor vulputate
							dapibus a ipsum. Mauris vitae porttitor mi. In
							scelerisque magna sapien, a interdum mi scelerisque
							eu. Nullam imperdiet urna massa, id efficitur neque
							fringilla in. Sed id enim ornare, elementum metus
							vel, lacinia risus. Integer justo dui, congue vel
							nibh non, cursus auctor turpis. Pellentesque
							volutpat ac nunc aliquam finibus. Curabitur laoreet
							tempus mauris, sed lobortis sapien dictum non.
						</p>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
