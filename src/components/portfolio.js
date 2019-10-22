import React, { Component } from 'react';
import PortfolioProjects from '../components/templates/portfolioprojects';
import Data from '../json/site_portfolio.json';

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <section className="jumbotron text-center text-white bg-dark">
          <div className="container">
            <h1 className="jumbotron-heading">Portfolio</h1>
          </div>
        </section>
        <PortfolioProjects feed={Data} />
      </div>
    );
  }
}
console.log('portfolio');

export default Portfolio;
