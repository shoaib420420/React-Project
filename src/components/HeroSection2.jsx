import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection2.css'; 
import sampleImage from '../images/img_1_long.jpg'; 

const HeroSection2 = () => {
  return (
    <>
    <div className="container my-4 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src={sampleImage}
            alt="Example"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 px-5">
          <h1 className="mb-3 ">Welcome To Our Website!</h1>
          <p className="mb-4">
            We provide tailored solutions, leveraging expertise and innovation to drive client success and sustainable growth in a competitive market.
          </p>
          <video className="w-50 rounded shadow" controls>
            <source src="/playvideo" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSection2











// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './HeroSection2.css'; 
// import sampleImage from '../images/img_1_long.jpg'; 

// const HeroSection2 = () => {
//   return (
//     <div className="container my-4 py-3 px-3">
//       <div className="row align-items-center">
//         <div className="col-md-6">
//           <img
//             src={sampleImage}
//             alt="Example"
//             className="img-fluid rounded shadow"
//           />
//         </div>
//         <div className="col-md-6 px-5">
//           <h1>Welcome To Our Website</h1>
//           <p>
//             We provide tailored solutions, leveraging expertise and innovation to drive client success and sustainable growth in a competitive market.
//           </p>
//           {/* <button className="btn btn-primary">Learn More</button> */}
//           <video width="30%" height="auto" controls>
//             <source src="/playvideo" type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection2
