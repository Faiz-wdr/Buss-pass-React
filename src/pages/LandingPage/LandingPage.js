import React from "react";
// import NavBar from "../../components/NavBar/NavBar";
import './LandingPage.css'

const curryear = new Date().getFullYear();

function LandingPage() {
  return (
    <div id="Home" className="body">
      <div className='homepage'>
        <h1>O<span className="lite">dikko</span>K<span className="lite">MCT</span></h1>
        <h3>A complete Bus-Pass App for Students</h3>
        <div className='container'>
        <div className='btn'>
        <button><span>Download App Now</span></button>
        </div>
        </div>
        <p>© <span>TripSpark</span>. All Rights Reserved {curryear}</p>
      </div>
     
        {/* <NavBar /> */}
      </div>
     
  );
}
export default LandingPage;