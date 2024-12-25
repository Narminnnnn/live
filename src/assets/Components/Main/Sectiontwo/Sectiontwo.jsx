import React from "react";
import "./Sectiontwo.css";

const Sectiontwo = () => {
  return (
    <section className="twoSec">
      <div className="main-banner-two">
        <div className="container-two">
          <div className="alltext-two">
            <div className="text-two">
              <h2>
                {" "}
                We Provide<em>Different Services</em> &
                <br />
                <span>Features</span>
                For Your Agency
              </h2>
              <div className="line"></div>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doers eiusmod.
              </p>

              <div className="allkart">
                <div className="stepPart">
                  <div className="kart">
                    <div className="iconKart">
                      <img
                        src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-01.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Discover More on current SEO Trends </h3>
                  </div>
                  <div className="kart">
                    <div className="iconKart">
                      <img
                        src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-02.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Real-Time Big Data Analysis</h3>
                  </div>
                </div>
                <div className="stepPart">
                  <div className="kart">
                    <div className="iconKart">
                      <img
                        src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-03.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Precise Data Analysis & Prediction </h3>
                  </div>
                  <div className="kart">
                    <div className="iconKart">
                      <img
                        src="https://templatemo.com/templates/templatemo_582_tale_seo_agency/assets/images/services-04.jpg"
                        alt=""
                      />
                    </div>
                    <h3>SEO Marketing & Social Media</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
