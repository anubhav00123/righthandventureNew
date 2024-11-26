import React from "react";
import ServiceListItem from "./ServiceListItem";
import Link from "next/link";

const OtherService = ({ services }) => {
  return (
    <>
      <div className="col col-lg-4">
        <div className="d-flex flex-column gap-4 ms-xl-4 ms-0">
          <div className="rounded-4 p-5 d-flex flex-column gap-3 shadow">
            <h4 className="font-1 fw-semibold">Other Services</h4>
            <ul className="list-group gap-3">
              {services.map((service, index) => (
                <ServiceListItem
                  key={index}
                  href={service.href}
                  name={service.name}
                />
              ))}
            </ul>
          </div>
          <div
            className="position-relative overflow-hidden rounded-4"
            style={{
              backgroundImage: "url(/image/image-1920x1280-7.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="image-overlay" />
            <div className="position-relative p-5" style={{ zIndex: 2 }}>
              <div className="d-flex flex-column mx-auto text-center align-items-center text-white gap-3">
                <h4 className="font-1 text-white">
                  Ready to Dominate the Digital Landscape? Start Your Journey
                  Here
                </h4>
                <div>
                  <Link
                    href="/contact"
                    className="btn btn-accent px-5 py-3 rounded-pill"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 p-4">
            <div className="pb-2 w-max-content pe-3">
              <h4 className="fw-semibold">Have Additional Questions?</h4>
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
    </>
  );
};

export default OtherService;
