import BreadBanner from "@/components/BreadBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import ServiceCard from "@/components/ServiceCard";
import Strategy from "@/components/Strategy";
import Head from "next/head";
import React from "react";

const services = () => {
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
    {
      href: "details/email",
      imgSrc: "image/planning.png",
      title: "Email Marketing",
      description:
        "Designing visually appealing email templates that reflect your brand's identity. And segmenting email lists.",
    },
    {
      href: "details/googleads",
      imgSrc: "image/google.png",
      title: "Google Ads",
      description:
        "A/B testing ad creatives, headlines, and targeting options to optimize campaign performance.",
    },
    {
      href: "details/metaads",
      imgSrc: "image/meta.png",
      title: "Meta Ads",
      description:
        "Distributing content through various channels, including social media, email newsletters, and industry publications.",
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
        title="Services"
        backgroundImage="/image/image-1920x1280-7.jpg"
      />
      <main>
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
            </div>
          </div>
        </div>
        <Strategy />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};

export default services;
