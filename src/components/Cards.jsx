import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import sampleImage from '../images/img_1.jpg';
import sampleImage2 from '../images/img_2.jpg';
import sampleImage3 from '../images/img_3.jpg';

const cardData = [
  {
    img: sampleImage,
    date: "August-12-2024",
    title: "AI house company",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab totam sint accusantium, voluptates reiciendis expedita!",
  },
  {
    img: sampleImage2,
    date: "August-01-2024",
    title: "Hole-wise AI building",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab totam sint accusantium, voluptates reiciendis expedita!",
  },
  {
    img: sampleImage3,
    date: "August-03-2024",
    title: "Me as a Developer",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab totam sint accusantium, voluptates reiciendis expedita!",
  },
];

const Cards = () => {
  return (
    <div className="container4 cards-container py-4">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-10 col-12 mb-4" key={index}>
            <img src={card.img} className="img-fluid card-img" alt={card.title} />
            <div className="article-detail">
              <p className="article-date text-start text-black">{card.date}</p>
              <h4 className="article-title text-start text-black">{card.title}</h4>
              <p className="article-p text-start">{card.description}</p>
              <a href="#" className="article-link">Read More+</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Cards;


