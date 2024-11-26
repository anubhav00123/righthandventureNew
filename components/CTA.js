import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <>
      <div
        className="section position-relative bg-attach-fixed"
        style={{ backgroundImage: "url(image/image-1920x1280-7.jpg)" }}
      >
        <div className="image-overlay" />
        <div
          className="r-container position-relative py-5"
          style={{ zIndex: 2 }}
        >
          <div
            className="d-flex flex-column mx-auto text-center align-items-center text-white gap-4"
            style={{ maxWidth: 1000 }}
          >
            <h2 className="font-1 text-white">Your Goals Our Services</h2>
            <p className="col-9 col-lg-9">
              Whether you're seeking to craft a fresh website, revamp your
              exisiting one, bolster your ecommerce platform, enrich your
              content marketing efforts, or manage your social media presence,
              our seasoned experts are here to guide you. We'll collaborate with
              you to devise a tailored strategy and flawlessly execute it, all
              at a surprisingly competitive price. With over a decade of digital
              marketing experience, we're adept at effectively promoting your
              business online. From crafting search engine optimized website to
              leveraging paid media and organic SEO, local SEO, and social media
              marketing tactics, we've got you covered.
            </p>
            <div>
              <Link href="/contact" className="btn btn-accent px-5 py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
