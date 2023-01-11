import React from 'react'
import { useLocation } from 'react-router-dom';
import { authLocations } from '../../router/fws-path-locations'

const HomeHeader = () => {
    const location = useLocation();
    console.log("an",location);
    
  return (
    <>
    <header id="header" className="d-flex align-items-center fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
  
        <h1 className="logo"><a href="index.html">BizLand<span>.</span></a></h1>
       
  
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className={`nav-link scrollto ${location.hash ==''&& location.pathname == '/' && 'active'}`} href="/">Home</a></li>
            <li><a className={`nav-link scrollto ${location.hash =='#about'&& 'active'}`} href="#about">About</a></li>
            <li><a className={`nav-link scrollto ${location.hash =='#services'&& 'active'}`} href="#services">Services</a></li>
            <li><a className={`nav-link scrollto ${location.hash =='#portfolio'&& 'active'}`}  href="#portfolio">Portfolio</a></li>
            {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
            <li><a className={`nav-link scrollto ${location.hash =='#contact'&& 'active'}`}  href="#contact">Contact</a></li>
            <li><a className={`nav-link scrollto ${location.pathname == authLocations.login && 'active'}`}  href={authLocations.login}>Login</a></li>
            {/* <li className="dropdown"{` ${location.pathname == authLocations.login && 'active'}`} ><a ><span>Dropdown</span> 
            <i className="bi bi-chevron-down"></i> */}
            {/* </a> */}
              {/* <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul> */}
            {/* </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
      </div>
    </header>
    </>
  )
}

export default HomeHeader