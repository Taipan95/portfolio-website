import React from 'react';
import Main from './components/main';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
        <div className="demo-big-content">
            <Layout >
                <Header transparent className="header-color" title={"Sakis Evangelou"} scroll>
                    <Navigation>
                        <Link to="/portfolio-website/">Home</Link>
                        <Link to="/portfolio-website/projects">Projects</Link>
                        <Link to="/portfolio-website/resume">Resume</Link>
                    </Navigation>
                </Header>
                <Drawer className="drawer-color" >
                    <Navigation className="navbar-color">
                        <Link to="/portfolio-website/">Home</Link>
                        <Link to="/portfolio-website/projects">Projects</Link>
                        <Link to="/portfolio-website/resume">Resume</Link>
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
