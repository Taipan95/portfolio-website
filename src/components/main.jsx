import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => (
	<Switch>
		<Route exact path="/portfolio-website/" component={LandingPage} />
		<Route path="/portfolio-website/projects" component={Projects} />
		<Route path="/portfolio-website/resume" component={Resume} />
	</Switch>
);

export default Main;
