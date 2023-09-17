import React, { useContext, useState } from "react";
import HolidayContext from "../HolidayContext";
import styles from "./HolidaySingleProduct.module.css";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HolidaySingleProduct = () => {
  const [current, setCurrent] = useState(0);
  const { singleProductData, destination } = useContext(HolidayContext);

  console.log(singleProductData);

  const {
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
    state,
    stay,
  } = singleProductData;

  const top_crousel_img = [
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464956592/Alleppey_Activities_to_do_Houseboating_with_Kerala_Houseboats.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1433836321/Munnar_1.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_9ec063c9.jpg",
    "https://cdn.tourradar.com/s3/tour/1500x800/142637_a1b540e4.jpg",
  ];

  console.log(top_crousel_img);

  const len = top_crousel_img.length;
  console.log(top_crousel_img);
  console.log(len);
  const nextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

  console.log(singleProductData);
  return (
    <div className={styles.HolidaySingleProductComponent}>
      <div className={styles.input}>
        <form className={styles.form}>
          <input placeholder="Departure" />
          <input placeholder="Destination" />
          <input type="date" />
          <button>Search</button>
        </form>
      </div>
      <div className={styles.flexDetails}>
        <div>
          <h1 style={{ fontSize: "30px" }}> {title} </h1>
          <p style={{ fontSize: "15px", color: "darkcyan", fontWeight: "600" }}>
            Seller : Voyawander.com{" "}
          </p>
          <button className={styles.stay}>{stay} Nights </button>
        </div>
        <div style={{ marginRight: "100px" }}>
          <h2 className={styles.price}>Starting From &#8377; {price}</h2>
          <button className={styles.button}>Book Now</button>
          <button className={styles.querryBtn}>Submit Query</button>
        </div>
      </div>

      <div className={styles.flexCrousal}>
        <div>
          <div>
            {" "}
            {top_crousel_img.map((slideimg, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img className={styles.crousalImg} src={slideimg} />
                  )}
                </div>
              );
            })}
            <div className="forback-btn">
              <button className="prev" onClick={prevSlide}>
                ◀️
              </button>
              <button className="next" onClick={nextSlide}>
                ▶️
              </button>
            </div>
          </div>
        </div>

        <div className={styles.detailsDesc}>
          <div>
            <h1>Customizable Tour</h1>
            <h4>
              Customizable Tour Customizable itineraries where you may choose
              transport, stay & sightseeing as per your taste & comfort
            </h4>
            <hr />
          </div>
          <div>
            <h1>Pay & Hold</h1>
            <h4>
              Pay <span style={{ color: "red" }}>&#8377; 1,000</span> per person
              now and hold the package at this price, payment as per policy can
              be made in the next 24/48 hrs. Holding of seats are subject to
              availability and in case of non availability of selected seats you
              can choose from a wide range of departures. To avail this option,
              click "Book Now".
            </h4>
            <hr />
          </div>

          <div>
            <h2>
              {" "}
              <span>EMI </span>From &#8377; 1966
            </h2>
            <hr />
          </div>

          <div>
            <h1>Stay Plan</h1>
            <p>
              {place} - {stay}{" "}
            </p>
            <p> Nubra - 1 Night </p>
            <p>Pangong - 1 Night </p>
            <p>Leh - 1 Night </p>
          </div>
        </div>
      </div>

      <h1>overview</h1>
      <p>{overview} </p>

      <div className={styles.about}>
        <div>
          <img src="" width={200} />
        </div>
        <div>
          <h1>About {state}</h1>
          <hr />
          <div className={styles.flexAbout}>
            <div>
              <img style={{marginTop:"-5px"}} src={image3} width={300} />{" "}
            </div>
            <div>
              <h3>{about} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidaySingleProduct;
