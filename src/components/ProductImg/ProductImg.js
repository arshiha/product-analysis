import React from "react";

import "./ProductImg.css";
import useReviews from "../../Hooks/useReviews";
import CustomarReview from "../CustomarReview/CustomarReview.js";

const ProductImg = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="image">
      <div className="text">
        <h1>
          There's Beauty <br></br> <span className="color">In Simplicity</span>
          <h6 className="text-info">
            <small>
              Compose photos and videos with an optical viewfinder, capture
              moments with fast frame rates and experience outstanding
              autofocus, steadying image stabilization.
            </small>
          </h6>
          <button className="btn">Live Demo</button>
        </h1>
      </div>
      <nav className="img"></nav>

      <div>
        {reviews.map((data) => (
          <CustomarReview data={data} key={data._id}></CustomarReview>
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
