import React from "react";
import styles from "./Holidays.module.css";
import HolidayFooter from "./HolidayFooter/HolidayFooter";
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
          <p>
            {stay} days / {stay+1}/Nights <span>Seller : VoyaWander.com</span>{" "}
          </p>
          <h3>{place}</h3>
        </div>
        <div className={styles.details}>
          <h2> &#8377; {price}/person </h2>
          <button>View Details</button>
        </div>
      </div>
      
    </div>
  );
};

export default HolidaysCard;
