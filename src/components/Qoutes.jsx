import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Qoutes.css';
import Image1 from '../images/person_1.jpg';
import Image2 from '../images/person_2.jpg';
import Image3 from '../images/person_3.jpg';

const Qoutes = () => {
  const test = [
    {
      img: Image1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, amet ducimus eius aspernatur fugit odit voluptatum dolores enim quas velit possimus animi, voluptatem deserunt! Aperiam?Totam debitis blanditiis facere incidunt amet ipsum omnis laborum similique aliquam aut, quibusdam eos aliquid. ",
      author:"__John-Dwan"  
    },
    {
      img: Image2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, amet ducimus eius aspernatur fugit odit voluptatum dolores enim quas velit possimus animi, voluptatem deserunt! Aperiam?Totam debitis blanditiis facere incidunt amet ipsum omnis laborum similique aliquam aut, quibusdam eos aliquid. ",
      author:"__Newtoon-Brithish"  
    },
    {
      img: Image3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quia commodi accusamus eius. Odio inventore nesciunt dolores maxime dolore molestias nostrum provident impedit! Praesentium voluptatum quas earum, neque ipsa aut.Totam debitis blanditiis facere incidunt amet ipsum omnis laborum similique aliquam aut, quibusdam eos aliquid.",
      author:"__Rebirth-John"  
    }
  ];

  return (
    <div className="qoute-section container6 mb-0">
      <div className="row justify-content-center">
        {test.map((item, index) => (
          <div className="col-md-4 col-sm-6 col-11 mb-4" key={index}>
            <img src={item.img} className="imaag mb-2 " alt="test" />
            <p>{item.text}</p>
            <p><em>{item.author}</em></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Qoutes
