import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="section pb-0 bg-accent">
          <div className="r-container">
            <div className="border-bottom">
              <div className="row row-cols-lg-2 row-cols-1">
                <div className="col col-lg-4 mb-3">
                  <div className="d-flex flex-column gap-3">
                    <img
                      src="image/companyLogo/venturesmall.png"
                      alt=""
                      className="img-fluid"
                      width={70}
                    />

                    <p className="text-color-2">
                      Empowering your business with innovative digital marketing
                      solutions for sustained growth and success.
                    </p>
                    <div className="social-container mb-lg-0 mb-3">
                      <a
                        href="https://www.facebook.com/"
                        className="social-item"
                      >
                        <i className="fa-brands fa-xs fa-facebook-f" />
                      </a>
                      <a
                        href="https://www.twitter.com/"
                        className="social-item"
                      >
                        <i className="fa-brands fa-xs fa-twitter" />
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        className="social-item"
                      >
                        <i className="fa-brands fa-xs fa-instagram" />
                      </a>
                      <a
                        href="https://www.youtube.com/"
                        className="social-item"
                      >
                        <i className="fa-brands fa-xs fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-8 mb-3">
                  <div className="row row-cols-lg-3 row-cols-1">
                    <div className="col mb-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="pb-2 w-max-content pe-3">
                          <h4 className="fw-semibold">Quick Links</h4>
                        </div>
                        <ul className="list gap-2">
                          <li>
                            <Link
                              href="/"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Homepage
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blogs"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Blogs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/contact"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="pb-2 w-max-content pe-3">
                          <h4 className="fw-semibold">Services</h4>
                        </div>
                        <ul className="list gap-2">
                          <li>
                            <Link
                              href="/details/webdevelopment"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/details/seo"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Search Engine Optimization
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/details/socialmedia"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Social Media Management
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/details/email"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Email Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/details/googleads"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Google Ads
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/details/metaads"
                              className="link d-flex flex-row gap-3 align-items-center"
                            >
                              Meta Ads
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="d-flex flex-column gap-3">
                        <div className="pb-2 w-max-content pe-3">
                          <h4 className="fw-semibold">Get In Touch</h4>
                        </div>
                        <ul className="list gap-3">
                          <li>
                            <span className="d-flex flex-row align-items-center gap-3">
                              <div className="contact-item">
                                <i className="fa-solid fa-2xs fa-location-dot" />
                              </div>
                              Shop No.99, Gaur City Mall, ID 28289
                            </span>
                          </li>
                          <li>
                            <span className="d-flex flex-row align-items-center gap-3">
                              <div className="contact-item">
                                <i className="fa-solid fa-2xs fa-phone" />
                              </div>
                              +91 8882786072
                            </span>
                          </li>
                          <li>
                            <span className="d-flex flex-row align-items-center gap-3">
                              <div className="contact-item">
                                <i className="fa-solid fa-2xs fa-envelope" />
                              </div>
                              support@RHV.com
                            </span>
                          </li>
                          <li>
                            <span className="d-flex flex-row align-items-center gap-3">
                              <div className="contact-item">
                                <i className="fa-solid fa-2xs fa-globe" />
                              </div>
                              www.righthandventure.com
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-xl-row flex-column gap-3 justify-content-between py-3">
              <span className="text-center fs-6">
                Copyright © {currentYear} Right Hand Venture. All Rights
                Reserved.
              </span>
              <a href="#" className="text-center text-color fs-6">
                Privacy &amp; Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
