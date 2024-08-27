import React from 'react'

const Hero = () => {
    return (
        <div className='  h-auto flex flex-col justify-center items-center  '>
            <div className=' m-5 w-[950px] bg-white-500   rounded-md p-7  h-[500px] '>
                <div className='flex  flex-col mt-20'>
                <h1 className='m-auto font-bold text-4xl text-center mb-3 text-[brown] '>
                    Thriving Together in Gopal Prasad
                </h1>

                <p className='bg-white-900 rounded-lg text-lg  text-center text-black px-10 py-4 '>
                    At Gopal Prasad, we are dedicated to building a vibrant, inclusive community. Our mission is to enhance scientific learning, sports, cultural activities, and cooperative efforts to create a healthy and peaceful society. We also focus on improving our library services and offering recreational opportunities for all. Join us in creating a brighter, united future for everyone in our village
                </p>
                </div>

            </div>
            <div className='m-5 w-[950px] bg-white-500   rounded-md p-7  mb-[150px] ' >
                <h1 className='m-auto f text-center mb-3 font-bold text-4xl text-[brown] '>ByLaws Certificate</h1>

                <p className='text-lg text-center mb-7 '>
                    The Vivekananda Pathagar, recognized by the Odisha Additional Society Organization, is dedicated to the welfare of Gopalprasad village, Odisha, focusing on education, healthcare, and sustainable livelihoods. The society operates with established bylaws and holds a certification, ensuring transparency and impact in its initiatives.
                </p>
                <div className='flex justify-evenly'>
                    <img src="public/assets/WhatsApp Image 2024-08-26 at 13.46.49.jpeg" alt="" className='h-[400px] border-[12px] border-black ' />
                    <img src="public/assets/WhatsApp Image 2024-08-26 at 13.35.57.jpeg " alt="" className='h-[400px] border-[12px] border-black ' />
                </div>

            </div>

        </div>
    )
}

export default Hero
