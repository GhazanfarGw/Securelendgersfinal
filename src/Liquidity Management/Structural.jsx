import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Process = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div className='justify-center mx-auto items-center duration-300 py-12 bg-[#F5F9FF]'>
                <div className='mx-auto justify-center items-center max-w-6xl md:px-10 px-7'>
                    <div className='justify-center md:py-5 gap-16 items-center'>
                        <div className='mx-auto'>
                            {/* Heading */}
                            <div className="text-center">
                                <span className="bg-[#E8EDFF] text-[#2F6FD6] px-4 py-1 rounded-full md:text-sm text-xs font-medium">
                                    Structural Risks
                                </span>
                                <h2 className="md:mt-4 mt-2 text-xl md:text-3xl font-bold text-[#1A2B6B]">
                                    Underlying Structural Risks in Digital <br className="hidden md:block lg:block"/> Asset Markets
                                </h2>
                            </div>
                            <div className="mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>
                            <div className='md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3] mt-10'>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-7 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Custodial Risk & Asset Rehypothecation
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        User assets held on centralized platforms are often subject to internal capital allocation, lending exposure, and balance sheet risk, increasing the probability of loss during insolvency events.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                      Liquidity Fragmentation & Execution Inefficiency
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                       Crypto liquidity is distributed across multiple venues, leading to slippage, poor order execution, and price impact for high-volume transactions without proper aggregation.
                                    </p>
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Regulatory & Compliance Exposure
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        Inadequate AML/KYC frameworks and jurisdictional risks can result in account freezes, asset seizures, and restricted fund access.
                                    </p>                        
                                                            
                                </div>
                                <div className='bg-[#fff] border p-5 py-5 md:px-5 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'> 
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Market Exposure & Adverse Execution Risk
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>
                                        Public order book execution exposes transactions to front-running, MEV exploitation, and unfavorable price movement.
                                    </p>
                                </div>

                            </div>
                            <div className='bg-[#fff] border p-5 py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg hover:bg-[#E8EDFF]'> 
                                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='font-semibold md:text-base text-sm text-[#1A2B6B]'>
                                    End-to-End Digital Asset Execution Infrastructure
                                </h1>
                                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] md:text-sm text-xs leading-normal'>

                                    Secure Ledger Solutions provides a fully integrated framework covering asset acquisition, secure custody, liquidity
                                    execution, and fiat settlement. From onboarding and wallet structuring to OTC execution and off-ramp
                                    conversion, every stage is managed through controlled processes, risk-mitigated workflows, and institutional-grade infrastructure.                                    
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