import React from 'react'

export default function Hero() {
  return (
    <section className="hero-area">
      <div className="hero-slides owl-carousel">
        {/* Single Hero Slide */}
        <div className="single-hero-slide">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-md-7">
                <div className="hero-slides-content">
                  <h2 data-animation="fadeInUp" data-delay="100ms">
                    Take a step into the <span>Crypto World</span>
                  </h2>
                  <h6 data-animation="fadeInUp" data-delay="400ms">
                    Cras vitae turpis lacinia, lacinia lacus non, fermentum
                    nisi. Donec et sollicitudin est, in euismod erat. Ut at erat
                    et arcu pulvinar.
                  </h6>
                  <a
                    href="#"
                    className="btn cryptos-btn"
                    data-animation="fadeInUp"
                    data-delay="700ms"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div
                  className="hero-slides-thumb"
                  data-animation="fadeInUp"
                  data-delay="1000ms"
                >
                  <img src={require('../assets/img/bg-2.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Hero Slide */}
        <div className="single-hero-slide">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-md-7">
                <div className="hero-slides-content">
                  <h2 data-animation="fadeInUp" data-delay="100ms">
                    Take a step into the <span>Crypto World</span>
                  </h2>
                  <h6 data-animation="fadeInUp" data-delay="400ms">
                    Cras vitae turpis lacinia, lacinia lacus non, fermentum
                    nisi. Donec et sollicitudin est, in euismod erat. Ut at erat
                    et arcu pulvinar.
                  </h6>
                  <a
                    href="#"
                    className="btn cryptos-btn"
                    data-animation="fadeInUp"
                    data-delay="700ms"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div
                  className="hero-slides-thumb"
                  data-animation="fadeInUp"
                  data-delay="1000ms"
                >
                  <img src={require('../assets/img/bg-2.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
