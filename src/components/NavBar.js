import React from 'react';

export default function NavBar() {
  return (
    <header className="header-area">
      {/* Top Header Area */}
      <div className="top-header">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100">
              <div className="top-header-content h-100 d-flex align-items-center justify-content-between">
                {/* Top Headline */}
                <div className="top-headline">
                  <p>
                    Welcome to <span>Cryptos</span>
                  </p>
                </div>
                {/* Top Login & Faq & Earn Monery btn */}
                <div className="login-faq-earn-money">
                  <a href="#">Login | Register</a>
                  <a href="#">FAQ</a>
                  <a href="#" className="active">
                    Earn Money
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Area */}
      <div className="cryptos-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            {/* Menu */}
            <nav
              className="classy-navbar justify-content-between"
              id="cryptosNav"
            >
              {/* Logo */}
              <a className="nav-brand" href="index.html">
                <img src={require('../assets/img/logo.png')} alt="" />
              </a>
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              {/* Menu */}
              <div className="classy-menu">
                {/* close btn */}
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Nav Start */}
                <div className="classynav">
                  <ul>
                    <li>
                      <a href="index.html">Invest</a>
                    </li>
                    <li>
                      <a href="#">Remit</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                  </ul>
                  {/* Newsletter Form */}
                  <div className="header-newsletter-form">
                    <form action="#" method="post">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Newsletter"
                      />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
                {/* Nav End */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
