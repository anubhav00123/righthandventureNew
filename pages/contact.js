import BreadBanner from "@/components/BreadBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const contact = () => {
  return (
    <>
      <Navbar />
      <BreadBanner
        title="Contact Us"
        backgroundImage="/image/image-1920x1280-13.jpg"
      />
      <div className="section">
        <div className="r-container">
          <div className="d-flex justify-content-center">
            <div className="row row-cols-xl-2 row-cols-1 d-flex align-items-center">
              <div className="col mb-3">
                <div className="d-flex flex-column gap-3 h-100 justify-content-center pe-xl-5">
                  <div className="d-flex flex-column gap-3">
                    <div className="linear-gradient">
                      <span className="text-white">Get In Touch</span>
                    </div>
                    <h3 className="fw-semibold">
                      Consultation with Marketing Experts
                    </h3>
                    <p className="text-color-2">
                      Whether it's an initial consultation or a follow-up
                      meeting to discuss strategy, the appointment process plays
                      a pivotal role in shaping client relationships and driving
                      business growth.
                    </p>
                  </div>
                  <hr />
                  <div className="d-flex flex-column gap-3">
                    <div className="pb-2 w-max-content pe-3">
                      <h4 className="fw-semibold">Contact Us</h4>
                    </div>
                    <div className="row row-cols-xl-2 row-cols-1">
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-location-dot" />
                          </div>
                          Shop No.99, Gaur City Mall, ID 28289
                        </span>
                      </div>
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-phone" />
                          </div>
                          +91 8882786072
                        </span>
                      </div>
                    </div>
                    <div className="row row-cols-xl-2 row-cols-1">
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-envelope" />
                          </div>
                          support@RHV.com
                        </span>
                      </div>
                      <div className="col mb-3">
                        <span className="d-flex flex-row gap-3">
                          <div className="contact-item">
                            <i className="fa-solid fa-2xs fa-globe" />
                          </div>
                          www.righthandventure.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column gap-4 px-lg-4 px-0">
                  <div className="position-relative">
                    <div
                      className="success_msg toast align-items-center w-100 shadow-none mb-3 border border-success rounded-pill my-4"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="d-flex p-2">
                        <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                          <i className="fa-solid fa-check f-36 text-success" />
                          Your Message Successfully Send.
                        </div>
                        <button
                          type="button"
                          className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        >
                          <i className="fa-solid fa-xmark" />
                        </button>
                      </div>
                    </div>
                    <div
                      className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 my-4 border rounded-pill"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="d-flex p-2">
                        <div className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                          <i className="fa-solid fa-triangle-exclamation f-36 text-danger" />
                          Something Wrong ! Send Form Failed.
                        </div>
                        <button
                          type="button"
                          className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        >
                          <i className="fa-solid fa-xmark" />
                        </button>
                      </div>
                    </div>
                    <div className="w-100">
                      <div>
                        <form
                          className="d-flex flex-column h-100 justify-content-center w-100 needs-validation form"
                          noValidate=""
                        >
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control py-3 px-4"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                              required=""
                            />
                            <div className="invalid-feedback">
                              The field is required.
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="row row-cols-xl-2 row-cols-1">
                              <div className="col mb-3">
                                <input
                                  type="email"
                                  className="form-control py-3 px-4"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  required=""
                                />
                                <div className="invalid-feedback">
                                  The field is required.
                                </div>
                              </div>
                              <div className="col mb-3">
                                <input
                                  type="tel"
                                  className="form-control py-3 px-4"
                                  name="phone"
                                  id="phone"
                                  placeholder="Your Phone"
                                  required=""
                                />
                                <div className="invalid-feedback">
                                  The field is required.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-3">
                            <input
                              type="text"
                              className="form-control py-3 px-4"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required=""
                            />
                            <div className="invalid-feedback">
                              The field is required.
                            </div>
                          </div>
                          <div className="mb-3">
                            <textarea
                              className="form-control py-3 px-4"
                              rows={5}
                              name="message"
                              id="message"
                              placeholder="Your Message"
                              required=""
                              defaultValue={""}
                            />
                            <div className="invalid-feedback">
                              The field is required.
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-accent py-3 rounded-4 justify-content-center submit_form"
                          >
                            Make Appointment
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
