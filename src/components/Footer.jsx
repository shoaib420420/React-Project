import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHeart} from 'react-icons/fa';
import { Links } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer py-0">
      <div className="container1">
        <div className="row text-white text-md-start">
          <div className="col-md-3 col-sm-6 mb-4">
            <h4>Quick Link</h4>
            <a href="">About</a><br />
            <a href="">Terms & Conditions</a><br />
            <a href="">Privacy Policy</a><br />
            <a href="">Help</a><br />
            <a href="">Rooms</a>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h4>Support</h4>
            <a href="">Our Location</a><br />
            <a href="">The Hosts</a><br />
            <a href="">About</a><br />
            <a href="">Contacts</a><br />
            <a href="">Restaurant</a>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h4>Contact Info</h4>
            <a href=""><em>Address:</em></a><br />
            <a href="" className='text-white-50'>98 West 21th Street, Suite 721</a>
            <a href="" className='text-white-50'>New York NY 10016</a><br/>
            <a href=""><em>Phone:</em></a>
            <a href="" className='text-white-50'>(+1) 435 3533</a><br />
             <a href=""><em>Email:</em></a>
             <a href="" className='text-white-50'>info@yourdomain.com</a>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className='subsc'>Subscribe</h4>
            <input type="text" placeholder="Your Email..." className="subscribe-input mt-2"/>
          </div>
          <hr className='hr'/>
          <p className="footer-date text-center">Copyright &copy; 2025 All rights reserved| This Template is made with <FaHeart/> by colorLib
                 </p>

        </div>
        
      </div>
    </footer>
  )
}

export default Footer
























// import React from 'react';
// import './Footer.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Footer = () => {
//     return (
//         <div>
//             <div className="footer">
//                 <div className="col-md-2">
//                     <h4>Quick Link</h4>
//                     <a href="">About</a><br />
//                     <a href="">Term and Conditions</a><br />
//                     <a href="">Privacy Policy</a><br />
//                     <a href="">Help</a><br />
//                     <a href="">Rooms</a><br />
//                 </div>
//                 <div className="col-md-2">
//                     <h4>Support</h4>
//                     <a href="">Our Location</a><br />
//                     <a href="">The Hosts</a><br />
//                     <a href="">About</a><br />
//                     <a href="">Contacts</a><br />
//                     <a href="">Restaurant</a><br />
//                 </div>
//                 <div className="col-md-2">
//                     <h4>Contact Info</h4>
//                     <a href="">How to order</a><br />
//                     <a href="">Our Products</a><br />
//                     <a href="">Order Status</a><br />
//                     <a href="">Promo</a><br />
//                     <a href="">Payment Method</a><br />
//                 </div>
//                 <div className="col-md-2">
//                     <h4>Subscribe</h4>
//                     <input type="text" placeholder='Your Email...' style={{background:'none', border:'none', color:'white'}}/>
//                 </div><br />
//             </div>
//         </div>
//     )
// }

// export default Footer