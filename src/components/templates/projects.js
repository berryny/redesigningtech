import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function PortfolioProjects() {
  return (
    <div className="container-fluid bg-light pt-5 pb-5 mt-5 mb-5">
      <section id="portfolio_work">
        <div className="container">
          <div className="col-xs-12 section_content">
            <h2>My Portfolio</h2>
            <div className="portfolio row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                <div className="portfolio_item h-100">
                  <img src={require('../../assets/project-boogieblvd.jpg')} className="img-fluid w-100" alt={"boogieblvd"} />
                    <div className="portfolio_info text-center p-2">
                      <Link className="viewproject" to={`/project/boogieblvd`}>
                        <FontAwesomeIcon icon={faLink} />
                      </Link>
                      <h4>Boogie on the Boulevard</h4>
                      <p>Website / Branding</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                <div className="portfolio_item h-100">
                  <img src={require('../../assets/project-stnicholashouses.jpg')} className="img-fluid w-100" alt={"stnicholashouses"} />
                    <div className="portfolio_info text-center p-2">
                      <Link className="viewproject" to={`/project/stnicholashouses`}>
                        <FontAwesomeIcon icon={faLink} />
                      </Link>
                      <h4>St Nicholas Houses</h4>
                      <p>Website</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                <div className="portfolio_item h-100">
                  <img src={require('../../assets/project-ubbicycleadv.jpg')} className="img-fluid w-100" alt={"ubbicycleadv"} />
                    <div className="portfolio_info text-center p-2">
                      <Link className="viewproject" to={`/project/ubbicycleadv`}>
                        <FontAwesomeIcon icon={faLink} />
                      </Link>
                      <h4>Uptown &amp; Boogie Bicycle</h4>
                      <p>Website / Branding</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                <div className="portfolio_item h-100">
                  <img src={require('../../assets/project-williebgarden.jpg')} className="img-fluid w-100" alt={"williebgarden"} />
                    <div className="portfolio_info text-center p-2">
                      <Link className="viewproject" to={`/project/williebgarden`}>
                        <FontAwesomeIcon icon={faLink} />
                      </Link>
                      <h4>William B. Washington Garden</h4>
                      <p>Branding</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                <div className="portfolio_item h-100">
                  <img src={require('../../assets/project-vaccaroandwhite.jpg')} className="img-fluid" alt={"fpo"} />
                    <div className="portfolio_info text-center p-2">
                      <Link className="viewproject" to={`/project/vaccaroandwhite`}>
                        <FontAwesomeIcon icon={faLink} />
                      </Link>
                      <h4>Law Office of Vaccaro &amp; White</h4>
                      <p>Website</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PortfolioProjects;
