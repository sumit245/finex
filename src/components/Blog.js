import React from 'react';

export default function Blog() {
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
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>01</span>
                  <img src={require('../assets/img/bitcoin.png')} alt="" />
                  <p>
                    Bitcoin <span>BTC</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$12 456.78</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>02</span>
                  <img src={require('../assets/img/ethereum.png')} alt="" />
                  <p>
                    Ethereum <span>ETH</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$1051.98</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>03</span>
                  <img src={require('../assets/img/bitcoin-cash.png')} alt="" />
                  <p>
                    Bitcoin Cash <span>BCH</span>
                  </p>
                </div>
                <div className="price decrease">
                  <p>$2256.78</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>04</span>
                  <img src={require('../assets/img/ripple.png')} alt="" />
                  <p>
                    Ripple <span>XRP</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$2.03</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>05</span>
                  <img src={require('../assets/img/litecoin.png')} alt="" />
                  <p>
                    Litecoin <span>LTC</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$321.98</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>06</span>
                  <img src={require('../assets/img/cardano.png')} alt="" />
                  <p>
                    Cardano <span>ADA</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$0.75</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>07</span>
                  <img src={require('../assets/img/nem.png')} alt="" />
                  <p>
                    NEM <span>XEM</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$0.89</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>08</span>
                  <img src={require('../assets/img/neo.png')} alt="" />
                  <p>
                    NEO <span>NEO</span>
                  </p>
                </div>
                <div className="price decrease">
                  <p>$123.90</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>09</span>
                  <img src={require('../assets/img/stellar.png')} alt="" />
                  <p>
                    Stellar <span>XLM</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$0.67</p>
                </div>
              </div>
              {/* Single Price Table */}
              <div className="single-price-table d-flex align-items-center justify-content-between">
                <div className="p-content d-flex align-items-center">
                  <span>10</span>
                  <img src={require('../assets/img/iota.png')} alt="" />
                  <p>
                    IOTA <span>IOT</span>
                  </p>
                </div>
                <div className="price increase">
                  <p>$3.55</p>
                </div>
              </div>
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
