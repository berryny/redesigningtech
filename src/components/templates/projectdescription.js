import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {Carousel} from 'react-bootstrap/Carousel';
import ControlledCarousel from './controlledCarousel';

import PortfolioProjects from '../../components/templates/portfolioprojects';

function ProjectSocialMedia(sm_links) {
  console.log('sm', this, sm_links.sm);
  return sm_links.sm.map((socialmedia, i) => {
    return (
      <li key={i} className="list-inline-item"><a rel="noopener noreferrer" href={socialmedia.link} target="_blank">
        <FontAwesomeIcon icon={socialmedia.icon} size="lg" /></a>
      </li>
    )
  })
}

function ClientProject(){
  let clientName = this.state.client_projects,
    data = this.state.client_data,
    portfolioList = this.state.client_data.portfolio;
    let obj = portfolioList.find(list => list.projectlink === clientName);
    console.log('obj',obj);
    if (obj) {
      return (
        <div id="project">
          <section className="jumbotron text-center text-white bg-dark">
            <div className="container">
              <h1 className="jumbotron-heading">{obj.name}</h1>
              <p>{obj.type}</p>
                <p>{obj.role}</p>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h4>ControlledCarousel</h4>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h4>Project Description</h4>
                <p><strong>Partners:</strong> {obj.projectdescription.partners}</p>
                <p><strong>Skills:</strong> {obj.projectdescription.skills}</p>
                <p>
                  <strong>Site: </strong>
                  <a rel="noopener noreferrer" href="{obj.projectdescription.site}" target="_blank">{obj.name}</a>
                </p>
                <ul className="list-inline"><ProjectSocialMedia sm={obj.projectdescription.socialmedia} /></ul>
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
              <h1 className="jumbotron-heading">Not Found</h1>
              <h3>
                No match for project <code>{clientName}</code>
              </h3>
            </div>
          </section>
          <div className="container-fluid my-4">
            <PortfolioProjects feed={data} />
          </div>
        </div>
      )
    }
}


class Project extends Component {
  constructor(props){
    console.log("this.props Project",props);
    super(props)
    this.state = {
      client_projects: this.props.client,
      client_data: this.props.data
    }
    ClientProject = ClientProject.bind(this);
    ProjectSocialMedia = ProjectSocialMedia.bind(this);
  }
  render() {
    return (
      <div>
        <ClientProject />
      </div>
    )
  }
}
console.log("project details");

export default Project;
