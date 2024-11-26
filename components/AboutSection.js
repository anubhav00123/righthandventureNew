import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="section pt-0">
        <div className="r-container">
          <div className="row row-cols-lg-2 row-cols-1 align-items-center">
            <div className="col px-4">
              <div className="d-flex flex-column gap-4 pe-lg-3 border-bottom border-1 border-dark pb-5 align-items-center align-items-xl-start">
                <div className="linear-gradient">
                  <span className="text-white">About Us</span>
                </div>
                <h3 className="font-1 fw-bold">
                  Join Our Journey of Digital Discovery
                </h3>
                <p className="text-color-2">
                  What sets us unique? Our focus on excellence, transparency,
                  and collaboration. We build lasting relationships by
                  understanding your business and delivering tailored,
                  data-driven services, not generic solutions. Partner with us
                  for a team invested in your success.
                </p>
                <div className="d-flex flex-row gap-3">
                  <Link href="/about" className="btn btn-accent px-5 py-3">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row py-3 justify-content-between justify-content-xl-between justify-content-md-around text-center">
                <div className="pb-3">
                  <h2 className="font-1 fw-bold outline">10+</h2>
                  <span>Years Experience</span>
                </div>
                <div className="pb-3">
                  <h2 className="font-1 fw-bold outline">200+</h2>
                  <span>Statisfied Customers</span>
                </div>
                <div className="pb-3">
                  <h2 className="font-1 fw-bold outline">50+</h2>
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
            <div className="col ps-0 mt-5">
              <div className="col position-relative ps-lg-0 ps-0 mb-3">
                <div className="mb-5 px-5">
                  <img
                    src="image/Digital-Marketing-3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
