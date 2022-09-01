import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="cryptos-about-area my-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="about-thumbnail mb-100">
              <img src={require('../assets/img/about.png')} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="about-content mb-100">
              <div className="section-heading">
                <h3>
                  Let’s change <br />
                  <span>the world</span> together
                </h3>
                <h5>
                  Adding new dimension to financial market crypto had offered and revealed a new world of opportunity
                  </h5>
                <p>
                  Cryto as a product had made new vibes ruling the rules as per market flows so go grab right move</p>
                <Link to="/" className="btn cryptos-btn mt-30">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
