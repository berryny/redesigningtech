import React from 'react';
import { Link } from "react-router-dom";

import SocialMedia from '../components/socialmedia';
import Data from '../json/site_resume.json';

function leadershipMapping(data) {
  return data.resume.leadership_experience.jobroles.map(function(role,index) {
    const role_description = role.description;
    const listItems = role_description.map((postion, i) =>
      <li key={i}>{postion}</li>
    );
      return (
          <div key={index}>
            <h3 className="lead">{role.title} | {role.company} | {role.location} </h3>
              <ul>{listItems}</ul>
          </div>
      )
  } )

}

function workMapping(data) {
  return data.resume.work_experience.jobroles.map(function(role, index) {

    const role_companies = role.companies;
    const listItems = role_companies.map((postion, i) =>
      (<div key={i} className="companies">
        <h3 className="lead">{postion.title} | {postion.company} | {postion.location} </h3>
        <p><strong>Project:</strong> {postion.projects}</p>
        <p>{postion.jobdescription}</p>
      </div>)
    );

    return (
      <div key={index}>
        {listItems}
      </div>
    )
  })
}
function Resume() {
  document.title = 'Judi Desire Resume';

  return (
    <div id="resume">
      <section className="jumbotron text-center bg-dark text-white">
        <div className="container">
          <h1 className="jumbotron-heading">{Data.name}</h1>
          {Data.lead}
          <SocialMedia />
        </div>
      </section>
      <div className="resume py-5">
        <div className="container">
          <div id={Data.resume.leadership_experience.id}>
            <h2>{Data.resume.leadership_experience.section}</h2>
            {leadershipMapping(Data)}
          </div>
          <div id="work_experience">
            <h2>{Data.resume.work_experience.section}</h2>
            {workMapping(Data)}
          </div>
          <div id={Data.resume.technology.id}>
            <h2>{Data.resume.technology.section}</h2>
            <p>{Data.resume.technology.skills}</p>
          </div>
          <div id={Data.resume.education.id}>
            <h2>{Data.resume.education.section}</h2>
            <p><strong>{Data.resume.education.degree}</strong><br />{Data.resume.education.school} | {Data.resume.education.location}</p>
          </div>
        </div>
        <div id="download-resume">
		        <p className="text-center"><Link className="btn btn-default btn-outline-dark" to={Data.download_link} role="button" target="_blank" download>Download Resume</Link></p>
	     </div>
      </div>
    </div>
  );
}

console.log('resume');

export default Resume;
