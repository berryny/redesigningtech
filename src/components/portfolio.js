import React, { Component } from 'react';
import PortfolioProjects from '../components/templates/portfolioprojects';

class Portfolio extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id="portfolio">
        <section className="jumbotron text-center text-white bg-dark">
          <div className="container">
            <h1 className="jumbotron-heading">Portfolio</h1>
          </div>
        </section>
        <PortfolioProjects feed={this.props.data} />
      </div>
    );
  }
}
console.log('portfolio');

export default Portfolio;
