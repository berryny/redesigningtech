import React, { Component } from 'react';
import SocialMedia from '../components/socialmedia';

class About extends Component {

  render() {
    return (
      <div id="about">
        <section className="jumbotron about-jumbotron p-0 text-white text-right bg-dark">
          <div className="cover-jumbotron h-100">
            <div className="container">
            <h1 className="jumbotron-heading">Hello,</h1>
            <h2>I am Judi Desire</h2>
            <p className="lead ml-4">Coder, Community Outreach and Photoholic</p>
            <SocialMedia />
          </div>
          </div>
        </section>
        <div className="about-me py-5">
          <div className="container">
          <h2>Who am I?</h2>
          <p>As an accomplished and skilled professional with 10+ years of Web Developer experience, as well as a Coding Instructor for youth and adult training programs, I am confident in my ability to significantly contribute to the success of your school’s objectives for this position. My experience includes instructing individuals in gaining insight to the process of prototyping and wireframing using HTML, CSS, Javascript, Bootstrap, Adobe XD, build standalone and Wordpress portfolio site and speaking the lingo.</p>

          <h2>About Redesigning Technology Corporation</h2>
          <p>Judith founded Redesigning Technology Corporation in 1999. As the computer industry was rapidly changing, she saw many businesses and individuals discarding their hardware and software for newer models - well before their time. It dawned on Judith that a more efficient way to view computers was to see why they were not responding - a more costly and efficient method to maximizing a computer's longetivity. Judith's viewpoint was that software and hardware just needed to be reconfigured. She began consulting with individuals and small businesses to help them understand how a computer could last longer and adopted the name Redesigning Technology Corp.</p>

          <h2>The Vision</h2>
          <p>I understand your business is different and it needs to stand apart from the rest. Therefore, I will learn your company's strategy and coordinate a technology plan that is aligned with the project goals.</p>

          <h2>Consultation</h2>
          <p>If you are a recruiter or direct hire, please click the below links to learn more about and if the job description matches the position requirements. Thank you!</p>
          <p>For additional information on consulting, please contact via email at <a rel="noopener noreferrer" href="mailto:info@redesigningtech.com" target="_blank">info@redesigningtech.com</a>.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
