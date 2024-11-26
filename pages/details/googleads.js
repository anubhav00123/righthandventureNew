import BreadBanner from "@/components/BreadBanner";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import React from "react";

const googleads = () => {
  const servicesData = [
    { href: "webdevelopment", name: "Web Development" },
    { href: "seo", name: "Search Engine Optimization (SEO)" },
    { href: "socialmedia", name: "Social Media Management" },
    { href: "email", name: "Email Marketing" },
    { href: "metaads", name: "Meta Ads" },
  ];
  return (
    <>
      <Navbar />
      <BreadBanner
        title="Google Ads"
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
                  <h3 className="font-1 fw-semibold">Google Ads</h3>
                </div>
                <div className="mb-3">
                  <p className="text-color-2">
                    We will help you create and manage Google Ads campaigns
                  </p>
                  <h4 className="fw-bold">Ad Campaign Objective</h4>
                  <p className="text-color-2">
                    Google Ads offers a wide range of campaign objectives
                    including search campaigns, display campaigns, video
                    campaigns, app campaigns, shopping campaigns, and smart
                    campaigns.
                  </p>
                  <h4 className="fw-bold">Keyword Targeting</h4>
                  <p className="text-color-2">
                    Advertisers can target specific keywords related to their
                    products or services, allowing their ads to appear when
                    users search for those keywords on Google Search.
                  </p>
                  <h4 className="fw-bold">Ad Creatives</h4>
                  <p className="text-color-2">
                    Advertisers can create text ads, responsive search ads,
                    image ads, video ads, app promotion ads, and shopping ads to
                    showcase their products or services.
                  </p>
                  <h4 className="fw-bold">Ad Placement</h4>
                  <p className="text-color-2">
                    Google Ads can appear on various Google platforms including
                    Google Search, Google Display Network, YouTube, Google Maps,
                    and Google Play.
                  </p>
                  <h4 className="fw-bold">Ad Bidding</h4>
                  <p className="text-color-2">
                    Advertisers can choose from different bidding strategies
                    such as cost per click (CPC), cost per thousand impressions
                    (CPM), cost per acquisition (CPA), or target return on ad
                    spend (ROAS).
                  </p>
                  <h4 className="fw-bold">Ad Extensions</h4>
                  <p className="text-color-2">
                    Google Ads allow advertisers to enhance their ads with
                    extensions such as sitelink extensions, callout extensions,
                    structured snippet extensions, call extensions, location
                    extensions, and app extensions.
                  </p>
                  <h4 className="fw-bold">Ad Performance Tracking</h4>
                  <p className="text-color-2">
                    Advertisers can track the performance of their ads using the
                    Google Ads platform, which provides insights such as clicks,
                    impressions, click-through rate (CTR), conversions,
                    conversion rate, and cost per conversion. They can also
                    integrate Google Analytics for more comprehensive tracking
                    and analysis.
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

export default googleads;
