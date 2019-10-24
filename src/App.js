import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation
} from "react-router-dom";

import './App.css';

import NavBar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

import Project from './components/templates/projectdescription';

function App() {
  return (
    // <HashRouter basename="/">
    <Router>
      <header className="">
        <NavBar />
      </header>
      <main id="main" role="main" className="flex-shrink-0">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route exact={true} path="/redesigningtech">
            <Home />
          </Route>

          <Route exact={true} path="/about">
            <About state="active"/>
          </Route>

          <Route exact={true} path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact={true} path="/resume">
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
          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </main>
      <footer className="footer mt-auto py-3">
        <Footer />
      </footer>
  </Router>
  // </HashRouter>
  );
}

export default App;

function NoMatch() {
  let location = useLocation();

  return (
    <div id="portfolio">
      <section className="jumbotron text-center text-white bg-dark">
        <div className="container">
          <h1 className="jumbotron-heading">404 Error</h1>
        </div>
      </section>
      <div className="container my-4">
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    </div>
  );
}
