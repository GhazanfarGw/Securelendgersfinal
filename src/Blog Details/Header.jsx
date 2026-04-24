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
      <div className="mx-auto max-w-screen-xl px-4 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center py-3">
          <img
            src="../desktopblacklogo.png"
            alt="Logo"
            className="hidden md:block w-40 relative z-50"
          />
          <img
            src="../desktopblacklogo.png"
            alt="Logo"
            className="block md:hidden w-36 relative z-50"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex xl:flex space-x-6 text-sm tracking-wide items-center">
          <Link to="/" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Home</Link>
          <Link to="/about-us" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">About Us</Link>
          <Link to="/blog" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Blog</Link>
          <Link to="/liquidity-management" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Liquidity Management</Link>
          <Link to="/security-risk" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Security Risk</Link>
          <Link to="/asset-protection" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Asset Protection</Link>
          <Link to="/client-experience" className="hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold">Client Experience</Link>
          <Link
            to="/contact-us"
            className="border border-[#0847F7] px-5 py-2 rounded-sm text-[#0847F7] hover:bg-[#0847F7] hover:text-white font-bold"
          >
            Contact Us
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
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-3 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/about-us" onClick={() => setOpen(false)}>About Us</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/online-payments" onClick={() => setOpen(false)}>Online Payments</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/payroll" onClick={() => setOpen(false)}>Crypto Payroll</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/billing" onClick={() => setOpen(false)}>Billing</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/retail" onClick={() => setOpen(false)}>Retail</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/online-consulting" onClick={() => setOpen(false)}>Online Consulting</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/liquidity-management" onClick={() => setOpen(false)}>Liquidity Management</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/security-risk" onClick={() => setOpen(false)}>Security Risk</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/asset-protection" onClick={() => setOpen(false)}>Asset Protection</Link></li>
          <li className='tracking-wider hover:bg-[#1a1e24] px-8 py-2 flex flex-row items-center border-b hover:text-[#1A2B6B] hover:font-semibold duration-500 hover:text-base hover:border-b-2 border-[#1A2B6B] font-bold text-[#000] border-opacity-10 text-sm'><Link to="/funds-stuck" onClick={() => setOpen(false)}>Funds Stuck</Link></li>
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
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;