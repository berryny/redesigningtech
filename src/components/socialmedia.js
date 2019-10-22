import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';

//free-solid-svg-icons', '@fortawesome/free-brands-svg-icons', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons';

class SocialMedia extends Component {

render() {
  return (
    <div id="social-links">
      <ul className="social-media list-inline">
        <li className="list-inline-item">
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/jdesire/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </li>
        <li className="list-inline-item">
          <a rel="noopener noreferrer" href="https://github.com/berryny/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
        <li className="list-inline-item">
          <Link to="/resume"><FontAwesomeIcon icon={faFilePdf} /></Link>
        </li>
        <li className="list-inline-item">
          <a rel="noopener noreferrer" href="mailto:info@redesigningtech.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
        </li>
      </ul>
    </div>
  );
}
}

export default SocialMedia;
