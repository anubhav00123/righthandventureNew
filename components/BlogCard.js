import Link from "next/link";
import React from "react";
import moment from "moment";

const BlogCard = ({ date, title, image, id }) => {
  return (
    <>
      <div className="col mb-3">
        <div className="card position-relative overflow-hidden rounded-4">
          <img
            // src="image/image-1920x1280-9.jpg"
            src={image}
            alt="image"
            className="img-fluid"
          />
          <div
            className="position-absolute"
            style={{ bottom: 0, top: 0, right: 0, left: 0 }}
          >
            <div className="blog-overlay d-flex flex-column gap-1 p-5 justify-content-end h-100">
              <span className="accent-color-5" style={{ fontSize: 12 }}>
                {moment(date).format("MMMM Do, YYYY")}
              </span>
              <h5 className="text-white">{title}</h5>
              <Link href={`/blogs/blog/${id}`} className="accent-color-5">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
