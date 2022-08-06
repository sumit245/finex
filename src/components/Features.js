import React from 'react';

export default function Features() {
  return (
    <div className="cryptos-feature-area section-padding-100-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center mx-auto">
              <h3 className="text-uppercase fw-bold">
                The World’s Fastest Growing Crypto App
              </h3>
              <div className="text-justify mx-5">
                <ul>
                  <li>
                    <h5 className="my-0 py-0">
                      <i
                        class="fa fa-check-circle mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      Join <span className="text-primary"> 50M+</span> users
                      buying and selling
                      <span className="text-primary">
                        {' '}
                        250+ cryptocurrencies at true cost
                      </span>
                    </h5>
                  </li>
                  <li>
                    <h5 className="my-0 py-0">
                      <i
                        class="fa fa-check-circle mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      Spend with the finexp.nl Visa Card and
                      <span className="text-primary"> get up to 5%</span> back
                    </h5>
                  </li>
                  <li>
                    <h5 className="my-0 py-0">
                      <i
                        class="fa fa-check-circle mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      Grow your portfolio by
                      <span className="text-primary">
                        {' '}
                        receiving rewards up to 14.5%
                      </span>{' '}
                      on your crypto assets
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Course Area */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="single-feature-area mb-100 text-center">
              <i className="icon-safebox" />
              <h3>Tax saver</h3>
              <p className="text-left">
                Lowest lock-ins. Simple withdrawals. Potentially better returns.
                ELSS is the new hero to save the day!
              </p>
              <a href="#" className="btn cryptos-btn">
                Explore ELSS Funds
              </a>
            </div>
          </div>
          {/* Single Course Area */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="single-feature-area mb-100 text-center">
              <i className="icon-bitcoin" />
              <h3>Remit</h3>
              <p className="text-left">
                Minimise your long term tax impact by realising up to ₹1 Lakh of
                Long Term Capital Gain (LTCG) every year with no tax
              </p>
              <a href="#" className="btn cryptos-btn">
                Start harvesting
              </a>
            </div>
          </div>
          {/* Single Course Area */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="single-feature-area mb-100 text-center">
              <i className="icon-exchange" />
              <h3>Trade Smart</h3>
              <p className="text-left mb-140">
                Switching away from commission laden regular mutual funds made
                easy.
              </p>
              <a href="#" className="btn cryptos-btn mt-4">
                Switch Today
              </a>
            </div>
          </div>
          {/* Single Course Area */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="single-feature-area mb-100 text-center">
              <i className="icon-wallet" />
              <h3>10% Secure</h3>
              <p className="text-left">
                A cheaper, faster & easier way to transfer your money and invest
                through Finexp.
              </p>
              <a href="#" className="btn cryptos-btn mt-4">
                Send Money
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
