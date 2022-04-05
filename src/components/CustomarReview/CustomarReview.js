import React from "react";

const CustomarReview = ({ data }) => {
  const { name, picture, reviews } = data;
  return (
    <div>
      <h1>{name}</h1>
      <img src={picture} alt="" />
      <p>{reviews}</p>
    </div>
  );
};

export default CustomarReview;
