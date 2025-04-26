import BreadBanner from "@/components/BreadBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherService from "@/components/OtherService";
import React from "react";

const seo = () => {
  const servicesData = [
    { href: "webdevelopment", name: "Web Development" },
    { href: "socialmedia", name: "Social Media Management" },
    { href: "email", name: "Email Marketing" },
    { href: "googleads", name: "Google Ads" },
    { href: "metaads", name: "Meta Ads" },
  ];
  return (
    <>
      <Navbar />
      <BreadBanner
        title="Search Engine Optimization (SEO)"
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
                  <h3 className="font-1 fw-semibold">SEO Optimization</h3>
                </div>
                <div className="mb-3">
                  <p className="text-color-2">
                    We will optimize your website to rank higher on search
                    engines
                  </p>
                  <h4 className="fw-bold">E-Commerce SEO</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Conduct keyword research: Identify relevant keywords
                      related to products/services offered by the e-commerce
                      platform.
                    </li>
                    <li className="text-color-2">
                      Optimize product pages: Ensure each product page is
                      optimized with appropriate title tags, meta descriptions,
                      and product descriptions containing relevant keywords.
                    </li>
                    <li className="text-color-2">
                      Improve site structure: Enhance site navigation and
                      structure for better user experience and search engine
                      crawling.
                    </li>
                    <li className="text-color-2">
                      Improve site structure: Enhance site navigation and
                      structure for better user experience and search engine
                      crawling.
                    </li>
                    <li className="text-color-2">
                      Optimize images: Use descriptive alt text and file names
                      for images to improve visibility in image search results.
                    </li>
                    <li className="text-color-2">
                      Implement schema markup: Add structured data markup to
                      provide search engines with additional context about
                      products and improve visibility in search results.
                    </li>
                  </ul>
                  <h4 className="fw-bold">SEO Audit:</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Evaluate current SEO performance: Analyze website traffic,
                      keyword rankings, backlink profile, and technical SEO
                      issues.
                    </li>
                    <li className="text-color-2">
                      Identify areas for improvement: Look for opportunities to
                      optimize on-page elements, enhance site speed, fix broken
                      links, and improve overall website usability.
                    </li>
                    <li className="text-color-2">
                      Competitive analysis: Assess competitor SEO strategies to
                      identify strengths and weaknesses.
                    </li>
                    <li className="text-color-2">
                      Develop an action plan: Provide recommendations for
                      addressing identified issues and improving overall SEO
                      performance.
                    </li>
                  </ul>
                  <h4 className="fw-bold">Technical SEO</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Website crawlability: Ensure search engine bots can crawl
                      and index all relevant pages on the website.
                    </li>
                    <li className="text-color-2">
                      Website speed optimization: Optimize page load times to
                      improve user experience and search engine rankings.
                    </li>
                    <li className="text-color-2">
                      Mobile-friendliness: Ensure the website is responsive and
                      provides a seamless experience across different devices.
                    </li>
                    <li className="text-color-2">
                      Fix technical errors: Address issues such as broken links,
                      duplicate content, and crawl errors to improve site
                      health.
                    </li>
                  </ul>
                  <h4 className="fw-bold">Local SEO</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Local keyword optimization: Target location-specific
                      keywords to attract local customers.
                    </li>
                    <li className="text-color-2">
                      Google My Business optimization: Claim and optimize the
                      Google My Business listing with accurate business
                      information, photos, and customer reviews.
                    </li>
                    <li className="text-color-2">
                      Local citations: Build citations on relevant directories
                      and websites to improve local search visibility.
                    </li>
                    <li className="text-color-2">
                      Local link building: Acquire backlinks from local websites
                      and directories to establish relevance within the local
                      community.
                    </li>
                  </ul>
                  <h4 className="fw-bold">National SEO</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Comprehensive keyword strategy: Target high-volume and
                      competitive keywords relevant to the national audience.
                    </li>
                    <li className="text-color-2">
                      Content optimization: Create high-quality, authoritative
                      content targeting national keywords to attract organic
                      traffic.
                    </li>
                    <li className="text-color-2">
                      Backlink acquisition: Build a diverse backlink profile
                      from authoritative websites to improve national search
                      visibility.
                    </li>
                    <li className="text-color-2">
                      Social media marketing: Utilize social media platforms to
                      promote content and engage with the national audience.
                    </li>
                  </ul>
                  <h4 className="fw-bold">Link Building</h4>
                  <ul style={{ listStyleType: "disc" }}>
                    <li className="text-color-2">
                      Outreach campaigns: Identify relevant websites and blogs
                      for link placement and conduct outreach to secure
                      backlinks.
                    </li>
                    <li className="text-color-2">
                      Content marketing: Create compelling content assets to
                      attract natural backlinks from other websites.
                    </li>
                    <li className="text-color-2">
                      Guest blogging: Contribute guest posts to authoritative
                      websites within the industry to earn backlinks and
                      increase brand visibility.
                    </li>
                    <li className="text-color-2">
                      Monitor backlink profile: Regularly audit and monitor the
                      backlink profile to identify and address any toxic or
                      spammy links.
                    </li>
                  </ul>
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

export default seo;
