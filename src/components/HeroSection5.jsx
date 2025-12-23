import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection5.css';
import boxImage from '../images/img_1.jpg';
import boxImage1 from '../images/img_2.jpg';
import boxImage2 from '../images/img_3.jpg';
import boxImage3 from '../images/img_5.jpg';
import { FaStar, FaRegStar } from 'react-icons/fa';

const HeroSection5 = () => {
  const destinations = [
    { img: boxImage, title: 'Food & Wines' },
    { img: boxImage1, title: 'Resort & Spa' },
    { img: boxImage2, title: 'Hotel Rooms' },
    { img: boxImage3, title: 'Mountain Climbing' }
  ];

  return (
    <section className="section5 py-5">
      <div className="container2 text-center">
        <h1 className="topd">Top Destination</h1>
        <p className="top-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          voluptatem quis debitis repudiandae similique dolores temporibus itaque.
          Fuga officia nisi laborum architecto ullam id.
        </p>

        <div className="row">
          {destinations.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
              <div className="imgtext mx-auto">
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                  <div className="review-count">52457 reviews</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection5




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './HeroSection5.css';
// import boxImage from '../images/img_1.jpg';
// import boxImage1 from '../images/img_2.jpg';
// import boxImage2 from '../images/img_3.jpg';
// import boxImage3 from '../images/img_5.jpg';
// import { FaStar, FaRegStar } from 'react-icons/fa';

// const HeroSection5 = () => {
//   const destinations = [
//     { img: boxImage, title: 'Food & Wines'},
//     { img: boxImage1, title: 'Resort & Spa'},
//     { img: boxImage2, title: 'Hotel Rooms'},
//     { img: boxImage3, title: 'Mountain Climbing'}
//   ];

//   return (
//     <section className="section5 py-5">
//       <div className="container2 text-center">
//         <h1 className="topd">Top Destination</h1>
//         <p className="top-para mx-auto">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//           voluptatem quis debitis repudiandae similique dolores temporibus itaque.
//           Fuga officia nisi laborum architecto ullam id.
//         </p>

//         <div className="row1 justify-content-center">
//           {destinations.map((item, index) => (
//             <div className="col-md-3 col-sm-6 col-11 mb-4" key={index}>
//               <div className="imgtext">
//                 <img src={item.img} alt={item.title} />
//                 <h2>{item.title}</h2>
//                 <div className="stars text-info">
//                      <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
//                       <div className="review-count">52457 reviews</div>
//                 </div>
               
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection5

