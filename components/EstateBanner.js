import Link from "next/link";
import React from "react";

const EstateBanner = () => {
  return (
    <>
      <div
        className="section bg-attach-fixed" style={{backgroundColor: "#fffaf4" }}
      >
        <div
          className="r-container position-relative py-5"
          style={{ zIndex: 2 }}
        >
          <div className="container text-center">
            <h2 className="fw-bold">Results That Speak for Themselves</h2>
            <p className="text-color-2">
              Partner with a trusted real estate digital marketing agency to
              achieve measurable results.
            </p>

            {/* Statistics Section */}
            <div className="row mt-4">
              <div className="col-md-3 col-sm-6">
                <div className="stats-box">
                  <h3>200000+</h3>
                  <p>Leads Generated</p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="stats-box">
                  <h3>10000+</h3>
                  <p>Site Visits Arranged</p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="stats-box">
                  <h3>1000+</h3>
                  <p>Bookings Achieved</p>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="stats-box">
                  <h3>500+</h3>
                  <p>Cr. Revenue Generated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateBanner;
