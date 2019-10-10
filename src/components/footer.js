import React from 'react';
import { Link } from "react-router-dom";
import SocialMedia from '../components/socialmedia';

function Footer() {
  return (
    <div className="container text-center text-white">
      <p>&copy; 2019 All rights reserved. / Author: <Link to="/about">Judith Desire</Link></p>
      <SocialMedia />
    </div>
  )

}
export default Footer;
