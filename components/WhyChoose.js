import React from "react";

const WhyChoose = () => {
  return (
    <>
      <div className="section bg-accent">
        <div className="r-container">
          <div className="row row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col col-xl-5 ps-0 mt-5 mb-5">
              <div className="position-relative ps-xl-0 ps-0 mb-3">
                <div className="mt-0 px-lg-5 px-xl-5 px-3">
                  <img
                    src="image/Digital-Marketing-2.png"
                    alt=""
                    className="img-fluid rounded-4"
                    width="100%"
                  />
                </div>
              </div>
            </div>
            <div className="col col-xl-7 px-4">
              <div className="d-flex flex-column gap-3 pe-xl-5 text-center text-xl-start align-items-center align-items-xl-start">
                <div className="linear-gradient">
                  <span className="text-white">Why Choose Us</span>
                </div>
                <h3 className="fw-bold">
                  Pioneering the Future of Digital Marketing
                </h3>
                <p className="text-color-2">
                  Our expert team collaborates closely with startups. We discuss
                  a client's content marketing strategy.
                </p>
                <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
                  <div>
                    <i className="fa-solid fa-circle-check fa-xl accent-color mt-3 " />
                  </div>
                  <div className="d-flex flex-column">
                    <h4>Strict Non Disclosure Agreement</h4>
                    <span className="text-color-2">
                      We take your privacy and security very seriously.
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
                  <div>
                    <i className="fa-solid fa-circle-check fa-xl accent-color-4 mt-3 " />
                  </div>
                  <div className="d-flex flex-column">
                    <h4>A Single Point of Contact</h4>
                    <span className="text-color-2">
                      Dedicated Account Manager for single point of contact.
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
                  <div>
                    <i className="fa-solid fa-circle-check fa-xl accent-color-2 mt-3 " />
                  </div>
                  <div className="d-flex flex-column">
                    <h4>Quality Assurance Excellence</h4>
                    <span className="text-color-2">
                      Industry Leading Quality Assurance Process.
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-xl-row flex-column gap-3 px-4 align-items-center">
                  <div>
                    <i className="fa-solid fa-circle-check fa-xl text-color mt-3 " />
                  </div>
                  <div className="d-flex flex-column">
                    <h4>Flexible Contracts</h4>
                    <span className="text-color-2">
                      Tailored agreements to suit your needs.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
