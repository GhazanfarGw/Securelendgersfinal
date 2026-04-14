import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function About() {
    useEffect (() => {
    Aos.init ();
    }, [])
  return (
    <>
    <div className='duration-300 md:pb-10 md:pt-20 lg:pt-10 text-black mx-auto md:text-center md:px-10 px-5 max-w-screen-xl'>
        <div className='border-b pb-10 border-[#136690] border-opacity-30 mx-auto'>
            <div className='mx-auto pt-5'>
                <div className="md:flex md:grid-cols-2 pt-10 justify-between mx-auto">
                    <div className="block lg:hidden md:hidden" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                        <img src="/Circle.png" alt="" />
                    </div>
                    <div className='max-w-screen-md'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
                            Your trusted partner in blockchain security
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-left text-[#4f5258] pt-3">
                            The foundation of every relationship is trust.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left pt-5 md:text-base leading-normal text-sm text-[#4f5258]'>
                            At Secure ledgers solutions digital asset consultancy, we specialize in safeguarding your digital assets and ensuring that all blockchain-related activities are secure and compliant. Whether you are an individual seeking to protect your investments or a business in need of expert guidance, our services are tailored to meet your specific requirements.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-left pt-5 text-sm text-[#4f5258]'>
                            Our team of experienced professionals is committed to delivering bespoke solutions that prioritize simplicity, security, and peace of mind.
                        </p>
                    </div>
                    <div className="hidden lg:block md:block w-72" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                        <img src="/Circle.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default About 
