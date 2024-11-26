import React from "react";

const Counter = () => {
  return (
    <>
      <div className="pt-0 section">
        <div className="r-container">
          <div className="row row-cols-xl-4 row-cols-1 text-center">
            <div className="col mb-3">
              <h2 className="fw-bold accent-color-2 outline">20+</h2>
              <h4>Years Experience</h4>
            </div>
            <div className="col mb-3">
              <h2 className="fw-bold accent-color-2 outline">250+</h2>
              <h4>Statisfied Customers</h4>
            </div>
            <div className="col mb-3">
              <h2 className="fw-bold accent-color-2 outline">5+</h2>
              <h4>Branch Office</h4>
            </div>
            <div className="col mb-3">
              <h2 className="fw-bold accent-color-2 outline">80+</h2>
              <h4>Partner Company</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
