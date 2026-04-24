import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='bg-[#252E42]'>
            <div className='lg:max-w-6xl xl:max-w-7xl duration-500 mx-auto justify-center md:pt-20 md:pb-10 xl:px-10 lg:px-10 md:px-10 py-10'>
                <h1 className='text-[#aaa] md:text-base text-sm justify-center pb-5 px-5 '>
                    Website last updated: April 24, 2026
                </h1>
                <div className='px-4 md:px-0 py-2'>
                    <span>
                        <a href="/">
                            <img src='../whitelogo.png' className='md:w-52 w-52' alt='favicon.png'/>
                        </a>
                    </span>

                </div>
                <div className='md:grid md:grid-cols-5 md:gap-8 max-w-screen-2xl mx-auto justify-center py-5 text-white px-7'>
                    <div className=''>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Empower your business with Safeguard digital assets
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-3'>
                            Secure ledgers solutions offers to convert your cryptocurrency into cash, having a trusted partner is essential to ensure a smooth, secure, and efficient process.
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Address
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-2'>
                            33 Queen St, London EC4R 1AP. <br /> 15813 Waterloo Rd, Cleveland, OH 44110, USA.
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Important Links
                        </h1>
                        <div>
                            <ul className="space-y-2 text-sm md:pt-4 pt-2">
                                <li><Link to="/privacy-policy" className="text-sm text-[#C3CDD3] hover:text-base duration-500">Privacy Policy</Link></li>
                                <li><Link to="/terms-conditions" className="text-sm text-[#C3CDD3] hover:text-base duration-500">Terms of Service</Link></li>
                                <li><Link to="/faqs" className="text-sm text-[#C3CDD3] hover:text-base duration-500">FAQs</Link></li>
                                <li><Link to="/blog" className="text-sm text-[#C3CDD3] hover:text-base duration-500">Blog</Link></li>
                                <li><Link to="/careers" className="text-sm text-[#C3CDD3] hover:text-base duration-500">Careers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Contact Us
                        </h1>
                        <p className='text-sm md:text-xs text-[#C3CDD3] md:pt-4 pt-2'>
                            support@secureledgerssolutions.com
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-semibold'>
                            Community
                        </h1>
                        <div className="flex flex-row gap-5 pt-5">

                            {/* Facebook */}
                            <a 
                                href="https://www.facebook.com/profile.php?id=61588264681373"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-blue-600 rounded-full p-2 hover:bg-blue-600 duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.002 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 17.002 22 12z"/>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a 
                                href="https://www.instagram.com/secure_ledger_solutions/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-pink-500 rounded-full p-2 hover:bg-pink-500 duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm9.5 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a 
                                href="https://www.linkedin.com/company/secureledgerssolutions/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#136690] rounded-full p-2 hover:bg-[#136690] duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-white" viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;
