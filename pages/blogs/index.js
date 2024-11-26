import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import { fetchMediumPosts } from "@/utils/fetchMediumPosts";
import React, { useEffect, useState } from "react";

// Function to extract image URL using DOMParser
const extractImageUrl = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const imgElement = doc.querySelector("img");
  return imgElement ? imgElement.src : null;
};

const blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const mediumPosts = await fetchMediumPosts();
      const postsWithExtractedContent = mediumPosts.map((post) => {
        // Extract text by removing all HTML tags
        const text = post.content.replace(/<[^>]*>/g, "");

        const image = extractImageUrl(post.content); // Use DOMParser to extract image URL

        return {
          ...post,
          text,
          image,
        };
      });
      setPosts(postsWithExtractedContent);
    }
    getPosts();
  }, []);

  console.log("posts", posts);

  return (
    <>
      <Navbar />
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
            {posts.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  date={item.pubDate}
                  title={item.title}
                  image={item.image}
                  text={item.text}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  );
};

export default blogs;
