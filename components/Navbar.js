import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header
        className="sticky-top bg-white"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="r-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ps-3">
              <div className="logo-container">
                {/* <Link className="navbar-brand" href="/">
                  <img src="image/logo.png" alt="" className="img-fluid" />
                </Link> */}

                <Link className="navbar-brand" href="/">
                  <Image
                    src="/image/companyLogo/right.png" // Make sure to use an absolute path or a proper import for static assets
                    alt="logo"
                    width={450} // Set the desired width
                    height={50} // Set the desired height
                    layout="intrinsic"
                    // className="img-fluid" // Optional: you can still use your classes
                  />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars-staggered accent-color-2" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 gap-1">
                  <li className="nav-item">
                    <Link
                      // className="nav-link active"
                      className="nav-link"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="about.html">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="team.html">
                          Team
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/ourwork">
                      Our Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="mb-xl-0 mb-3">
                  <Link
                    href="tel:+918882786072"
                    className="btn btn-accent px-5 py-3"
                  >
                    Let’s Talk
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
