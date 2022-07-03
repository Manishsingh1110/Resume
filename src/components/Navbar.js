
import { useState } from 'react';
// import './css/navbar.css'
export default function Navbar() {
  const [na,setna]=useState(false);
  const tirg=()=>{
    if(window.scrollY >=180){
     setna(true);
    }
    else{
      setna(false);
    }
  };
   window.addEventListener('scroll',tirg);
    return (
    <header className="navbar-fixed-top">
      <nav className={na ? 'navbar active navbar-expand-lg navbar-fixed-top' : 'navbar navbar-expand-lg'}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src='images/mlogo.png'alt="/" className="img-fluid hh-50"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#projects">projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}