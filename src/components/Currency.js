import React, { useState, useEffect } from 'react';

export default function Currency() {
  const [currency_1, setCurrencyOne] = useState([]);
  const [currency_2, setCurrencyTwo] = useState([]);
  const fetchDataFromApi = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c68988b5d5msh5aeb7662f070019p1d530ajsnd9b993c6dda3',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
      },
    };

    fetch('https://coingecko.p.rapidapi.com/exchange_rates', options)
      .then((response) => response.json())
      .then((response) => {
        console.log(Object.keys(response.rates));
        setCurrencyOne(Object.keys(response.rates));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    let component = true;
    if (component) {
      fetchDataFromApi();
    }

    return () => {
      component = false;
    };
  }, []);

  return (
    <section className="currency-calculator-area section-padding-100 bg-img bg-overlay">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center white mx-auto">
              <h3 className="mb-4">Cryptocurrency Calculator</h3>
              <h5 className="mb-2">
                
              </h5>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="currency-calculator mb-15 clearfix">
              <form
                action="#"
                method="post"
                className="d-flex align-items-center justify-content-center"
              >
                {/* Calculator Part */}
                <div className="calculator-first-part d-flex align-items-center">
                  <input type="text" name="inputNumber" placeholder={1} />
                  <select>
                    {Array.isArray(currency_1) &&
                      currency_1.map((currency, key) => (
                        <option key={key} className="text-uppercase" value={currency}>
                          {currency}
                        </option>
                      ))}
                  </select>
                </div>
                {/* Equal Sign */}
                <div className="equal-sign">=</div>
                {/* Calculator Part */}
                <div className="calculator-sec-part d-flex align-items-center">
                  <input type="text" name="inputNumber" placeholder={940045} />
                  <select>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>INR</option>
                    <option>BDT</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="currency-calculator mb-15">
              <form
                action="#"
                method="post"
                className="d-flex align-items-center justify-content-center"
              >
                {/* Calculator Part */}
                <div className="calculator-first-part d-flex align-items-center">
                  <input type="text" name="inputNumber" placeholder={10400} />
                  <select>
                    <option>USD</option>
                    <option>BTC</option>
                    <option>INR</option>
                    <option>BDT</option>
                  </select>
                </div>
                {/* Equal Sign */}
                <div className="equal-sign">=</div>
                {/* Calculator Part */}
                <div className="calculator-sec-part d-flex align-items-center">
                  <input type="text" name="inputNumber" placeholder="1.02" />
                  <select>
                    <option>BTC</option>
                    <option>USD</option>
                    <option>INR</option>
                    <option>BDT</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
