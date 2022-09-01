import React from 'react';
import { Link } from 'react-router-dom';
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
                    Welcome to <span>Finexp</span>
                  </p>
                </div>
                {/* Top Login & Faq & Earn Monery btn */}
                <div className="login-faq-earn-money">
                  <Link to="/login">Login | Register</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/earn" className="active">
                    Earn Money
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Area */}
      <div className="cryptos-main-menu mt-5">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            {/* Menu */}

            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 ">
                {/* Logo */}
                <Link className="nav-brand" to="/">
                  <img src={require('../assets/img/logo.png')} alt="" />
                </Link>
              </div>
              <div className="col-6 col-sm-3 col-md-3 ">
                {/* Nav Start */}
                <div className="classynav">
                  <ul>
                    <li>
                      <Link to="/invest">Invest</Link>
                    </li>
                    <li>
                      <Link to="/remit">Remit</Link>
                    </li>
                    <li>
                      <Link to="/features">Features</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-3 col-md-3">
                {/* Newsletter Form */}
                <form action="#" method="post" className="d-flex mat-4">
                  <input
                    className="form-control subscribeField "
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Newsletter"
                  />
                  <button
                    type="submit"
                    className="subscribeField header-newsletter-form "
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

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

              {/* Nav End */}
            </div>
            {/* </nav> */}
          </div>
        </div>
      </div>
    </header>
  );
}
