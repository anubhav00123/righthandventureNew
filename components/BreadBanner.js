import React from "react";

const BreadBanner = ({title,backgroundImage}) => {
  return (
    <>
      <div
        className="section position-relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "70vh",
        }}
      >
        <div className="image-overlay" />
        <div
          className="r-container h-100 position-relative"
          style={{ zIndex: 2 }}
        >
          <div
            className="d-flex flex-column w-100 h-100 justify-content-center align-items-center mx-auto text-center text-white gap-3"
            style={{ maxWidth: 895 }}
          >
            <h1 className="font-1 m-0 text-white fw-semibold">{title}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadBanner;
