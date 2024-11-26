import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-xl-2 row-cols-1 d-flex align-items-center">
            <div className="col mb-4 pe-4">
              <img
                src="image/image-800x1200-23.jpg"
                alt=""
                className="img-fluid"
                style={{
                  borderTopRightRadius: "30em",
                  borderTopLeftRadius: "30em",
                  height: "100%",
                }}
              />
            </div>
            <div className="col">
              <div className="d-flex flex-column gap-4 mb-4">
                <div className="linear-gradient">
                  <span className="text-white">FAQs Decoded</span>
                </div>
                <h3 className="fw-bold">FAQs for Advanced Digital Marketers</h3>
                <p className="text-color-2">
                  We understand that navigating the world of finance and
                  investment can be daunting, this list of frequently asked
                  questions to provide clarity and guidance.
                </p>
              </div>
              <div
                className="accordion d-flex flex-column gap-4"
                id="faqAccordion2"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="true"
                      aria-controls="faq5"
                    >
                      What exactly is digital marketing?
                    </button>
                  </h2>
                  <div
                    id="faq5"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      Digital marketing refers to the use of digital channels
                      and technologies to promote products, services, or brands
                      to potential customers. These channels include websites,
                      search engines, social media platforms, etc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq6"
                      aria-expanded="false"
                      aria-controls="faq6"
                    >
                      Why is digital marketing important for businesses?
                    </button>
                  </h2>
                  <div
                    id="faq6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      Digital marketing refers to the use of digital channels
                      and technologies to promote products, services, or brands
                      to potential customers. These channels include websites,
                      search engines, social media platforms, etc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq7"
                      aria-expanded="false"
                      aria-controls="faq7"
                    >
                      What role does SEO play in digital marketing?
                    </button>
                  </h2>
                  <div
                    id="faq7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      Digital marketing refers to the use of digital channels
                      and technologies to promote products, services, or brands
                      to potential customers. These channels include websites,
                      search engines, social media platforms, etc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq8"
                      aria-expanded="false"
                      aria-controls="faq8"
                    >
                      How can I improve my website's conversion rate?
                    </button>
                  </h2>
                  <div
                    id="faq8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      Digital marketing refers to the use of digital channels
                      and technologies to promote products, services, or brands
                      to potential customers. These channels include websites,
                      search engines, social media platforms, etc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq9"
                      aria-expanded="false"
                      aria-controls="faq9"
                    >
                      How does social media marketing benefit businesses?
                    </button>
                  </h2>
                  <div
                    id="faq9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">
                      Digital marketing refers to the use of digital channels
                      and technologies to promote products, services, or brands
                      to potential customers. These channels include websites,
                      search engines, social media platforms, etc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
