import React from "react";
import FullStar from "../../assets/icons/star.svg";
import HalfStar from "../../assets/icons/halfstar.svg";
import EmptyStar from "../../assets/icons/unfilstar.svg";

function StarRating({ rating }) {
  const stars = [];
  const starSize = window.innerWidth <= 480 ? "14px" : "18px";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`full-${i}`}
        src={FullStar}
        alt="Full Star"
        style={{ width: starSize, height: starSize }}
      />
    );
  }

  if (halfStar) {
    stars.push(
      <img
        key="half"
        src={HalfStar}
        alt="Half Star"
        style={{ width: starSize, height: starSize }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <img
        key={`empty-${i}`}
        src={EmptyStar}
        alt="Empty Star"
        style={{ width: starSize, height: starSize }}
      />
    );
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
}

export default StarRating;
