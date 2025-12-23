import React, { useEffect, useState } from "react";
import './Slider.css';
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../images/slider-1.jpg';
import img2 from '../images/slider-2.jpg';
import img3 from '../images/slider-3.jpg';
import img4 from '../images/slider-4.jpg';
import img5 from '../images/slider-5.jpg';
import img6 from '../images/slider-6.jpg';

const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
  { url: img6 },
];

const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth * 0.9);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setSliderWidth(1100); // max width for large screens
      } else if (width < 480) {
        setSliderWidth(width * 0.95); // almost full width for mobile
      } else {
        setSliderWidth(width * 0.9);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sliding">
      <SimpleImageSlider
        width={sliderWidth}
        height={sliderWidth * 0.65} 
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
  )
}

export default Slider














// import React, { useEffect, useState } from "react";
// import './Slider.css';
// import SimpleImageSlider from "react-simple-image-slider";
// import img1 from '../images/slider-1.jpg';
// import img2 from '../images/slider-2.jpg';
// import img3 from '../images/slider-3.jpg';
// import img4 from '../images/slider-4.jpg';
// import img5 from '../images/slider-5.jpg';
// import img6 from '../images/slider-6.jpg';

// const images = [
//   { url: img1 },
//   { url: img2 },
//   { url: img3 },
//   { url: img4 },
//   { url: img5 },
//   { url: img6 },
// ];

// const Slider = () => {
//   const [sliderWidth, setSliderWidth] = useState(window.innerWidth * 0.9);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setSliderWidth(width > 1200 ? 1100 : width * 0.9);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // call on mount

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="sliding mx-auto mt-3 mb-5">
//       <SimpleImageSlider
//         width={sliderWidth}
//         height={sliderWidth * 0.42}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//         autoPlay={true}
//         autoPlayDelay={2}
//       />
//     </div>
//   )
// }

// export default Slider

