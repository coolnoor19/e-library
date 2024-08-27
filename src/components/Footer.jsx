// import React, { useState } from "react";

// import footerLogo from "../../assets/website/logo.png";

const Footer = () => {
    return (
        <footer class="w-full h-[220px] mt-4 bg-[#f7f7f7]  px-4 text-black pt-8 flex flex-col md:flex-row flex-wrap justify-between">
            <div className=" w-44 h-44 flex items-center justify-center">
                <img className="w-40 h-[170px]" src="/public/assets/abc.jpeg" alt=""/>
                 {/* <p class="my-4">Email us: support@pwskills.com</p> */}
                   
            </div>

                    <div>
                        <h2 class="font-bold text-xl mt-4">Address</h2>
                        <div class="w-32 h-1 bg-yellow-500 text-center rounded"></div>
                        <div>
                           <p>Bacchara-Patna near little star school</p>
                        </div>
                    </div>

                    <div>
                        <h2 class="font-bold text-xl mt-4">Contact-Details</h2>
                        <div class="w-32 h-1 bg-yellow-500 text-center rounded"></div>
                        <div>
                            <p>Official Mail ID. support@99bookstores.com</p>
                        </div>
                    </div>

                    {/* <div>
                        <h2 class="font-bold text-xl mt-4">Links</h2>
                        <div class="w-32 h-1 bg-yellow-500 text-center rounded"></div>
                        <div>
                            <p>Discord channel</p>
                            <p>pw youtbe</p>
                            <p>Careers </p>
                        </div>
                    </div> */}
                </footer>
                );
};

export default Footer