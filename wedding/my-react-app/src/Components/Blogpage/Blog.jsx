import React from "react";
import { Link } from "react-router-dom";
import blogpic from "../../assets/Images/freepik1.jpeg";
import blogpic1 from "../../assets/Images/freepik2.jpeg";
import "../../assets/Style/Blog.css";

const Blog = () => {
  return (
    <div className="container py-5 blog-section">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={blogpic}
            alt="Indian wedding cuisine"
            className="img-fluid rounded mb-3"
          />
          <h3 className="text-center bloghead">
            Culinary Traditions of Indian Weddings
          </h3>
          <p className="blogpara">
            Attending an Indian wedding is nothing short of a sensory
            explosion—vibrant colors, joyful music, intricate rituals, and, of
            course, an unforgettable culinary journey.An Indian wedding is a
            vibrant celebration of color, music, tradition, and unforgettable
            flavors.
          </p>
          <p className="text-muted">December 3, 2025</p>
          <div className="text-center py-3">
            <Link to="/blogs" className="faq-button text-decoration-none">
              Read More
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={blogpic1}
            alt="Saat Phere ritual"
            className="img-fluid rounded mb-3"
          />
          <h3 className="text-center bloghead">
            Seven Promises, One Sacred Bond
          </h3>
          <p className="blogpara">
            Indian weddings are vibrant celebrations filled with color, music,
            and rituals that hold deep spiritual meaning. Among the most
            profound of these traditions is the saat phere, symbolizing a
            lifelong bond and commitment.
          </p>
          <p className="text-muted">November 5, 2025</p>
          <div className="text-center py-3">
            <Link to="/blogss" className="faq-button text-decoration-none">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
