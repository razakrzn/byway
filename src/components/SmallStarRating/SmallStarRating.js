import React from "react";
import FullStar from "../../assets/icons/Small-star.svg";

function StarRating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const starSize = window.innerWidth <= 480 ? "14px" : "17px";

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`full-${i}`}
        src={FullStar}
        alt="Full Star"
        style={{ width: starSize }}
      />
    );
  }

  return (
    <div style={{ display: "flex", gap: "2px", paddingBottom: "3px" }}>
      {stars}
    </div>
  );
}

export default StarRating;
