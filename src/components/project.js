import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Carousel} from 'react-bootstrap/Carousel';

import Data from '../json/site_portfolio.json';
import ControlledCarousel from '../components/templates/controlledCarousel';

function projectMapping(data, c){
  return data.portfolio.map(function(details,index) {
    console.log("details,index",details,index);
    if (details.hasOwnProperty(c)) {
      let projectdetail = details[c]
      const listDescription = projectdetail.projectdescription.description.map((postion, i) =>
        <p key={i}>{postion}</p>
      );

      const listSocialLinks =  projectdetail.projectdescription.socialmedia.map((socialmedia, i) =>
        <li key={i}><a rel="noopener noreferrer" href={socialmedia.link} target="_blank"><FontAwesomeIcon icon={socialmedia.icon} />{socialmedia.icon}</a></li>
      );

/*
      const listProjectImagesIdx =  projectdetail.images.map((socialmedia, i) =>
        <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i}></li>
      );

      const listProjectImages = projectdetail.images.map(function (pimg, i) {
        console.log("pimg, i", pimg.img, i)
        return (
          <div class="carousel-item" key={i}>
            <img src={require('../assets/project-boogieblvd.jpg')} class="d-block w-100" alt={pimg.alt} />
          </div>
        );
      })
*/
      return (
        <div id="project" key={index}>
          <section className="jumbotron text-center text-white bg-dark">
            <div className="container">
              <h1 className="jumbotron-heading">{projectdetail.name}</h1>
              <p>{projectdetail.type}</p>
                <p>{projectdetail.role}</p>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <ControlledCarousel />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h4>Project Description</h4>
                {listDescription}
                <p><strong>Partners:</strong> {projectdetail.projectdescription.partners}</p>
                <p><strong>Skills:</strong> {projectdetail.projectdescription.skills}</p>
                <p><strong>Site:</strong> <a rel="noopener noreferrer" href="{projectdetail.projectdescription.site}" target="_blank">{projectdetail.name}</a></p>
                <ul>
                  {listSocialLinks}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="project">
          <section className="jumbotron text-center text-white bg-dark">
            <div className="container">
              <h1 className="jumbotron-heading">{data.name}</h1>
            </div>
          </section>
        </div>
      );
    }
  });


}

function Project(project) {
  console.log("project",project, project.client);
  let client = project.client;
  return (
      projectMapping(Data, client)
  )

}
console.log("project details");

export default Project;
