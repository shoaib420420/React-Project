import React from 'react'
import { useState } from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../components/Footer';
import sampleImage1 from '../images/hero_1.jpg';
import Slider from '../components/Slider';



const About = () => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    width: '200px',
    height: '60px',
    border: '2px solid black',
    transition: '0.3s ease',
    cursor: 'pointer',
    backgroundColor: hover ? 'skyblue' : '',
    color: hover ? 'white' : 'black',
    margin: '0 auto',
    marginTop: '50px',
    paddingTop: '15px'
  };
  return (
    <>
      <div className='about'>
        <div className='d-flex justify-content-center align-items-center text-center'>
          <h1 className='fw-bold text-white' style={{ fontSize: '50px', marginTop: '10rem' }}>About Us</h1>
        </div><br />
        <div className="text-center text-black">
          <p>
            A free Template by
            <a
              href='https://www.istockphoto.com/photo/downtown-fernandina-beach-amelia-island-florida-gm2196976202-614962764?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbannerNone_media&utm_term=business+shop'
              style={{ textDecoration: 'none', marginLeft: '5px', color: 'skyblue' }}
              target="_blank"
              rel="noreferrer"
            >
              BusinessShop
            </a>
            . Download and share.
          </p>
        </div>
      </div>

      <div className="container21 my-5 py-5 px-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 ">
            <img
              src={sampleImage1}
              alt="Example"
              className="img-fluid"
            />
          </div>
          <div className="heading21 col-md-5 px-5">
            <h1 className=" mb-3 ">Welcome Travel & Tours!</h1>
            <p className="mb-4">
              We provide tailored solutions, leveraging expertise and innovation Lorem ipsum dolor sit amet, consectetur adipisicing.to drive client success and sustainable growth in a competitive market.
            </p>
            <div style={buttonStyle}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <h5 className='btn21 d-flex justify-content-center align-items-center m-0 fw-light'>LEARN MORE</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='section'><h1>Hotel Gallery</h1></div>
      <div><p className='paragraph'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div>
      <Slider />


      {/* 
      <div className="card" style="width: 18rem;">
        <img src={sampleImage5} 
        className="img-fluid" 
        alt="#"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div> */}
    </>
  )
}

export default About
