import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Dashboard = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className='duration-500 justify-center mx-auto bg-[#E9EDFC]'>
      <div className='mx-auto md:px-10 px-5 text-center'>
        <div className='md:py-40 pt-10'>
          <div className='text-center md:py-0 py-20'>
            <h1
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="400"
              className='second xl:text-5xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#1A2B6B] font-medium'
            >
              Online consultation free <br className='hidden md:block lg:block' />
              with a cryptocurrency advisor
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="400"
              className='third text-center mx-auto md:pt-5 pt-3 text-[#3D4556] justify-center max-w-xl md:text-lg leading-normal'
            >
              Are you looking for an advisor specialized in cryptocurrencies or Blockchain? We offer you several types of online consultations to solve all your doubts.
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="400"
              className='pt-10 text-center mx-auto justify-center'
            >
                <a
                    href="https://t.me/BLOCKSPC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0847F7] w-full sm:w-60 justify-center mx-auto shadow-lg hover:bg-opacity-80 text-white items-center relative h-14 text-sm duration-200 px-6 flex rounded-sm gap-2"
                    >
                    <img src="/Telegram_logo.svg.webp" alt="Telegram" className="w-5 h-5" />
                    Talk to an expert
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
