import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import NavBar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

import Project from './components/project';

function App() {
  return (
    <Router>
      <header className="">
        <NavBar />
      </header>
      <main id="main" role="main" className="flex-shrink-0">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About state="active"/>
          </Route>

          <Route exact={true} path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/resume">
            <Resume />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/project/:id" render={(props) => {
              let projectPostion = props.location.pathname.replace('/project/', '');
              return (
                <Project client={projectPostion} />
              );
            }}>

          </Route>

        </Switch>
      </main>
      <footer className="footer mt-auto py-3">
        <Footer />
      </footer>
  </Router>
  );
}

export default App;
