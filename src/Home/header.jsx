import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Wallet,
  ArrowRight,
  Scale,
  Building2,
  Network,
  LockKeyhole,
  Users,
} from "lucide-react";

const serviceGroups = [
  {
    category: "Risk & Security",
    items: [
      {
        title: "Security Risk",
        path: "/security-risk",
        desc: "Operational risk and custody exposure analysis.",
        icon: <ShieldCheck size={18} />,
      },
      {
        title: "Asset Protection",
        path: "/asset-protection",
        desc: "Protection frameworks for institutional assets.",
        icon: <LockKeyhole size={18} />,
      },
      {
        title: "Security Governance",
        path: "/security-governance",
        desc: "Approval structures and governance systems.",
        icon: <Scale size={18} />,
      },
    ],
  },

  {
    category: "Operations",
    items: [
      {
        title: "Liquidity Management",
        path: "/liquidity-management",
        desc: "Treasury optimization and capital movement.",
        icon: <Wallet size={18} />,
      },
      {
        title: "Transaction Systems",
        path: "/transaction-systems",
        desc: "Execution flow and authorization review.",
        icon: <Network size={18} />,
      },
      {
        title: "Custody Services",
        path: "/custody-services",
        desc: "Custody architecture and vendor assessment.",
        icon: <Building2 size={18} />,
      },
    ],
  },

  {
    category: "Advisory",
    items: [
      {
        title: "Client Experience",
        path: "/client-experience",
        desc: "Operational usability and service evaluation.",
        icon: <Users size={18} />,
      },
    ],
  },
];

const navigation = [
  { title: "Home", path: "/" },
  { title: "Insights", path: "/blog" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[84px]">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <img
              src="./desktopblacklogo.png"
              alt="Logo"
              className="w-40 md:w-44 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navigation.slice(0, 2).map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#2563EB]"
                      : "text-[#111827] hover:text-[#2563EB]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-[15px] font-semibold text-[#111827] hover:text-[#2563EB] transition-all duration-300">
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    megaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={`absolute left-1/1 -translate-x-1/2 top-14 w-[1280px] transition-all duration-300 ${
                  megaMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-4"
                }`}
              >
                <div className="bg-white border border-[#E5E7EB] shadow-2xl rounded-[30px] overflow-hidden">
                  <div className="grid grid-cols-3 gap-8 p-8">
                    {serviceGroups.map((group, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-bold uppercase tracking-[2px] text-[#2563EB] mb-5">
                          {group.category}
                        </h3>

                        <div className="space-y-3">
                          {group.items.map((service, idx) => (
                            <Link
                              key={idx}
                              to={service.path}
                              className="group flex gap-4 p-4 rounded-2xl hover:bg-[#F5F9FF] transition-all duration-300 border border-transparent hover:border-[#D6E4FF]"
                            >
                              <div className="min-w-[46px] h-[46px] rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#2563EB]">
                                {service.icon}
                              </div>

                              <div>
                                <h4 className="font-bold text-[#111827] group-hover:text-[#2563EB] transition">
                                  {service.title}
                                </h4>

                                <p className="text-sm text-[#667085] mt-1 leading-relaxed">
                                  {service.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navigation.slice(2).map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#2563EB]"
                      : "text-[#111827] hover:text-[#2563EB]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              to="/contact-us"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={30} className="text-[#111827]" />
            ) : (
              <Menu size={30} className="text-[#111827]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 ${
          mobileOpen ? "left-0" : "-left-full"
        } w-full h-screen bg-white transition-all duration-500 overflow-y-auto`}
      >
        <div className="px-6 pt-28 pb-10">
          {/* Nav Links */}
          <div className="space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block py-4 border-b border-gray-100 text-[#111827] text-lg font-semibold hover:text-[#2563EB] transition"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="mt-10">
            <h3 className="text-xs uppercase tracking-[3px] text-[#2563EB] font-bold mb-5">
              Services
            </h3>

            <div className="space-y-4">
              {serviceGroups.map((group, index) => (
                <div key={index}>
                  <h4 className="text-sm font-bold text-[#111827] mb-3">
                    {group.category}
                  </h4>

                  <div className="space-y-3">
                    {group.items.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.path}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-4 p-4 rounded-2xl border border-[#EEF2F6] hover:bg-[#F7FAFF] transition-all duration-300"
                      >
                        <div className="min-w-[44px] h-[44px] rounded-xl bg-[#EEF4FF] flex items-center justify-center text-[#2563EB]">
                          {service.icon}
                        </div>

                        <div>
                          <h4 className="font-bold text-[#111827]">
                            {service.title}
                          </h4>

                          <p className="text-sm text-[#667085] mt-1 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-10 bg-[#F5F9FF] border border-[#D7E5FF] rounded-3xl p-6">
            <h3 className="text-xl font-bold text-[#111827]">
              Need Expert Guidance?
            </h3>

            <p className="text-[#667085] mt-3 leading-relaxed">
              Speak with our team regarding digital asset custody, governance,
              operational resilience, and institutional infrastructure.
            </p>

            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="mt-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-all duration-300"
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
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
