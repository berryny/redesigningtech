import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SocialMedia from '../components/socialmedia';

class Footer extends Component {

  render() {
    return (
      <div className="container text-center text-white">
        <p>&copy; 2019 All rights reserved. / Author: <Link to="/redesigningtech/about">Judith Desire</Link></p>
        <SocialMedia />
      </div>
    )
  }
}
export default Footer;
