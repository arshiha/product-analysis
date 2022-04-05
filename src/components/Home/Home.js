import React from "react";
import Image from "../../Image/cemera3.jpg";
import "./Home.css";
// import useReviews from "../../Hooks/useReviews";
// import CustomarReview from "../CustomarReview/CustomarReview.js";
// import { useState } from "react/cjs/react.production.min";

const Home = () => {
  // const [reviews, setReviews] = useState([]);

  // useE;
  return (
    <div>
      <div className="text">
        <div>
          <h1 className="header">
            There's Beauty <br></br> <span className="text-style">In Simplicity</span>
          </h1>
          <p className="text-info">
            Canon DSLR cameras combine a large CMOS (APS-C or full-frame) sensor
            with an advanced image processor to capture a range of high-quality
            shots. Compose photos and videos with an optical viewfinder, capture
            moments with fast frame rates and experience outstanding autofocus,
            steadying image stabilization, high resolution 4K and Full HD video
            and more with our full range of DSLR cameras.
          </p>
          <button className="btn">Live Demo</button>
        </div>
        <div className="img-container">
          <img src={Image} alt="" />
        </div>
      </div>
      {/* <div>
        {reviews.map((data) => (
          <CustomarReview data={data}></CustomarReview>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
