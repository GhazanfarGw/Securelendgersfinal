import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Services = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div id="services" className='justify-center mx-auto items-center duration-500 md:py-12 py-5 bg-[#F5F9FF]'>
                <div className='mx-auto justify-center items-center max-w-6xl md:px-10 px-7'>
                    <div className='justify-center py-5 gap-16 items-center'>
                        <div className='mx-auto'>
                            {/* Heading */}
                            <div className="md:text-center">
                                <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full text-sm">
                                    Our Services
                                </span>

                                <h2 className="md:mt-4 mt-2 text-xl md:text-3xl font-bold text-[#1A2B6B] max-w-xl mx-auto">
                                    Comprehensive Digital Asset <br className="hidden md:block lg:block"/>Solutions
                                </h2>
                                <div className="md:mx-auto w-16 h-1 bg-[#243A6B] md:my-5 my-2 rounded"></div>

                                <p className="md:mt-4 mt-2 text-[#6D7380] max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                                    End-to-end services covering security, liquidity, and compliance
                                </p>
                            </div>
                            <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg bg-[#F0F5FF] hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#2F6FD6] md:h-14 md:w-14 h-10 w-10 rounded-lg items-center border'>
                                        <div className='md:py-3 md:px-3 py-2 justify-center md:text-2xl text-xl font-bold text-center text-[#fff]'>01</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Crypto-to-Fiat Conversion                                    
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Execute large transactions through OTC liquidity providers, algorithmic execution strategies, and slippage-controlled routing, avoiding exposure to public order books.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg bg-[#F0F5FF] hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#2F6FD6] md:h-14 md:w-14 h-10 w-10 rounded-lg items-center border'>
                                        <div className='md:py-3 md:px-3 py-2 justify-center md:text-2xl text-xl font-bold text-center text-[#fff]'>02</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Digital Asset Security Consulting
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Comprehensive advisory covering attack vector analysis, wallet infrastructure design, and security protocol implementation.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg bg-[#F0F5FF] hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#2F6FD6] md:h-14 md:w-14 h-10 w-10 rounded-lg items-center border'>
                                        <div className='md:py-3 md:px-3 py-2 justify-center md:text-2xl text-xl font-bold text-center text-[#fff]'>03</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Wallet Security & Cold Storage
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Implementation of hardware wallets, air-gapped storage, multi-signature setups, and private key sharding techniques.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg bg-[#F0F5FF] hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#2F6FD6] md:h-14 md:w-14 h-10 w-10 rounded-lg items-center border'>
                                        <div className='md:py-3 md:px-3 py-2 justify-center md:text-2xl text-xl font-bold text-center text-[#fff]'>04</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Blockchain Security Audits
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Deep analysis of wallet activity, transaction history, and on-chain exposure, identifying vulnerabilities and anomalous behavior.
                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg bg-[#F0F5FF] hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#2F6FD6] md:h-14 md:w-14 h-10 w-10 rounded-lg items-center border'>
                                        <div className='md:py-3 md:px-3 py-2 justify-center md:text-2xl text-xl font-bold text-center text-[#fff]'>05</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Crypto Asset Recovery
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Utilizing blockchain forensics, transaction tracing, and recovery protocols to assist with inaccessible or compromised assets.                                    </p>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 rounded-lg bg-[#F0F5FF] hover:bg-[#E8EDFF]'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#2F6FD6] md:h-14 md:w-14 h-10 w-10 rounded-lg items-center border'>
                                        <div className='md:py-3 md:px-3 py-2 justify-center md:text-2xl text-xl font-bold text-center text-[#fff]'>06</div>
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base font-bold lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Cybersecurity Risk Advisory
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pt-5 pt-3 text-[#6D7380] text-sm leading-normal'>
                                        Assessment of operational vulnerabilities, phishing risks, key management flaws, and transaction approval processes, with actionable mitigation strategies.
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

export default Services;