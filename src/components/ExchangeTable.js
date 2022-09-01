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
      'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=15&order=market_cap_desc',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let exchangeData = response;
        let flecoin = {
          image: 'https://flecoin.biz/assets/img/flecoin.png',
          name: 'FLECoin',
          symbol: 'FLC',
          price_change_percentage_24h: ((0.013 - 0.01) / 0.013) * 100,
          total_volume: 223500,
          current_price: 0.013,
          high_24h: 0.013,
          low_24h: 0.01,
          market_cap: 1000000,
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
      <div className="table-responsive">
        <table className="table my-4">
          <thead>
            <tr>
              <td className="text-justify mx-4">Coin</td>
              <td className="col-sm-12"></td>
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
                <td
                  className="py-0 pr-4 pl-1 justify-content-start"
                  colSpan={2}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={row.image}
                      className="rounded mx-1"
                      style={{ height: 20, width: 20 }}
                      alt="icon"
                    />
                    <div className="flex-auto">
                      <div className="row">
                        <span
                          className="fw-bold col-sm-12"
                          style={{ fontSize: '0.8rem' }}
                        >
                          {row.name}
                        </span>
                        <small
                          className="text-uppercase col-sm-12"
                          style={{ fontSize: '0.8rem' }}
                        >
                          {row.symbol}
                        </small>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4">${row.current_price}</td>
                <td className="px-4">${row.high_24h}</td>
                <td className="px-4">${row.low_24h}</td>
                <td
                  style={{
                    color:
                      row.price_change_percentage_24h > 0 ? 'green' : 'red',
                  }}
                  className="px-4"
                >
                  {parseFloat(row.price_change_percentage_24h).toFixed(1)}%
                </td>
                <td className="px-4">${row.total_volume}</td>

                <td className="px-4">${row.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
