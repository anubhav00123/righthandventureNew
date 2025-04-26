import BreadBanner from "@/components/BreadBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import React from "react";

const metaads = () => {
  const servicesData = [
    { href: "webdevelopment", name: "Web Development" },
    { href: "seo", name: "Search Engine Optimization (SEO)" },
    { href: "socialmedia", name: "Social Media Management" },
    { href: "email", name: "Email Marketing" },
    { href: "googleads", name: "Google Ads" },
  ];
  return (
    <>
      <Navbar />
      <BreadBanner
        title="Meta Ads"
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
                  <h3 className="font-1 fw-semibold">Meta Ads</h3>
                </div>
                <div className="mb-3">
                  <p className="text-color-2">
                    We will help you create and manage Meta Ads campaigns
                  </p>
                  <h4 className="fw-bold">Ad Campaign Objective</h4>
                  <p className="text-color-2">
                    Meta Ads allow advertisers to choose from various campaign
                    objectives, such as brand awareness, reach, traffic,
                    engagement, app installs, video views, lead generation,
                    messages, conversions, catalogue sales, and store traffic.
                  </p>
                  <h4 className="fw-bold">Target Audience</h4>
                  <p className="text-color-2">
                    Advertisers can define their target audience based on
                    demographics, interests, behaviours, and connections on Meta
                    platforms. Custom audiences, lookalike audiences, and
                    retargeting options are also available.
                  </p>
                  <h4 className="fw-bold">Ad Creatives</h4>
                  <p className="text-color-2">
                    Advertisers can create various types of ad creatives
                    including images, videos, carousels, slideshows,
                    collections, instant experiences (formerly Canvas ads), and
                    augmented reality (AR) experiences.
                  </p>
                  <h4 className="fw-bold">Ad Placement</h4>
                  <p className="text-color-2">
                    Ads can be placed across different placements on Meta
                    platforms including Facebook, Instagram, Messenger, and
                    Audience Network. Advertisers can choose automatic
                    placements or manually select specific placements.
                  </p>
                  <h4 className="fw-bold">Ad Bidding</h4>
                  <p className="text-color-2">
                    Advertisers can choose from different bidding strategies
                    such as cost per click (CPC), cost per thousand impressions
                    (CPM), cost per conversion, or value-based bidding.
                  </p>

                  <h4 className="fw-bold">Ad Formats</h4>
                  <p className="text-color-2">
                    Meta Ads support various ad formats including single image,
                    single video, slideshow, carousel, collection, instant
                    experience, and playable ads.
                  </p>

                  <h4 className="fw-bold">Ad Performance Tracking</h4>
                  <p className="text-color-2">
                    Advertisers can track the performance of their ads using the
                    Ads Manager platform, which provides insights such as reach,
                    impressions, clicks, conversions, and return on ad spend
                    (ROAS).
                  </p>
                </div>
              </div>
            </div>
            <OtherService services={servicesData} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default metaads;
