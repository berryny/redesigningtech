import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation
} from "react-router-dom";

import './App.css';
import 'jquery/dist/jquery.js'
import 'popper.js/dist/umd/popper.js'

import NavBar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';

import Project from './components/templates/projectdescription';
import PortfolioData from './json/site_portfolio.json';

function App() {
  return (
    <Router>
      <header className="site-header">
        <NavBar />
      </header>
      <main id="main" role="main" className="flex-shrink-0 mb-5">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            <Home data={PortfolioData} />
          </Route>

          <Route exact={true} path="/redesigningtech">
            <Home data={PortfolioData} />
          </Route>

          <Route exact={true} path="/redesigningtech/about">
            <About state="active"/>
          </Route>

          <Route exact={true} path="/redesigningtech/portfolio">
            <Portfolio data={PortfolioData} />
          </Route>

          <Route exact={true} path="/redesigningtech/resume">
            <Resume />
          </Route>

          <Route exact={true} path="/redesigningtech/contact">
            <Contact />
          </Route>

          <Route exact={true}
            path="/redesigningtech/portfolio/:id"
            render={(props) => {
              let projectName = props.location.pathname.replace('/redesigningtech/portfolio/', '');
              return (
                <Project match={props.match} client={projectName} data={PortfolioData} />
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
