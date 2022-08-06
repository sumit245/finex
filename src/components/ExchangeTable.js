import React, { useEffect, useState } from 'react';
import 'react-bootstrap';

export default function ExchangeTable() {
  const [data, setData] = useState([]);
  const fetchDataFromApi = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c68988b5d5msh5aeb7662f070019p1d530ajsnd9b993c6dda3',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
      },
    };
    fetch(
      'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let exchangeData = response;
        exchangeData.length = 14;
        let flecoin = {
          image: 'https://flecoin.biz/assets/img/flecoin.png',
          name: 'FLECoin',
          symbol: 'FLC',
          price_change_percentage_24h: 1.3456,
          total_volume: 223500,
          current_price: 0.1456,
          market_cap: 102239,
        };
        exchangeData.push(flecoin);
        setData(exchangeData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    let componentMounted = true;
    if (componentMounted) {
      setInterval(fetchDataFromApi(), 1000);
    }
    return () => {
      componentMounted = false;
      clearInterval();
    };
  }, [data]);

  return (
    <div className="container">
      <div className="my-4">
        <h3>Cryptocurrency Prices by Market Cap</h3>
        <p>The global cryptocurrency market cap today is $1.11 Trillion</p>
      </div>
      <table className="table table-dark my-4">
        <thead>
          <tr>
            <td className="text-justify mx-4">Coin</td>
            <td>Price</td>
            <td>High 24H</td>
            <td>Low 24H</td>
            <td>Change 24H</td>
            <td>Volume</td>
            <td>Mkt Cap</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, key) => (
            <tr key={key}>
              <td>
                <img
                  src={row.image}
                  className="rounded mx-1"
                  style={{ height: 20, width: 20 }}
                  alt="icon"
                />
                <span>
                  <span className="mx-1">{row.name}</span>
                  <small className="mx-1 text-uppercase mb-1">
                    {row.symbol}
                  </small>
                </span>
              </td>
              <td>${row.current_price}</td>
              <td>${row.high_24h}</td>
              <td>${row.low_24h}</td>
              <td
                style={{
                  color: row.price_change_percentage_24h > 0 ? 'green' : 'red',
                }}
              >
                {parseFloat(row.price_change_percentage_24h).toFixed(4)}%
              </td>
              <td>${row.total_volume}</td>

              <td>${row.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
