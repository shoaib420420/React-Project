import React from 'react'
import './HeroSection4.css';
import Cards from './Cards.jsx';
import Slider from './Slider.jsx';

const HeroSection4 = () => {
  return (
    <div className='bg1'>
    <div className='Sec'><h1>International Tour Management</h1></div>
    <div><p className='para'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
         Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div>
         <Slider />

         <div className='Right-triangle'>
         <div  className='Sec1'><h1>Recent Blog Post</h1></div>
         <div><p className='para1'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
            a large language ocean.</p></div>

            <Cards />
         </div>

    </div>
  )
}

export default HeroSection4