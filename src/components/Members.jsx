import React from 'react'

const Members = () => {
  return (
    <div className='h-[600px] w-full py-10  pt-20 '>
        <section className='flex flex-col '>
           <h1 className='font-bold text-4xl text-center text-[brown] mb-14 '>Our Members</h1>

            <div className='flex justify-evenly h-auto w-[80%] m-auto  gap-4     '>
               
                <div className='w-36 '> 
                     <img className='h-32 w-36' src="public/assets/WhatsApp Image 2024-08-25 at 19.51.39 (1).jpeg" alt=""  /> 
                    <p className='text-center mt-2 text-[16px] leading-1 font-semibold'>Sabtosh Kumar Pattanaik</p>
                    <p className='text-center text-[12px] tracking-widest font-semiboldbold'>PRESIDENT</p>
                </div>
                <div className='w-36 '>
                    <img className='h-32 w-36 ' src="public/assets/WhatsApp Image 2024-08-25 at 19.51.39.jpeg" alt="" />
                    <p className='text-center mt-2 text-[16px] font-semibold'>Dilip Kumar Pattanaik</p>
                    <p className='text-center text-[10px] font-semiboldbold'>TREASURER</p>
                </div>
                <div className='w-36 '>
                    <img className='h-32 w-36' src="public/assets/WhatsApp Image 2024-08-25 at 19.51.40 (1).jpeg" alt="" />
                    <p className='text-center mt-2 text-[16px] font-semibold'>Sankarsan Behera</p>
                    <p className='text-center text-[10px] font-semiboldbold'>SECRETARY</p>
                </div>
                <div className='w-36 '> 
                    <img className='h-32 w-36' src="public/assets/WhatsApp Image 2024-08-26 at 13.36.29.jpeg" alt="" />
                    <p className='text-center mt-2 text-[16px] font-semibold'>Manamohan Pattanaik</p>
                    <p className='text-center text-[10px] font-semiboldbold'>ASS.- SECRETARY</p>
                </div>

            </div>
            
           
        </section>
      
    </div>
  )
}

export default Members


