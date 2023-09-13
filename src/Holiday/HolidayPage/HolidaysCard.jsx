import React from "react";
import styles from "./Holidays.module.css";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import HolidaySearch from "./HolidaySearch";
const HolidaysCard = ({
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  price,
  overview,
  about,
  title,
  place,
  id,
  rating,
  stay,
}) => {
  return (
    <div className={styles.HolidaysCard}>
      <div className={styles.holidayDiv}>
        <div className={styles.holidayImage}>
          <img src={image} />
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p style={{fontSize:"15px"}}>
            {stay} Days / {stay + 1}Nights <span style={{fontSize:"15px", color:"darkcyan"}}>Seller : VoyaWander.com</span>{" "}
          </p>
          <h3> Place : {place}</h3>
          <div className={styles.details}>
            <h2> &#8377; {price}/person </h2>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaysCard;
