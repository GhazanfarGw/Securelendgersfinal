import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full duration-500 border-b border-opacity-30 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto lg:max-w-6xl duration-500 px-4 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center py-3">
          <img
            src="./desktopblacklogo.png"
            alt="Logo"
            className="hidden md:block w-40 relative z-50"
          />
          <img
            src="./desktopblacklogo.png"
            alt="Logo"
            className="block md:hidden w-36 relative z-50"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex xl:flex space-x-6 text-sm tracking-wide items-center">
          <Link to="/liquidity-management" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Liquidity Management</Link>
          <Link to="/security-risk" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Security Risk</Link>
          <Link to="/asset-protection" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Asset Protection</Link>
          <Link to="/client-experience" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Client Experience</Link>
          <Link
            to="/contact-us"
            className="border border-[#0847F7] px-5 py-2 rounded-sm text-[#0847F7] hover:bg-[#0847F7] hover:text-white font-bold"
          >
            Book a Private Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="xl:hidden lg:hidden text-3xl z-10 text-[#000]"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white fixed w-full top-0 bottom-0 overflow-y-auto py-20 px-6 duration-500 ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="text-sm">
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/liquidity-management" onClick={() => setOpen(false)}>Liquidity Management</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/security-risk" onClick={() => setOpen(false)}>Security Risk</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/asset-protection" onClick={() => setOpen(false)}>Asset Protection</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/client-experience" onClick={() => setOpen(false)}>Client Experience</Link></li>
          <p className='text-sm px-8 text-[#4b4b4b] pt-8'>
            Secure ledgers solutions offers to onvert your cryptocurrency into cash, having a trusted partner is essential to ensure a smooth, secure, and efficient process.
          </p>
          <li>
            <Link
              to="/contact-us"
              className="border border-[#0847F7] w-full block text-center py-2 rounded-sm text-[#0847F7] hover:bg-[#0847F7] hover:text-white mt-5"
              onClick={() => setOpen(false)}
            >
              Book a Private Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import NavLinks from "../Pages/Headerw/Navlinks";
// import Preloader from './Preloader';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a delay to mimic content loading
//     setTimeout(() => {
//       setLoading(false);
//     }, 500); // Adjust the delay as needed

//     // You can replace the above setTimeout with your actual data fetching logic.
//   }, []);

//   const handleScrollToTop = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       {loading ? (
//         <Preloader />
//       ) : (
//         <nav className="header fixed z-10 justify-center w-full duration-500 mx-auto item#1A2B6Br text-[#000] bg-[#111316] border-b border-[#ffffff] border-opacity-10 shadow-lg">
//         <div onClick={handleScrollToTop} className="flex items-center mx-auto justify-center max-w-screen-2xl md:px-10">
//           <div className="z-10 pt-3 mx-auto w-full flex justify-between pb-3 bg-[#111316]">
//             <div className="flex-grow">
//               <a href="/">
//                 <img src='./white.png' className='md:w-60 w-44' alt='favicon.png'/>
//               </a>
//             </div>
//             <div className="text-3xl md:hidden pt-3 px-3" onClick={() => setOpen(!open)}>
//               <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//             </div>
//           </div>
        //   <ul className="md:flex hidden items-center w-full justify-end mx-auto">
        //     <li>
        //       <Link to="/" className="items-center text-sm tracking-wider relative h-8 pt-0.5 px-4 flex justify-center flex-row hover:text-[#136690]">
        //         Home
        //       </Link>
        //     </li>
        //     <NavLinks />
        //     <li>
        //       <Link to="/careers" className="items-center text-sm tracking-wider relative h-8 pt-0.5 pr-16 flex justify-center flex-row hover:text-[#136690]">
        //           Careers
        //         </Link>
        //       </li>
        //     <div className='flex'>
        //       <a 
        //         href="/contact" className=" bg-[#136690] shadow-lg hover:bg-opacity-80 hover:f#1A2B6Bd text-[#000] items-center relative h-10 text-sm px-10 flex rounded-sm ">
        //         Contact Us
        //       </a>
        //     </div>
        //   </ul>
        //   {/* Mobile nav */}
        //   <ul className={`md:hidden bg-[#111316] fixed w-full top-[78px] overflow-y-auto bottom-0 pb-10 duration-500 border-t border-opacity-10 border-[#fff] ${open ? "left-0" : "left-[-100%]"}
        //   `}
        //   >
        //     <li>
        //       <Link to="/" className="tracking-wider hover:bg-[#1a1e24] px-8 py-3 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-[#ffffff] border-opacity-10 text-sm">
        //         Home
        //       </Link>
        //     </li>
        //     <NavLinks/>
        //     <li>
        //       <Link to="/careers" className="tracking-wider hover:bg-[#1a1e24] px-8 py-3 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-[#ffffff] border-opacity-10 text-sm">
        //         Careers
        //       </Link>
        //     </li>
        //     <li>
        //       <a
        //         target="_blank"
        //         href="https://twitter.com/BlackStoneSec" 
        //         className="tracking-widest py-3 px-8 flex hover:text-[#136690] flex-row justify-between items-center border-b border-[#fff] border-opacity-10 font-bold text-sm" 
        //         rel="noreferrer">Twitter
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           className="fill-current stroke-current h-7 w-7"
        //           viewBox="0 0 50 50"
        //         >
        //           <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/>
        //         </svg>
        //       </a>
        //     </li>
        //     <li>
        //       <a
        //         target="_blank"
        //         href="https://www.linkedin.com/company/black-stonesec/?viewAsMember=true" 
        //         className="tracking-widest py-3 px-8 flex hover:text-[#136690] flex-row justify-between items-center border-b border-[#fff] border-opacity-10 font-bold text-sm" 
        //         rel="noreferrer">LindedIn
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           className=" fill-current stroke-current h-7 w-7"
        //           viewBox="0 0 50 50"
        //         >
        //           <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
        //         </svg>
        //       </a>
        //     </li>
        //     <li>
        //       <a
        //         target="_blank"
        //         href="https://www.google.com/maps/search/Floor,+Suite+23,+63-66+Hatton+Garden,+5th,+London+EC1N+8BQ,+United+Kingdom/@51.5209705,-0.1089695,21z" 
        //         className="tracking-widest py-3 px-8 flex hover:text-[#136690] flex-row justify-between items-center border-b border-[#fff] border-opacity-10 font-bold text-sm" 
        //         rel="noreferrer">Office Address
        //         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        //           width="19.000000pt" viewBox="0 0 100.000000 100.000000"
        //           preserveAspectRatio="xMidYMid meet">
        //           <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
        //               fill="#fff" stroke="none">
        //                 <path d="M492 989 c-18 -5 -50 -27 -72 -49 -80 -80 -78 -185 5 -350 37 -73
        //                   120 -190 135 -190 15 0 84 97 128 180 98 183 92 314 -18 386 -43 29 -125 39
        //                   -178 23z m123 -154 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
        //                   80 80 19 0 40 -9 55 -25z"
        //                 />
        //                 <path d="M5 867 c-3 -6 -4 -176 -3 -376 l3 -364 129 -65 130 -65 120 60 119
        //                 60 129 -60 128 -59 117 64 118 63 3 369 c1 218 -2 374 -7 379 -6 6 -44 -9 -99
        //                 -39 l-90 -48 -11 -56 c-14 -71 -67 -181 -133 -276 -56 -81 -78 -99 -113 -90
        //                 -52 13 -193 251 -216 365 l-11 60 -28 -14 c-27 -14 -34 -12 -148 45 -66 33
        //                 -123 60 -126 60 -4 0 -9 -6 -11 -13z"/>
        //           </g>
        //         </svg>
        //       </a>
        //     </li>
        //       <p className='text-sm px-8 text-[#C3CDD3] pt-8'>
        //         Start your cybersecurity journey today with our unique framework and innovation services. Our comprehensive approach to cyber security will protect your assets from threats and ensure your business operates with the utmost security.
        //       </p>
        //     <li>
        //       <Link to="/contact" className="hover:bg-[#136690] border border-[#136690] items-center relative h-10 mt-8 tracking-wider mx-10 justify-center flex rounded-sm">
        //         Contact us
        //       </Link>
        //     </li>
        //   </ul>
        // </div>
//       </nav>
//     )}

//     </>

//   );
// };


// export default Navbar;

