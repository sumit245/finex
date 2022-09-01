import React, { useEffect, useState } from 'react';

export default function Blog() {
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
      'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=10&order=market_cap_desc',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let exchangeData = response;
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
    <section className="cryptos-blog-area section-padding-100">
      <div className="container">
        <div className="my-4">
          <h5>Why fimex</h5>
          <h4 className="fw-bold">Because, your best interest is ours too.</h4>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <div className="blog-area">
              {/* Single Blog Area */}
              <div className="single-blog-area d-flex align-items-start">
                {/* Thumbnail */}
                <div className="blog-thumbnail">
                  <img src={require('../assets/img/1.jpg')} alt="" />
                </div>
                {/* Content */}
                <div className="blog-content">
                  <a href="#" className="post-title">
                    This Platform Aims to Disrupt the Market
                  </a>
                  <div className="meta-data">
                    <a href="#">Crypto News</a> |<a href="#">March 18, 2018</a>
                  </div>
                  <p>
                    We are data driven ex-money managers & technologists. We
                    know how to make financial management easy.
                  </p>
                </div>
              </div>
              {/* Single Blog Area */}
              <div className="single-blog-area d-flex align-items-start">
                {/* Thumbnail */}
                <div className="blog-thumbnail">
                  <img src={require('../assets/img/2.jpg')} alt="" />
                </div>
                {/* Content */}
                <div className="blog-content">
                  <a href="#" className="post-title">
                    New Hedge Funds invests in Crypto
                  </a>
                  <div className="meta-data">
                    <a href="#">Crypto News</a> |
                    <a href="#">October 30, 2020</a>
                  </div>
                  <p>
                    We employ the latest security protocols & partner with
                    reputable institutions to keep your money safe.
                  </p>
                </div>
              </div>
              {/* Single Blog Area */}
              <div className="single-blog-area d-flex align-items-start">
                {/* Thumbnail */}
                <div className="blog-thumbnail">
                  <img src={require('../assets/img/3.jpg')} alt="" />
                </div>
                {/* Content */}
                <div className="blog-content">
                  <a href="#" className="post-title">
                    Only Direct Plans
                  </a>
                  <div className="meta-data">
                    <a href="#">Crypto News</a> |<a href="#">March 18, 2018</a>
                  </div>
                  <p>
                    We offer Direct Plans. So you never pay the commissions (up
                    to 1.5%) that you would in a Regular Plan. That adds up, up
                    to 35% more in just 20 years!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="cryptos-prices-table">
              {/* Single Price Table */}
              {Array.isArray(data) &&
                data.map((item, key) => (
                  <div
                    className="single-price-table d-flex align-items-center justify-content-between"
                    key={key}
                  >
                    <div className="p-content d-flex align-items-center">
                      <span>{key + 1}</span>
                      <img
                        src={item.image}
                        alt=""
                        className="rounded mx-1"
                        style={{ height: 20, width: 20 }}
                      />
                      <p>
                        {item.name}{' '}
                        <span className="text-uppercase">{item.symbol}</span>
                      </p>
                    </div>
                    <div className={`price ${item.price_change_percentage_24h > 0 ? 'increase' : 'decrease'}`}>
                      <p>${parseFloat(item.current_price).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Area */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletter-area mt-100">
              <div className="section-heading text-center mx-auto">
                <h4>
                  Be the first to know about crypto news every day Subscribe to{' '}
                  <span className="fw-bold">Newsletter</span>
                </h4>
                <h6>
                  Get crypto analysis, news and updates right to your inbox!
                  Sign up here so you don't miss a single newsletter.
                </h6>
              </div>
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Subscribe to newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
