import React from "react";
import Image from "../../Image/cemera3.jpg";
import "./ProductImg.css";

const ProductImg = () => {
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
      <nav className="img">
        <img src={Image} alt="" />
      </nav>
    </div>
  );
};

export default ProductImg;
