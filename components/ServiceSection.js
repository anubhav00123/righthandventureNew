import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const ServiceSection = () => {
  const services = [
    {
      href: "details/webdevelopment",
      imgSrc: "image/software.png",
      title: "Web Development",
      description:
        "Crafting a comprehensive digital strategy tailored to your brand's goals and target audience.",
    },
    {
      href: "details/seo",
      imgSrc: "image/seo.png",
      title: "Search Engine Optimization (SEO)",
      description:
        "Building high-quality backlinks from reputable websites to increase domain authority.",
    },
    {
      href: "details/socialmedia",
      imgSrc: "image/online_shopping.png",
      title: "Social Media Management",
      description:
        "Analyzing performance metrics and optimizing strategies to improve reach and engagement.",
    },
  ];

  return (
    <>
      <div className="section">
        <div className="r-container">
          <div className="d-flex flex-column gap-5 align-items-center">
            <div
              className="d-flex flex-column gap-3 text-center align-items-center"
              style={{ maxWidth: 567 }}
            >
              <div className="linear-gradient">
                <span className="text-white">Our Services</span>
              </div>
              <h3 className="fw-semibold">
                Safeguarding Your Brand's Online Image
              </h3>
              <p className="text-color-2">
                We offer a comprehensive suite of digital marketing services
                designed to catapult your brand into the digital spotlight.
              </p>
            </div>
            <div className="row row-cols-xl-3 row-cols-1 align-items-stretch">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  href={service.href}
                  imgSrc={service.imgSrc}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            <div>
              <Link
                href="/services"
                className="btn btn-accent px-5 py-3 rounded-pill"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
