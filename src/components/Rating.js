import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "./custom.css";

const Rating = ({ rating }) => {
  const stars = [];
  const wholeStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < wholeStars) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
    } else if (i === wholeStars && rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
    }
  }
  return <span>{stars}</span>;
};

export default Rating;
