import { fetchMediumPosts } from "@/utils/fetchMediumPosts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook
import Navbar from "@/components/Navbar";
import moment from "moment";
import Footer from "@/components/Footer";

const extractImageUrl = (content) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const imgElement = doc.querySelector("img");
  return imgElement ? imgElement.src : null;
};

const singleBlog = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    async function getPosts() {
      const mediumPosts = await fetchMediumPosts();

      const postsWithExtractedContent = mediumPosts.map((post) => {
        const text = post.content.replace(/<[^>]*>/g, "");
        const image = extractImageUrl(post.content);
        return { ...post, text, image };
      });

      setPosts(postsWithExtractedContent);

      const matchedPost = postsWithExtractedContent.find((p) => p.id === id);
      if (matchedPost) {
        setPost(matchedPost);

        const currentIndex = postsWithExtractedContent.findIndex(
          (p) => p.id === id
        );

        if (
          currentIndex !== -1 &&
          currentIndex < postsWithExtractedContent.length - 1
        ) {
          setNextPost(postsWithExtractedContent[currentIndex + 1]);
        }

        if (currentIndex > 0) {
          setPreviousPost(postsWithExtractedContent[currentIndex - 1]);
        }
      }
    }

    getPosts();
  }, [id]);

  console.log("post", post);
  console.log("nextPost", nextPost);
  console.log("previousPost", previousPost);

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="r-container">
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="col col-lg-8">
              <div className="d-flex flex-column gap-4">
                <div className="mb-3">
                  <img
                    // src="/image/image-1920x1280-17.jpg"
                    src={post?.image}
                    alt=""
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="mb-3">
                  <h3 className="font-1 fw-semibold">{post?.title}</h3>
                  <p className="text-color-2" style={{ fontStyle: "italic" }}>
                    {moment(post?.pubDate).format("MMMM Do, YYYY")}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-color-2">
                    In the fast-paced world of online news, getting noticed
                    amidst the sea of content can be a daunting task. However,
                    with the right strategies in place, news publishers can
                    optimize their content to rank higher in search engine
                    results, drive more traffic to their websites, and
                    ultimately establish authority in their respective niches.
                    This guide explores the key tactics for mastering News SEO
                    and achieving digital dominance.
                  </p>
                  <h4 className="fw-bold">
                    Understanding the Importance of News SEO
                  </h4>
                  <p className="text-color-2">
                    News SEO refers to the optimization of news content for
                    search engines, with the goal of improving visibility,
                    ranking higher in search results, and attracting more
                    organic traffic. In an era where information is abundant and
                    attention spans are fleeting, mastering News SEO is
                    essential for news publishers to stay competitive and
                    relevant in the digital landscape.
                  </p>
                  <div className="border-start border-dark border-3 px-4 my-4">
                    <h4 className="fst-italic text-color-2">
                      “By analyzing data, identifying trends, and iterating on
                      content and optimization tactics, news publishers can
                      continually refine their approach and stay ahead of the
                      competition in search engine results.”
                    </h4>
                  </div>
                  <p className="text-color-2">
                    In conclusion, mastering News SEO is essential for news
                    publishers looking to boost their rankings, drive more
                    traffic, and dominate search engine results. With a
                    strategic approach to News SEO, publishers can rise above
                    the noise and connect with audiences in meaningful ways.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="d-flex flex-column gap-4 ms-xl-4 ms-0">
                <div className="shadow rounded-4 p-5 d-flex flex-column gap-3">
                  <h5 className="font-1">Archives</h5>
                  <div className="d-flex flex-column gap-4">
                    <div className="row row-cols-2">
                      <div className="col-5">
                        <img
                          src="/image/image-1920x1280-9.jpg"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                      </div>
                      <div className="col-7">
                        <div className="d-flex flex-column h-100">
                          <span className="fs-6 accent-color-2">
                            April 26, 2024
                          </span>
                          <a href="#" className="link">
                            <h5 className="font-1 fs-6 text-color">
                              The Significance of Branding in Digital Marketing
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-2">
                      <div className="col-5">
                        <img
                          src="/image/image-1920x1280-24.jpg"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                      </div>
                      <div className="col-7">
                        <div className="d-flex flex-column h-100">
                          <span className="fs-6 accent-color-2">
                            April 26, 2024
                          </span>
                          <a href="#" className="link">
                            <h5 className="font-1 fs-6 text-color">
                              Embracing the Dynamic Future of Immersive Digital
                              Experiences
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-2">
                      <div className="col-5">
                        <img
                          src="/image/image-1920x1280-6.jpg"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                      </div>
                      <div className="col-7">
                        <div className="d-flex flex-column h-100">
                          <span className="fs-6 accent-color-2">
                            April 26, 2024
                          </span>
                          <a href="#" className="link">
                            <h5 className="font-1 fs-6 text-color">
                              Unlocking Brand Potential With Innovative Design
                              Strategies
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row row-cols-2">
                      <div className="col-5">
                        <img
                          src="/image/image-1920x1280-13.jpg"
                          alt=""
                          className="img-fluid rounded-3"
                        />
                      </div>
                      <div className="col-7">
                        <div className="d-flex flex-column h-100">
                          <span className="fs-6 accent-color-2">
                            April 26, 2024
                          </span>
                          <a href="#" className="link">
                            <h5 className="font-1 fs-6 text-color">
                              Digital Landscape: Your Guide to Marketing Success
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="position-relative overflow-hidden rounded-4"
                  style={{
                    backgroundImage: "url(/image/image-1920x1280-7.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="image-overlay" />
                  <div className="position-relative p-5" style={{ zIndex: 2 }}>
                    <div className="d-flex flex-column mx-auto text-center align-items-center text-white gap-3">
                      <h4 className="font-1 text-white">
                        Ready to Dominate the Digital Landscape? Start Your
                        Journey Here
                      </h4>
                      <div>
                        <a
                          href="contact.html"
                          className="btn btn-accent px-5 py-3 rounded-4"
                        >
                          CONTACT US
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-3 p-4">
                  <div className="pb-2 w-max-content pe-3">
                    <h4 className="fw-semibold">Have Additional Questions?</h4>
                  </div>
                  <ul className="list gap-3">
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-location-dot" />
                        </div>
                        KLLG st, No.99, Pku City, ID 28289
                      </span>
                    </li>
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-phone" />
                        </div>
                        0761-8523-398
                      </span>
                    </li>
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-envelope" />
                        </div>
                        hello@domainsite.com
                      </span>
                    </li>
                    <li>
                      <span className="d-flex flex-row align-items-center gap-3">
                        <div className="contact-item">
                          <i className="fa-solid fa-2xs fa-globe" />
                        </div>
                        www.domainsite.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default singleBlog;
