import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="section position-relative ps-0">
        <div className="floating-banner">
          <img
            src="image/image-1920x1280-19.jpg"
            alt=""
            className="img-fluid"
            style={{
              borderTopRightRadius: "30em",
              borderBottomRightRadius: "30em",
            }}
          />
        </div>
        <div className="r-container ps-4 ps-xl-0">
          <div className="row row-cols-lg-2 row-cols-1 align-items-center">
            <div className="col"></div>
            <div className="col ps-4 pe-0">
              <div className="d-flex flex-column gap-4">
                {/* <div className="linear-gradient">
                  <span className="text-white">Welcome to Righthandventure</span>
                </div> */}
                <h1 className="fw-semibold">
                  Digital Marketing Power for Your Brand
                </h1>
                <p>
                  Transforming ideas into Market Success: Our team of passionate
                  developers and designers leverage the latest technologies and
                  frameworks to build beautiful, innovative products. We don't
                  just create,we captivate - turning your vision into a market
                  sensation
                </p>
                <div className="d-flex flex-row gap-4">
                  <Link href="/contact" className="btn btn-accent px-5 py-3">
                    Contact Us
                  </Link>
                  {/* <button
                    type="button"
                    className="request-loader"
                    data-bs-toggle="modal"
                    data-bs-target="#e119"
                  >
                    <i className="fa-solid fa-play ms-1" />
                  </button> */}
                  {/* <div
                    className="modal fade"
                    id="e119"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content bg-dark-color">
                        <iframe
                          className="ifr-video"
                          src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="overflow-hidden w-100 mt-5">
                  <div className="swiper swiperPartner">
                    <div className="swiper-wrapper mb-4">
                      <div className="swiper-slide">
                        <div className="d-flex justify-content-center">
                          <img
                            src="image/Logo-1.png"
                            className="img-fluid"
                            alt="image"
                            width="100%"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="d-flex justify-content-center">
                          <img
                            src="image/Logo-2.png"
                            className="img-fluid "
                            alt="image"
                            width="100%"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="d-flex justify-content-center">
                          <img
                            src="image/Logo-3.png"
                            className="img-fluid"
                            alt="image"
                            width="100%"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="d-flex justify-content-center">
                          <img
                            src="image/Logo-4.png"
                            className="img-fluid"
                            alt="image"
                            width="100%"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="d-flex justify-content-center">
                          <img
                            src="image/Logo-3.png"
                            className="img-fluid"
                            alt="image"
                            width="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
