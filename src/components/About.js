import React from 'react';

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
                  Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi.
                  Donec et sollicitudin est, in euismod erat. Ut at erat et arcu
                  pulvinar cursus a eget nisl.
                </h5>
                <p>
                  Cras vitae turpis lacinia, lacinia lacus non, fermentum nisi.
                  Donec et sollicitudin est, in euismod erat. Ut at erat et arcu
                  pulvinar cursus a eget nisl. Cras vitae turpis lacinia,
                  lacinia lacus non, fermentum nisi.
                </p>
                <a href="#" className="btn cryptos-btn mt-30">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
