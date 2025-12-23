import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import breakfasts from '../images/breakfast.svg';
import planetearth from '../images/planet-earth.svg';
import airplane from '../images/airplane.svg';
import beach from '../images/beach.svg';
import mountains from '../images/mountains.svg';
import hotair from '../images/hot-air-balloon.svg';
import './HeroSection3.css';

const cardData = [
  { img: breakfasts, title: "Good Foods" },
  { img: planetearth, title: "Travel Anywhere" },
  { img: airplane, title: "Airplane" },
  { img: beach, title: "Beach Resort" },
  { img: mountains, title: "Mountain Climbing" },
  { img: hotair, title: "Hot Air Balloon" },
];

const HeroSection3 = () => {
  return (
    <div className="hero3-section py-5 mb-3 mt-0">
      <div className='text-center mb-2 mt-3'>
        <h1>Experience Once in Your Life Time</h1>
        <p className="hero3-paragraph mx-auto">
          Stay away from those people who try to disparage your ambitions.
          Small minds will always do that, but great minds will give you a feeling
          that you can become great too.
        </p>
      </div>

      <div className="container5 ">
        <div className="row gy-4 ">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
              <div className="hero3-card text-center px-3 py-4">
                <img src={card.img} alt={card.title} />
                <h3>{card.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga, ad alias eos quod modi voluptatibus...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection3
