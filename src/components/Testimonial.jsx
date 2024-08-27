import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        cssEase: "linear"

        
      };
  return (
  <div className='w-[95%] ml-9 mr-5 mb-10  h-[550px]' >
   <Slider {...settings}>
    <div className='w-3/4 '>
        <div className='mt-5'>
        
            <div className='bg-gray-300 h-[450px] text-black rounded-xl'>
                
                    <img src="https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="" className='h-[100%] w-[100%] rounded-md ' />
          
            </div>
       
        </div>
      
    </div>

    <div className='w-[100%] m-auto'>
        <div className='mt-5'>
            
            <div className='bg-gray-300 h-[450px] text-black rounded-xl'>
              
                    <img src="https://images.unsplash.com/photo-1609345635784-fd4a890e2326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww" alt="" className='h-[100%] w-[100%] rounded-md ' />
              

                
            </div>
        </div>
      
    </div>

    <div className='w-3/4 m-auto'>
        <div className='mt-5'>
            <div className='bg-gray-300 h-[450px] text-black rounded-xl'>
             
                    <img src="https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="" className='h-[100%] w-[100%] rounded-md' />
                

               
            </div>
        </div>
      
    </div>
    </Slider>
  </div>
 )
}

export default Testimonial

