import React, { useContext } from "react";
import styles from "./Holidays.module.css";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import HolidaySearch from "./HolidaySearch";
import HolidayContext from "../HolidayContext";
import { Link } from "react-router-dom";
import HolidaySingleProduct from "../HolidaySingleProductPage/HolidaySingleProduct";
import "../common-styles/index.css";

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
  const { fetchDataId } = useContext(HolidayContext);

  return (
    <div className={styles.HolidaysCard}>
      <div className={styles.holidayDiv}>
        <div className={styles.holidayImage}>
          <img src={image} />
        </div>
        <div className={styles.flexDetailAndTitle}>
          <div className={styles.title}>
            <h1 className="h1">{title}</h1>
            <p className="p" style={{ fontSize: "15px" }}>
              {stay} Days / {stay + 1}Nights <br />
              <span style={{ fontSize: "15px", color: "darkcyan" }}>
                Seller : Voyawander.com
              </span>{" "}
            </p>
            <h3 className="h3"> Place : {place}</h3>
            <h3 className="h3">Rating : {rating} </h3>
          </div>
          <div className={styles.details}>
            <h2> &#8377; {price}/person </h2>
            <button className={styles.button} onClick={() => fetchDataId(id)}>
              {" "}
              <Link to="/singleproductpage" element={<HolidaySingleProduct />}>
                {" "}
                View Details
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaysCard;

/* 
HolidayPlaces Module css





*/
