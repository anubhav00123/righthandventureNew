import React from "react";

const Partner = () => {
  return (
    <>
      <div className="bg-accent mt-5">
        <div className="r-container text-center">
          <h4 className="pt-3 pb-2">
            Join the team of successful clients who have trusted us with their
            business.
          </h4>
          <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
            {[
              "angrylabel.png",
              "animatrix.png",
              "untrain.png",
              "frshmoo.png",
            ].map((logo, index) => (
              <div className="col p-4 mb-3" key={index}>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={`image/companyLogo/${logo}`}
                    className={`logo-img ${index === 3 ? "mt-5" : ""}`}
                    alt="logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
