import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Discover = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div className='items-center overflow-hidden mx-auto bg-[#186DC8]'>
                <div className='md:px-10 px-7 justify-center text-center md:py-28 py-10'>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto overflow-hidden text-[#fff] justify-center text-center'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-3xl text-xl md:pt-5 font-bold text-[#fff] justify-center text-center'>
                           Secure, Structure, and Scale Your Digital Assets
                        </h1>
                        <p className="md:text-base text-xs text-[#fff] pt-3 md:max-w-xl mx-auto leading-relaxed">
                            Engage with our specialists to implement institutional-grade security frameworks, optimized liquidity strategies, and advanced asset protection systems tailored to your crypto portfolio.
                        </p>
                        <div className="fourth mx-auto md:mt-10 md:w-64 w-60 hover:scale-105 mt-5 hover:px-4 items-center text-[#186DC8] md:text-sm text-sm font-bold scroll-smooth duration-500 bg-[#fff] relative md:h-14 h-10 tracking-wide justify-center text-center flex rounded-lg">
                            <a 
                                href="/contact-us">
                                Book Private Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;