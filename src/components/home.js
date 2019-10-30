import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCode, faChalkboardTeacher, faHandsHelping, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

import profile_img from '../assets/img-Judi.jpg';
import SocialMedia from '../components/socialmedia';
import PortfolioProjects from '../components/templates/portfolioprojects';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div id="home">
        <div className="jumbotron home-jumbotron p-0 text-white bg-dark">
          <div className="cover-jumbotron h-100">
            <div className="container">
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <h1>lets work on something together</h1>
                <p className="lead my-3">Web Developer based in New York City</p>
                <p><Link className="btn btn-default btn-outline-light" to="/resume" role="button">Know More <FontAwesomeIcon icon={faAngleDoubleRight} /></Link></p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <img src={profile_img} alt={"Judi"} className="img-fluid mb-3"/>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8">
              <h2 className="profile_title">Judi Desire</h2>
              <h3 className="h5 profile_subtitle">Web Developer</h3>
                <p>New York City based web developer who saw many businesses and individuals discarding their hardware and software for newer models - well before their time. It dawned on Judith that a more efficient way to view computers was to see why they were not responding - a more costly and efficient method to maximizing a computer's longetivity. Judiths viewpoint was that software and hardware just needed to be reconfigured. She began consulting with individuals and small businesses to help them understand how a computer could last longer and adopted the name Redesigning Technology Corp.</p>
                <SocialMedia />
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light pt-5 pb-5 mt-5 mb-5">
          <section id="section_work">
            <div className="container">
              <div className="col-xs-12 section_content">
                <h2>what i do</h2>
                <p className="lead">Call me a multifaceted person</p>
                <div className="services row justify-content-center">
                    <div className="col-xs-12 col-sm-10 col-md-6 mb-4">
                      <div className="service_wrap p-4 h-100">
                        <span className="service_icon"><FontAwesomeIcon icon={faCode} /></span>
                        <h4>Web Development</h4>
                        <p>Creating websites/a website using standard HTML/CSS practices</p>
                        <p>Working closely with web designers and programmers to produce the website</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-10 col-md-6 mb-4">
                      <div className="service_wrap p-4 h-100">
                        <span className="service_icon"><FontAwesomeIcon icon={faChalkboardTeacher} /></span>
                        <h4>Code Instuctor</h4>
                        <p>Teach programming classes to teens and adults in a classroom setting</p>
                        <p>Deliver high quality curriculum, building relationships with students, helping those with minimal skills and challenging those who are ahead.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-10 col-md-6 mb-4">
                      <div className="service_wrap p-4 h-100">
                        <span className="service_icon"><FontAwesomeIcon icon={faHandsHelping} /></span>
                          <h4>Community Outreach</h4>
                          <p>Market and manage programs and event space, as well as expanding existing community partnerships and representing an organization with the public at large.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-10 col-md-6 mb-4">
                      <div className="service_wrap p-4 h-100">
                        <span className="service_icon"><FontAwesomeIcon icon={faCameraRetro} /></span>
                          <h4>Photoholic</h4>
                          <p>Enjoy stopping and taking pictures of people, places, landscapes, food, you name it.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*Pass in portfolio json*/}
        <PortfolioProjects feed={this.props.data} />

      </div>
    )
  }
}
export default Home;
