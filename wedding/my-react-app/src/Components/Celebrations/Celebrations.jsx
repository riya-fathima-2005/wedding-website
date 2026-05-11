import React from "react";
import Filter from "../Filterss/Filter";
import Choose from "./Choose";
import Aboutweds from "./Aboutweds";
import { useLocation } from "react-router-dom";

const Celebrations = () => {
  const location = useLocation();
  const weddingType = location.state?.weddingType || "christian";    // Default to christian
  
  return (
    <div>

      <Aboutweds weddingType={weddingType} />
      <Filter weddingType={weddingType} />
      <Choose weddingType={weddingType} />
    </div>
  );
};

export default Celebrations;