import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="section about-area ptb_100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              {/* About Thumb */}
              <div className="about-thumb text-center">
                <img
                  style={{ width: "80%" }}
                  src="image/image-600x800-18.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* About Content */}
              <div className="about-content section-heading text-center text-lg-left pl-md-4 mt-5 mt-lg-0 mb-0">
                <h2 className="mb-3">A Tailored Approach to Your Success</h2>
                <p className="text-color-2">
                  What sets us apart? Our commitment to excellence,
                  transparency, and collaboration. We don't just deliver
                  campaigns; we build lasting relationships based on trust and
                  mutual success. When you partner with us, you gain a dedicated
                  team that is as invested in your success as you are. We are
                  not just like any other digital marketing agency in the
                  market, we don’t offer any blind services. Primarily we gain
                  certain level of understanding of your particular company and
                  we will give you the relevant services based on the analysed
                  data of respective company.
                </p>

                {/* Counter Area */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
