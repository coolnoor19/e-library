import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius: "30px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",borderRadius: "30px"}}
        onClick={onClick}
      />
    );
  }

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
        speed: 1000,
        autoplaySpeed: 2500,
        arrows: true ,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
        
        cssEase: "linear"

        
      };
  return (
  <div className='w-[95%] ml-9 mr-5 mb-10  h-[550px]' >
   <Slider {...settings}>
    <div className='w-3/4 '>
        <div className='mt-5'>
        
            <div className='bg-gray-300 h-[450px] text-black rounded-xl'>
                
                    <img src="/assets/vivekananda1.jpg" alt="" className=' object-cover rounded-md ' />
          
            </div>
       
        </div>
      
    </div>

    <div className='w-[100%] m-auto'>
        <div className='mt-5'>
            
            <div className='bg-gray-300 h-[450px] text-black rounded-xl'>
              
                    <img src="/assets/vivekananda2.jpg" alt="" className=' object-cover rounded-md ' />
              

                
            </div>
        </div>
      
    </div>

    <div className='w-3/4 m-auto'>
        <div className='mt-5'>
            <div className='bg-gray-300 h-[450px] text-black rounded-xl'>
             
                    <img src="/assets/vivekananda3.jpg" alt="" className=' object-cover rounded-md' />
 
            </div>
        </div>
      
    </div>
    </Slider>
  </div>
 )
}

export default Testimonial

