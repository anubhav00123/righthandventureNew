import Link from "next/link";
import React from "react";

const EstateServices = () => {
  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-center align-items-center mb-2">
        <div className="linear-gradient">
          <span className="text-white">Realatte</span>
        </div>
      </div>

      <div className="text-center">
        <h3 className="fw-semibold">Real Estate Experts</h3>
        <p className="text-color-2 estate-card-para">
          Realatte engrid strong reality domain expertise of over 10+
          years. We implement smart customer acquisition strategies for
          different types of projects. With our custom optimization
          algorithms and advanced dashboards, we deliver leads, site visits,
          and bookings at low costs!
        </p>
      </div>

      {/* 3 cards in a row */}
      <div className="row mt-4">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card-wrapper">
            <div className="estate-service-card">
              <img src="/image/analyze.jpg" alt="Analyzing" />
            </div>
            <h4>High-End Anaylizing</h4>
            <h6 className="text-color-2">
              Data analytics with real time tracking and optimization
            </h6>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <div className="card-wrapper">
            <div className="estate-service-card">
              <img src="/image/track.jpg" alt="Track Record" />
            </div>
            <h4>Excellence Track Record</h4>
            <h6 className="text-color-2">
              More than 100+ brands successfully managed.
            </h6>
          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <div className="card-wrapper">
            <div className="estate-service-card">
              <img src="/image/support.jpg" alt="Support" />
            </div>
            <h4>Our Dedicated Support</h4>
            <h6 className="text-color-2">
              Process that ensures excellent turn around.
            </h6>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link href="/services" className="btn btn-accent px-5 py-3 rounded-pill">
          All Services
        </Link>
      </div>
    </div>
  );
};

export default EstateServices;
