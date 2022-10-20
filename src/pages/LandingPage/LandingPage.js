import React from "react";
// import NavBar from "../../components/NavBar/NavBar";
import './LandingPage.css'
import Playstore from "../../assets/img/playstore.png";
const curryear = new Date().getFullYear();

function LandingPage() {
  return (
    <div id="Home" className="body">
      <div className='homepage'>
        <h1 className="myDIV">O<span className="lite">dikko</span>K<span className="lite">MCT</span></h1>
        <h3>A complete Bus-Pass App for Students</h3>
        <div className='container'>
        <div className='btn'>
        <button><span>Download App Now</span></button>
        </div>
        </div>
        <img alt='techImage' src={Playstore}></img>
        <p>© <span>TripSpark</span>. All Rights Reserved {curryear}</p>
      </div>
     
        {/* <NavBar /> */}
      </div>
     
  );
}
export default LandingPage;