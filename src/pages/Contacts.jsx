import React from 'react'
import { useState } from 'react';
import './Contacts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Qoutes from '../components/Qoutes';
import Customers from '../components/Customers';

const Contacts = () => {
  return (
    <>
      <div className='contact'>
        <div className='d-flex justify-content-center align-items-center text-center'>
          <h1 className='fw-bold text-white' style={{ fontSize: '50px', marginTop: '10rem' }}>Contact</h1>
        </div><br />
        <div className="text-center text-black">
          <p>
            A free Template by
            <a
              href='https://www.istockphoto.com/photo/downtown-fernandina-beach-amelia-island-florida-gm2196976202-614962764?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbannerNone_media&utm_term=business+shop'
              style={{ textDecoration: 'none', marginLeft: '5px', color: 'white' }}
              target="_blank"
              rel="noreferrer"
            >
              BusinessShop
            </a>
            . Download and share.
          </p>
        </div>
      </div>


      <div className="container31 my-5 py-5 px-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 ">
            <div className="container4 border-5">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card shadow">
                    <div className="card-body">
                      <form>
                        <div class="mb-6">
                          <label for="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                          <label for="phone" className="form-label">Phone</label>
                          <input type="text" className="form-control" id="number" placeholder="Phone Number"/>
                        </div>
                        <div className="mb-3">
                          <label for="email" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                          <label for="message" className="form-label">Message</label>
                          <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn" style={{border:'2px solid skyblue'}}>Send Message</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading31 col-md-5 px-5">
            <h3 className=" mb-3 " style={{ color: 'skyblue' }}>ADDRESS:</h3>
            <p className="mb-4">
              98 West 21th Street, Suite <br /> 721 New York NY 10016.
            </p>
            <h3 className=" mb-3 " style={{ color: 'skyblue' }}>PHONE:</h3>
            <p className="mb-4">
              +5183749.
            </p>
            <h3 className=" mb-3 " style={{ color: 'skyblue' }}>EMAIL:</h3>
            <p className="mb-4">
              info@yourdomain.com.
            </p>

          </div>
        </div>
      </div>
      {/* <hr/> */}
      <div className=''>
        
        <Customers />
      </div>

    </>
  )
}

export default Contacts
