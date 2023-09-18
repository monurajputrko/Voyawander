import React, { useContext } from "react";
import styles from "./HolidayPlaces.module.css";
import HolidayContext from "../HolidayContext";
const HolidayPlaces = () => {
  const {
    handlePlace,
    handlePrice,
    handleSearch,
    handleSearchSubmit,
    handlePlaceFor,
    handleRating,
  } = useContext(HolidayContext);
  return (
    <div className={styles.HolidayPlaces_Div}>
      <div className={styles.place}>
        {[
          "Leh",
          "Dubai",
          "Pangong",
          "Srinagar",
          "Maldives",
          "Male",
          "Manali",
          "Munnar",
          "Kargil",
          "Kochi",
          "Bangalore",
          "Mahabalipuram",
          "Calicut",
        ].map((place) => (
          <button key={place} onClick={() => handlePlace(place)}>
            {place}
          </button>
        ))}
      </div>

      <div className={styles.functionality}>
        <div className={styles.selectContainer}>
          <select className={styles.select} onChange={handlePrice}>
            <option>Sort By Price</option>
            <option value="desc">High Price</option>
            <option value="asc">Low Price</option>
          </select>
        </div>

        <div className={styles.selectContainer}>
          <select className={styles.select} onChange={handlePlaceFor}>
            <option value="friends">Friends</option>
            <option value="family">Family</option>
            <option value="honeymoon">Honeymoon</option>
          </select>
        </div>
        <div className={styles.selectContainer}>
          <select className={styles.select} onChange={handleRating}>
            <option>Sort By Rating</option>
            <option value="desc">High Rating</option>
            <option value="asc">Low Rating</option>
          </select>
        </div>
        <div className={styles.search}>
          <label>Search Place : </label>
          <input placeholder="Search places" onChange={handleSearch} />
          <button className={styles.button} onClick={handleSearchSubmit}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPlaces;
