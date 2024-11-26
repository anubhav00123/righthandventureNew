import BreadBanner from "@/components/BreadBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const ourwork = () => {
  const servicesData = [
    { href: "details/webdevelopment", name: "Web Development" },
    { href: "details/socialmedia", name: "Social Media Management" },
    { href: "details/seo", name: "Search Engine Optimization" },
    { href: "details/email", name: "Email Marketing" },
    { href: "details/googleads", name: "Google Ads" },
    { href: "details/metaads", name: "Meta Ads" },
  ];

  const projects = [
    {
      title: "Vedarya",
      description:
        "Our team excels in social media marketing, focusing on details for optimal results. Our project, Vedarya, uses engaging campaigns to improve children's math learning.",
      imageUrl: "image/image-1920x1280-19.jpg",
      link: "#",
    },
    {
      title: "MediShift",
      description:
        "We are a team of creative professionals dedicated to crafting authentic and memorable digital experiences. We specialize in digital marketing services that enhance user engagement and elevate brand value.",
      imageUrl: "image/image-1920x1280-19.jpg",
      link: "#",
    },
    {
      title: "Cheesecake",
      description:
        "Our standout project, Ticketmaster, simplifies ticket booking and engages users, prioritizing a smooth, aesthetically pleasing user journey.",
      imageUrl: "image/image-1920x1280-19.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Righthandventure</title>
        <meta name="description" content="Righthandventure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <BreadBanner
        title="Our Work"
        backgroundImage="/image/image-1920x1280-19.jpg"
      />
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col col-lg-8">
              <div className="d-flex flex-column gap-4">
                {projects.map((project, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="d-flex flex-column flex-md-row">
                      <img
                        src={project.imageUrl}
                        className="card-img-left"
                        style={{
                          maxWidth: "300px",
                          objectFit: "cover",
                          padding: "13px",
                          borderRadius: "25px",
                        }}
                        alt={`Image for ${project.title}`}
                      />
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <Link
                          href={project.link}
                          className="btn btn-accent px-5 py-3"
                          style={{ maxWidth: "200px" }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <OtherService services={servicesData} />;
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ourwork;
