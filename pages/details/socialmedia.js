import BreadBanner from "@/components/BreadBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import React from "react";

const socialmedia = () => {
  const servicesData = [
    { href: "webdevelopment", name: "Web Development" },
    { href: "seo", name: "Search Engine Optimization (SEO)" },
    { href: "email", name: "Email Marketing" },
    { href: "googleads", name: "Google Ads" },
    { href: "metaads", name: "Meta Ads" },
  ];
  return (
    <>
      {" "}
      <Navbar />
      <BreadBanner
        title="Social Media Management"
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
                  <h3 className="font-1 fw-semibold">
                    Social Media Management
                  </h3>
                </div>
                <div className="mb-3">
                  <p className="text-color-2">
                    We will help you create and manage your social media
                    presence
                  </p>
                  <h4 className="fw-bold">Content Strategy</h4>
                  <p className="text-color-2">
                    Developing a plan for the type of content to create and
                    share on social media platforms. This includes deciding on
                    the content format (text, images, videos, etc.), frequency
                    of posting, and topics that align with the target audience's
                    interests.
                  </p>
                  <h4 className="fw-bold">Audience Research and Targeting</h4>
                  <p className="text-color-2">
                    Understanding the demographics, interests, behaviors, and
                    preferences of the target audience to tailor content and
                    messaging accordingly. Utilizing analytics tools and
                    insights from social media platforms can help in this
                    process.
                  </p>
                  <h4 className="fw-bold">Advertising</h4>
                  <p className="text-color-2">
                    Running paid advertising campaigns on social media platforms
                    to reach a larger audience, target specific demographics,
                    promote products or services, and increase brand visibility.
                    This may include sponsored posts, display ads, and other
                    forms of paid promotion.
                  </p>

                  <h4 className="fw-bold">Influencer Partnerships</h4>
                  <p className="text-color-2">
                    Collaborating with influencers or key opinion leaders in the
                    industry to amplify reach, credibility, and engagement with
                    the target audience.
                  </p>

                  <h4 className="fw-bold">Social Media Management Tools</h4>
                  <p className="text-color-2">
                    Utilizing tools and platforms to schedule posts, monitor
                    conversations, track analytics, and manage multiple social
                    media accounts efficiently.
                  </p>

                  <h4 className="fw-bold">Hashtag Strategy</h4>
                  <p className="text-color-2">
                    Developing a strategic approach to using hashtags to
                    increase discoverability and reach on platforms like
                    Twitter, Instagram, and LinkedIn. Researching relevant and
                    trending hashtags can help extend the reach of posts beyond
                    existing followers.
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

export default socialmedia;
