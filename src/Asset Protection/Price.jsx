// src/components/CryptoPriceFooter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPriceFooter = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 20,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching top coins:', error);
      }
    };

    fetchTopCoins();
    const interval = setInterval(fetchTopCoins, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const tickerContent = coins.map((coin) => (
    <div key={coin.id} className="ticker-item">
      <img
        src={coin.image}
        alt={coin.name}
        width="20"
        height="20"
        style={{ marginRight: '10px' }}
      />
      {coin.name} (${coin.symbol.toUpperCase()}): ${coin.current_price.toFixed(2)}
    </div>
  ));

  return (
    <div className="crypto-price-footer">
      <div className="ticker-track">
        {tickerContent}
        {tickerContent /* Duplicate for smooth scrolling */}
      </div>
    </div>
  );
};

export default CryptoPriceFooter;
