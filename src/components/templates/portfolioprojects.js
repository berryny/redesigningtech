import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class PortfolioProjects extends Component {
  constructor(props){
    console.log("this.props.",props);
    super(props)
    this.state = {
      portfolio_feed: this.props.feed,
      portfolio_projects: this.props.feed.portfolio
    }
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }
  // Import all images in image folder
  //<img src={require('../../assets/project-boogieblvd.jpg')} className="img-fluid w-100" alt={"boogieblvd"} />

  renderPortfolio() {
    console.log('this.state.portfolio_projects',this.state.portfolio_projects);
    console.log("process.env.",process.env);
    return this.state.portfolio_projects.map((pdata, i) => (
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4" key={i}>
        <div className="portfolio_item h-100">
          <img src={process.env.PUBLIC_URL + '../../'+pdata.thumbnail.img} className="img-fluid w-100" alt={pdata.thumbnail.alt} />
          <div className="portfolio_info text-center p-2">
            <Link className="viewproject" to={`/project/`+pdata.projectlink}>
              <FontAwesomeIcon icon={faLink} />
            </Link>
            <h4>{pdata.name}</h4>
            <p>{pdata.type}</p>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div className="container-fluid bg-light pt-5 pb-5 mt-5 mb-5">
        <section id="portfolio_work">
          <div className="container">
            <div className="col-xs-12 section_content">
              <h2>My Portfolio</h2>
              <div className="portfolio row justify-content-center">
                {this.renderPortfolio()}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
console.log('PortfolioProjects');

export default PortfolioProjects;
