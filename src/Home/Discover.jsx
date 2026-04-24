// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function Blog() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         pauseOnHover: true,

//         cssEase: "linear",
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               dots: true,
//             }
//           }
//         ]
//       };
//   return (
//     <>
//     <div className='mx-0 px-5 items-center md:py-28'>
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-2xl items-center mx-auto overflow-hidden'>
//         <h1 className='md:text-4xl text-3xl text-[#403f68]'>Know Before You Go</h1>
//         <Slider {...settings} className='flex grid-cols-4 items-center pt-5 text-[#000]'>
//           <a href='/' 
//             className='py-5 justify-center items-center px-5 bg-[#f1f1f1] shadow-2xl'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <br/>
//             <div className='border-y py-3 mt-5 font-semibold mx-2 border-opacity-20 border-[#403f68] hover:text-[#403f68]'>
//               <a href=''>
//                 Learn More
//               </a>
//             </div>
//           </a>
//           <a href='/' 
//             className='py-5 justify-center items-center px-5 bg-[#f1f1f1] shadow-2xl'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <br/>
//             <div className='border-y py-3 mt-5 font-semibold mx-2 border-opacity-20 border-[#403f68] hover:text-[#403f68]'>
//               <a href=''>
//                 Learn More
//               </a>
//             </div>
//           </a>
//           <a href='/' 
//           className='py-5 justify-center items-center px-3'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <p className='md:w-80 pt-3 text-sm text-[#000]'>
//               Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions.
//             </p>
//           </a>
//           <a href='/' 
//           className='py-5 justify-center items-center px-3'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <p className='md:w-80 pt-3 text-sm text-[#000]'>
//               Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions.
//             </p>
//           </a>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Blog;


import React from 'react'

function blog() {
  return (
    <>
    <div className='md:px-10 items-center mx-auto justify-center px-5 py-20 lg:max-w-6xl xl:max-w-7xl'>
      <div className='mx-auto justify-center'>
        <h1 className='lg:text-4xl text-2xl font-displace underline'>
          Lastest Blogs
        </h1>
        <div className='flex lg:flex-0 lg:grid lg:grid-cols-4 pb-5 overflow-x-scroll xl:overflow-hidden mx-auto gap-5 md:gap-5 justify-between items-center mt-10'>
          <a href='/crypto-payment-integration-website-payment-gateway' className='justify-center hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl'>
            <div className='px-3 py-4 items-center w-72 md:w-full lg:w-full'>
              <img className='w-96' src='../Screenshot_3.png' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold pb-5 lg:text-base text-sm'>
                  How Businesses Can Integrate Crypto Payments Into Their Website Payment Gateway
                </h1>
                <p className='lg:text-base text-sm pt-3 border-t border-[#403f68] border-opacity-20 hover:text-[#403f68]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/travel-safety-tips' className='justify-center hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl'>
            <div className='px-3 py-4 items-center w-72 md:w-full lg:w-full'>
              <img className='w-96' src='./liqucdity.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold pb-5 lg:text-base text-sm'>
                  Understanding Liquidity in Cryptocurrencies: From Challenges to Solutions
                </h1>
                <p className='lg:text-base text-sm pt-3 border-t border-[#403f68] border-opacity-20 hover:text-[#403f68]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className='lg:flex bg-[#186DC8] items-center justify-between lg:mt-28 mt-20 rounded-md'>
          <div className='max-w-screen-2xl lg:text-base text-sm lg:px-10 text-white px-5 py-10'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto overflow-hidden text-[#fff]'>
                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-3xl text-xl md:pt-5 font-bold text-[#fff]'>
                    Secure, Structure, and Scale Your Digital Assets
                </h1>
                <p className="md:text-base text-xs text-[#fff] pt-3 leading-relaxed">
                    Engage with our specialists to implement institutional-grade security frameworks, optimized liquidity strategies, and advanced asset protection systems tailored to your crypto portfolio.
                </p>
                <div className="fourth md:mt-10 md:w-64 w-60 hover:scale-105 mt-5 hover:px-4 items-center text-[#186DC8] md:text-sm text-sm font-bold scroll-smooth duration-500 bg-[#fff] relative md:h-14 h-10 tracking-wide justify-center text-center flex rounded-lg">
                    <a 
                        href="/contact-us">
                        Book Private Consultation
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default blog
