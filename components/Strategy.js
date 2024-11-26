import Link from "next/link";
import React from "react";

const Strategy = () => {
  return (
    <>
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col col-xl-7 mb-3">
              <div className="d-flex flex-column gap-3 pe-xl-5">
                <div className="linear-gradient">
                  <span className="text-white">Our Project</span>
                </div>
                <h3 className="fw-bold">
                  Igniting Growth Through Strategic Digital
                </h3>
                <p className="text-color-2">
                  In today's digital-centric world, businesses need to adopt
                  innovative strategies to stand out amidst the online noise.
                  Digital marketing techniques to enhance their visibility,
                  engagement, and ultimately, their bottom line.
                </p>
                <Link href="/ourwork">
                  <div className="d-flex flex-row gap-3 align-items-center">
                    <div className="icon-box-2">
                      <i className="fa-solid fa-arrow-right" />
                    </div>
                    <span className="text-color fs-5">
                      Optimizing Social Media Advertising for Increased Brand
                    </span>
                  </div>
                </Link>
                <Link href="/ourwork">
                  <div className="d-flex flex-row gap-3 align-items-center">
                    <div className="icon-box-2">
                      <i className="fa-solid fa-arrow-right" />
                    </div>
                    <span className="text-color fs-5">
                      Data Analytics Dashboard for Marketing Insights
                    </span>
                  </div>
                </Link>
                <Link href="/ourwork">
                  <div className="d-flex flex-row gap-3 align-items-center">
                    <div className="icon-box-2">
                      <i className="fa-solid fa-arrow-right" />
                    </div>
                    <span className="text-color fs-5">
                      Influencer Marketing Platform
                    </span>
                  </div>
                </Link>
                <Link href="/ourwork">
                  <div className="d-flex flex-row gap-3 align-items-center">
                    <div className="icon-box-2">
                      <i className="fa-solid fa-arrow-right" />
                    </div>
                    <span className="text-color fs-5">
                      Augmented Reality (AR) Marketing Campaigns
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col col-xl-5">
              <div className="d-flex flex-column gap-3 mb-3">
                <img
                  src="image/image-1920x1280-25.jpg"
                  alt=""
                  className="img-fluid rounded-4"
                  width="100%"
                />
                <div className="d-flex flex-column gap-1">
                  <h4>Data-Driven Digital Marketing</h4>
                  <p className="text-color-2">
                    Each business is unique, and one-size-fits-all approaches
                    rarely deliver exceptional results. The best SEO agencies
                    take the time to understand their clients' specific goals.
                  </p>
                </div>
                <div>
                  <Link href="/ourwork" className="btn btn-accent px-5 py-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategy;
