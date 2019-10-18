import React from 'react';
import Main from './components/main';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Sakis Evangelou" scroll>
            <Navigation>
                <Link to="/portfolio-website/resume">Resume</Link>
                <Link to="/portfolio-website/aboutme">About Me</Link>
                <Link to="/portfolio-website/projects">Projects</Link>
                <Link to="/portfolio-website/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/portfolio-website/resume">Resume</Link>
                <Link to="/portfolio-website/aboutme">About Me</Link>
                <Link to="/portfolio-website/projects">Projects</Link>
                <Link to="/portfolio-website/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
