import React, { Component } from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import logo from '../assets/rtc-logo.gif';
import Menu from '../json/nav_menu.json';

function RenderNav(data){
  return data.nav.page.map((menu,m) => {
    return (
      <MenuLink key={m} to={menu.path} label={menu.label} num={m} />
    )
  })
}
function MenuLink({label, to, num}) {
  let match = useRouteMatch({
    path: to,
    // exact: true
  });
  return (
    <li key={num} className={match ? "nav-item active "+ label.toLowerCase() : "nav-item "+ label.toLowerCase() }>
      <Link className="nav-link" to={to}>{label}</Link>
    </li>
  );
}

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#rtc-navbarToggler" aria-controls="rtc-navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="rtc-navbarToggler">
          <ul className="navbar-nav">
            <RenderNav nav={Menu} />
          </ul>
        </div>
    </nav>
    )
  }
}
export default NavBar;
