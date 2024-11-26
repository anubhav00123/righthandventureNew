import React from "react";

const Blog = () => {
  return (
    <>
      <div className="section">
        <div className="r-container d-flex flex-column gap-4">
          <div
            className="d-flex flex-column gap-4 mx-auto text-center mb-4 align-items-center"
            style={{ maxWidth: 567 }}
          >
            <div className="linear-gradient">
              <span className="text-white">Latest Article</span>
            </div>
            <h3 className="fw-bold">Take a Look At the Latest Articles</h3>
            <p className="text-color-2">
              Our latest news updates and insightful blog posts, designed to
              empower you with the knowledge and strategies you need to succeed.
            </p>
          </div>
          <div className="row row-cols-xl-3 row-cols-1">
            <div className="col mb-3">
              <div className="card position-relative overflow-hidden rounded-4">
                <img
                  src="image/image-1920x1280-9.jpg"
                  alt="image"
                  className="img-fluid"
                />
                <div
                  className="position-absolute"
                  style={{ bottom: 0, top: 0, right: 0, left: 0 }}
                >
                  <div className="blog-overlay d-flex flex-column gap-1 p-5 justify-content-end h-100">
                    <span className="accent-color-5" style={{ fontSize: 12 }}>
                      April 26, 2024
                    </span>
                    <h5 className="text-white">
                      The Significance of Branding in Digital Marketing
                    </h5>
                    <a href="single_post.html" className="accent-color-5">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card position-relative overflow-hidden rounded-4">
                <img
                  src="image/image-1920x1280-24.jpg"
                  alt="image"
                  className="img-fluid"
                />
                <div
                  className="position-absolute"
                  style={{ bottom: 0, top: 0, right: 0, left: 0 }}
                >
                  <div className="blog-overlay d-flex flex-column gap-1 p-5 justify-content-end h-100">
                    <span className="accent-color-5" style={{ fontSize: 12 }}>
                      April 26, 2024
                    </span>
                    <h5 className="text-white">
                      Embracing the Dynamic Future of Immersive Digital
                      Experiences
                    </h5>
                    <a href="single_post.html" className="accent-color-5">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-3">
              <div className="card position-relative overflow-hidden rounded-4">
                <img
                  src="image/image-1920x1280-6.jpg"
                  alt="image"
                  className="img-fluid"
                />
                <div
                  className="position-absolute"
                  style={{ bottom: 0, top: 0, right: 0, left: 0 }}
                >
                  <div className="blog-overlay d-flex flex-column gap-1 p-5 justify-content-end h-100">
                    <span className="accent-color-5" style={{ fontSize: 12 }}>
                      April 26, 2024
                    </span>
                    <h5 className="text-white">
                      Unlocking Brand Potential With Innovative Design
                      Strategies
                    </h5>
                    <a href="single_post.html" className="accent-color-5">
                      Read More
                    </a>
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

export default Blog;
