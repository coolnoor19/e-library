import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav class="w-[100%] h-auto  m-auto  bg-[#f7f7f7] flex justify-between items-center px-4 md:px-4 rounded-lg">
            <div class="text-2xl font-bold text-indigo-700"><img className="w-30 h-[100px]" src="/assets/abc.jpeg" alt="" /></div>
            <ul class="md:flex hidden font-semibold  gap-10  ">
                {/* <li class="mx-[10px] cursor-pointer hover:bg-indigo-700 rounded-2xl px-2 py-2">Home</li> */}
                <li class="mx-[10px] cursor-pointer hover:bg-indigo-700 rounded-2xl px-2 py-2">About Us</li>
                <li class="mx-[10px] cursor-pointer hover:bg-indigo-700 rounded-2xl px-2 py-2">Contact Us</li>
                <li class="mx-[10px] cursor-pointer hover:bg-indigo-700 rounded-2xl px-2 py-2">Certificate</li>
            </ul>

            <div className=' mr-10 cursor-pointer '>
                <ul className='flex gap-4 '>
                    
                    <li><a href=""><LuInstagram /></a></li>
                    <li><a href=""><FaFacebook /></a></li>
                    <li><a href=""><BsWhatsapp /></a></li>

                </ul>
            </div>

            {/* <div class="font-semibold hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-lg cursor-pointer ">
                Login/signup</div> */}

            <div class="md:hidden">
                <a class="text-4xl" href="#">&#8801;</a>
            </div>
        </nav>

    )
}

export default Navbar
