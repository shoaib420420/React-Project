import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection1.css';


const HeroSection1 = () => {
    const [hover, setHover] = useState(false);

    const buttonStyle = {
        width: '200px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid black',
        borderRadius: '5px',
        transition: '0.3s ease',
        cursor: 'pointer',
        backgroundColor: hover ? 'skyblue' : '',
        color: hover ? 'white' : 'black',
        margin: '0 auto',
        marginTop: '50px'
    };
    return (
        <div className='homebg'>
            <div className='d-flex justify-content-center align-items-center text-center'>
                <h1 className='fw-bold text-white' style={{ fontSize: '50px', marginTop: '10rem' }}>Travel & Tours</h1>
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
            <div
                style={buttonStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <h5 className='d-flex justify-content-center align-items-center m-0'>Visit ColorLibs</h5>
            </div>
        </div>
    )
}

export default HeroSection1