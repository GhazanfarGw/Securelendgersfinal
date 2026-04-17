import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Getting() {
    useEffect (() => {
    Aos.init ();
    }, [])

    return (
        <>
        <div className='md:justify-center md:mx-auto items-center duration-300 md:py-12 py-5 bg-[#F0F5FF]'>
            <div className='md:mx-auto md:justify-center items-center max-w-6xl md:px-10 px-7'>
                <div className='md:justify-center py-5 gap-16 items-center'>
                    <div className='md:mx-auto'>
                        {/* Heading */}
                        <div className="md:text-center">
                            <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full text-sm">
                                Why Choose Us
                            </span>

                            <h2 className="md:mt-4 mt-2 text-xl md:text-3xl font-bold text-[#1A2B6B] max-w-xl mx-auto">
                                Built for Security, <br className="block md:hidden lg:hidden"/> Designed for <br className="hidden md:block lg:block"/> Performance
                            </h2>
                            <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>

                            <p className="md:mt-4 mt-2 text-[#6D7380] md:max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                                Comprehensive solutions tailored to your unique digital asset needs
                            </p>
                        </div>
                        <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 hover:border-t-4 hover:border-[#2F6FD6] border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] rounded-lg'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-xl items-center border'>
                                    <img className='py-4 px-3' src="icons8-consultation-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Security-First Architecture
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    We implement defense-in-depth strategies, including multi-layer authentication, private key isolation, and secure transaction flows.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 hover:border-t-4 hover:border-[#2F6FD6] border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] rounded-lg'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-xl items-center border'>
                                    <img className='py-4 px-3' src="icons8-proposal-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Tailored Advisory                                
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Every engagement is structured based on portfolio size, asset distribution, custody model, and risk exposure.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 hover:border-t-4 hover:border-[#2F6FD6] border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] rounded-lg'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-xl items-center border'>
                                    <img className='py-4 px-3' src="icons8-game-plan-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Institutional Liquidity Execution
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Access OTC desks, dark pools, and liquidity routing strategies designed to minimize slippage, market impact, and counterparty risk.
                                </p>
                            </div>
                            <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 hover:border-t-4 hover:border-[#2F6FD6] border-opacity-30 mt-5 hover:scale-105 duration-200 bg-[#fff] rounded-lg'>
                                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-xl items-center border'>
                                    <img className='py-4 px-3' src="icons8-weak-financial-growth-100.png" alt="" />
                                </div>
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                    Compliance & AML
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                    Full regulatory alignment with AML/KYC standards, audit-ready processes, and transparent reporting frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Getting;