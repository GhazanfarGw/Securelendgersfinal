import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Partners() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
   return (
    <>
    <div className='mx-0 px-5 items-center border-2'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-lg items-center mx-auto overflow-hidden'>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5 '>
            
            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./binance_logo.svg.png' alt="Binance Logo"/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./Bitstamp-vector-logo.svg.png' alt="Bitstamp Logo"/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./coinbase_logo.svg.png' alt="Coinbase Logo"/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./Crypto.Com-Logo.jpg' alt="Crypto.Com Logo"/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./gemini.png' alt="Gemini Logo"/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./kraken_logo.svg.png' alt="Kraken Logo"/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
            <img src='./kucoin_logo.svg.png' alt="KuCoin Logo"/>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Partners;

// import React, { useEffect, useMemo } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

// // Import logos locally or from URLs
// import binanceLogo from './logos/binance.png';
// import coinbaseLogo from './logos/coinbase.png';
// import krakenLogo from './logos/kraken.png';
// import bitfinexLogo from './logos/bitfinex.png';
// import huobiLogo from './logos/huobi.png';

// const exchanges = [
//   { name: "Binance", logo: binanceLogo },
//   { name: "Coinbase", logo: coinbaseLogo },
//   { name: "Kraken", logo: krakenLogo },
//   { name: "Bitfinex", logo: bitfinexLogo },
//   { name: "Huobi", logo: huobiLogo },
// ];

// function CryptoExchangeTicker() {
//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//   }, []);

//   const tickerContent = useMemo(
//     () =>
//       exchanges.map((exchange) => (
//         <div key={exchange.name} className="exchange-item flex items-center gap-2 px-4">
//           <img src={exchange.logo} alt={exchange.name} className="w-8 h-8 object-contain" />
//           <span>{exchange.name}</span>
//         </div>
//       )),
//     []
//   );

//   return (
//     <div
//       role="marquee"
//       aria-label="Top crypto exchanges ticker"
//       data-aos="zoom-in-up"
//       data-aos-delay="300"
//       data-aos-duration="400"
//       className="crypto-exchange-ticker overflow-hidden border-y border-opacity-20 border-[#8B95B7] mt-12 bg-[#1a1a2e]"
//     >
//       <div className="ticker-track flex gap-8 py-5 animate-scrollTicker">
//         {tickerContent}
//         {tickerContent /* duplicate for infinite scrolling */}
//       </div>
//     </div>
//   );
// }

// export default CryptoExchangeTicker;