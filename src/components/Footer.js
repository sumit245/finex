import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-area">
      {/* Main Footer Area */}
      <div
        className="main-footer-area section-padding-100-0 bg-img bg-overlay"
        style={{ backgroundImage: 'url(img/bg-img/bg-1.jpg)' }}
      >
        <div className="container">
          <div className="row">
            {/* Footer Widget Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="footer-widget mb-100">
                <div className="widget-title">
                  <a href="#">
                    <img src="img/core-img/logo2.png" alt="" />
                  </a>
                </div>
                <p>
                  Morbi vel arcu gravida, iaculis lacus vel, posuere ipsum. Sed
                  faucibus mauris vitae urna consectetur, sit amet maximus nisl
                  sagittis. Ut in iaculis enim, et pulvinar mauris. Etiam
                  tristique magna eget velit consectetur, a tincidunt velit
                  dictum.
                </p>
                <div className="footer-social-info">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            {/* Footer Widget Area */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="footer-widget mb-100">
                <div className="widget-title">
                  <h6>Recent Posts</h6>
                </div>
                {/* Single Blog Post */}
                <div className="single--blog-post">
                  <a href="#">
                    <p>Aliquam ac eleifend metus</p>
                  </a>
                  <span>March 10, 2018</span>
                </div>
                {/* Single Blog Post */}
                <div className="single--blog-post">
                  <a href="#">
                    <p>Donec in libero sit amet mi vulputate</p>
                  </a>
                  <span>March 10, 2018</span>
                </div>
                {/* Single Blog Post */}
                <div className="single--blog-post">
                  <a href="#">
                    <p>Aliquam ac eleifend metus</p>
                  </a>
                  <span>March 10, 2018</span>
                </div>
              </div>
            </div>
            {/* Footer Widget Area */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-widget mb-100">
                <div className="widget-title">
                  <h6>Quick Links</h6>
                </div>
                <nav>
                  <ul className="useful-links d-flex justify-content-between flex-wrap">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Newsletter &amp; Exchange</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Exchange</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer Area */}
      <div className="bottom-footer-area">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | Designed and developed with
                love
                <i className="fa fa-heart-o" aria-hidden="true" /> by
                <a href="https://colorlib.com" target="_blank">
                  Decide Precise Technologies
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
