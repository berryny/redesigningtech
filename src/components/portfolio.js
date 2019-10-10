import React from 'react';
import PortfolioProjects from '../components/templates/projects';

function Portfolio() {
  return (
    <div id="portfolio">
      <section className="jumbotron text-center text-white bg-dark">
        <div className="container">
          <h1 className="jumbotron-heading">Portfolio</h1>
        </div>
      </section>
      <PortfolioProjects />
    </div>
  );
}
console.log('portfolio');

export default Portfolio;
