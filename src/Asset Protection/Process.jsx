import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Process = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div id="learnmore" className='justify-center mx-auto items-center duration-300 md:py-12 py-12 bg-[#F5F9FF]'>
                <div className='mx-auto justify-center items-center max-w-6xl md:px-10 px-7'>
                    <div className='justify-center gap-16 items-center'>
                        <div className='mx-auto'>
                            {/* Heading */}
                            <div className="text-center md:border-b-4 md:pb-28 border-[#186DC8]">
                                <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-medium">
                                    Process Overview
                                </span>

                                <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B]">
                                    How It Works
                                </h2>
                                <div className="mx-auto w-16 h-1 bg-[#186DC8] md:my-5 my-3 rounded"></div>

                                <p className="md:mt-4 mt-2 text-[#6D7380] md:max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                                    A structured approach to case assessment and analysis
                                </p>
                            </div>
                            <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3] md:absolute md:relative md:-mt-24 mt-5 text-center mx-auto'>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center text-2xl font-bold text-center text-[#fff]'>1</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                       Submit Your Case
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                       Provide details including wallet addresses, transaction IDs, platform information, and known access limitations.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center text-2xl font-bold text-center text-[#fff]'>2</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Assessment & Analysis
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        We conduct blockchain tracing, wallet analysis, and recovery feasibility evaluation using specialized tools and methodologies.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center text-2xl font-bold text-center text-[#fff]'>3</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Findings & Guidance
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        Receive a clear technical assessment, asset location insights, and recommended next steps, based on your case.
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

export default Process;