import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Style/Want.css";

const Wantwelcome = () => {
  return (
    <div className="want-bg">
      <h2 className="text-center wantto ">
        Want to welcome guests from around the world to your wedding?
      </h2>

      <p className="text-center want-para">
        If sharing your wedding joy with international travelers who truly value
        Indian traditions excites you, we’d love to connect with you.
      </p>

      <div className="text-center py-3">
        <Link to="/host" className="faq-button text-decoration-none">
          Become a Host
        </Link>
      </div>
    </div>
  );
};

export default Wantwelcome;
