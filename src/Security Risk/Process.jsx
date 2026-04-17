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
                    <div className='justify-center py-5 gap-16 items-center'>
                        <div className='mx-auto'>
                            {/* Heading */}
                            <div className="text-center md:border-b-4 md:pb-28 border-[#186DC8]">
                                <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs">
                                    Process Overview
                                </span>

                                <h2 className="mt-4 text-xl md:text-3xl font-bold text-[#1A2B6B] leading-snug max-w-xl mx-auto">
                                    How Security & Risk Control is <br />Implemented
                                </h2>
                                <div className="mx-auto w-16 h-1 bg-[#243A6B] my-5 rounded"></div>

                                <p className="mt-4 text-[#6D7380] max-w-2xl mx-auto text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                                    A systematic approach to identifying, mitigating, and eliminating risk across digital asset operations.
                                </p>
                            </div>
                            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3] md:absolute md:relative md:-mt-24 mt-5 text-center mx-auto'>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center md:text-2xl text-lg font-bold text-center text-[#fff]'>1</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                       Risk Assessment
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                       We analyze wallet infrastructure, transaction flows, custody models, and exposure points.
                                    </p>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-xs border-t mt-3 pt-3 text-[#67778E] font-bold">
                                        Identify security vulnerabilities, compliance gaps, and operational risks.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center text-2xl font-bold text-center text-[#fff]'>2</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Screening & Audit Deployment
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        Implement AML screening tools, blockchain analytics, and audit frameworks.
                                    </p>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-xs border-t mt-3 pt-3 text-[#67778E] font-bold">
                                        Ensure real-time visibility and regulatory alignment.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center text-2xl font-bold text-center text-[#fff]'>3</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Risk Mitigation Execution
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        Deploy multi-layer security controls, transaction approval systems, and risk-reduction strategies.
                                    </p>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-xs border-t mt-3 pt-3 text-[#67778E] font-bold">
                                        Ensure secure and controlled transaction execution.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-center mx-auto bg-[#1768C3] h-10 w-10 rounded-full items-center'>
                                        <div className='py-1 justify-center text-2xl font-bold text-center text-[#fff]'>4</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Monitoring & Continuous Protection
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        Ongoing monitoring using threat detection systems, anomaly tracking, and security alerts.
                                    </p>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-xs border-t mt-3 pt-3 text-[#67778E] font-bold">
                                        Maintain long-term protection and operational integrity.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="bg-[#0E1E2F] p-4 rounded-xl md:text-sm text-xs text-[#2F77C8] mt-8 py-6 font-bold border-l-4 border-[#2F6FD6]">
                                <p className=" text-center text-[#fff] mx-auto">
                                    From audit to execution, every layer is engineered to reduce exposure, enforce control, and protect capital.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Process;