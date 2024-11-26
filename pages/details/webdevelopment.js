import BreadBanner from "@/components/BreadBanner";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import React from "react";

const webdevelopment = () => {
  const servicesData = [
    { href: "seo", name: "Search Engine Optimization (SEO)" },
    { href: "socialmedia", name: "Social Media Management" },
    { href: "email", name: "Email Marketing" },
    { href: "googleads", name: "Google Ads" },
    { href: "metaads", name: "Meta Ads" },
  ];
  return (
    <>
      {" "}
      <Navbar />
      <BreadBanner
        title="Web Development"
        backgroundImage="/image/image-1920x1280-12.jpg"
      />
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col col-lg-8">
              <div className="d-flex flex-column gap-4">
                <div className="mb-3">
                  <img
                    src="/image/image-1920x1280-6.jpg"
                    alt=""
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="mb-3">
                  <h3 className="font-1 fw-semibold">Web Development</h3>
                </div>
                <div className="mb-3">
                  <p className="text-color-2">
                    We will build you website that is optimized for search
                    engines, user-friendly, and visually appealing
                  </p>
                  <h4 className="fw-bold">Planning and Strategy</h4>
                  <p className="text-color-2">
                    This stage involves defining the purpose, goals, target
                    audience, and scope of the website. It also includes
                    creating a sitemap and wireframes to outline the structure
                    and layout.
                  </p>
                  <h4 className="fw-bold">Front-end Development</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Front-end development focuses on the visible parts of the
                      website that users interact with.
                    </li>
                    <li className="text-color-2">
                      HTML (Hypertext Markup Language): Provides the structure
                      and content of web pages.
                    </li>
                    <li className="text-color-2">
                      CSS (Cascading Style Sheets): Controls the presentation
                      and style of the HTML elements.
                    </li>
                    <li className="text-color-2">
                      JavaScript: Adds interactivity and dynamic behavior to web
                      pages
                    </li>
                  </ul>
                  <h4 className="fw-bold">Responsive Design</h4>
                  <p className="text-color-2">
                    Ensuring that the website is optimized for various devices
                    and screen sizes (desktops, laptops, tablets, and
                    smartphones) is crucial for a positive user experience.
                  </p>
                  <h4 className="fw-bold">Back-end Development</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Back-end development involves server-side scripting,
                      databases, and server management
                    </li>
                    <li className="text-color-2">
                      Server-side Languages: Such as PHP, Python, or React.js
                      for handling server-side logic.
                    </li>
                    <li className="text-color-2">
                      Databases: Such as MySQL, PostgreSQL, MongoDB, etc., for
                      storing and retrieving data.
                    </li>
                    <li className="text-color-2">
                      Frameworks and CMS (Content Management Systems): Such as
                      WordPress, Drupal, Joomla, Django, Flask, Laravel, etc.,
                      to streamline development and manage content.
                    </li>
                    <li className="text-color-2">
                      Testing and Quality Assurance: Thoroughly testing the
                      website for functionality, compatibility, usability, and
                      performance across different browsers, devices, and
                      operating systems.
                    </li>
                  </ul>
                  <h4 className="fw-bold">Content Creation</h4>
                  <p className="text-color-2">
                    Developing high-quality content including text, images,
                    videos, and other multimedia elements that align with the
                    website's goals and target audience.
                  </p>
                  <h4 className="fw-bold">Testing and Quality Assurance</h4>
                  <p className="text-color-2">
                    Thoroughly testing the website for functionality,
                    compatibility, usability, and performance across different
                    browsers, devices, and operating systems.
                  </p>
                </div>
              </div>
            </div>
            <OtherService services={servicesData} />;
          </div>
        </div>
      </div>
    </>
  );
};

export default webdevelopment;
