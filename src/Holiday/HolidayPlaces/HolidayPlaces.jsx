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
    handleRating
  } = useContext(HolidayContext);
  return (
    <div className={styles.HolidayPlaces_Div}>
      <div className={styles.place}>
        <button onClick={() => handlePlace("Leh")}>Leh</button>
        <button onClick={() => handlePlace("Dubai")}>Dubai</button>
        <button onClick={() => handlePlace("Pangong")}>Pangong</button>
        <button onClick={() => handlePlace("Srinagar")}>Srinagar</button>
        <button onClick={() => handlePlace("Maldives")}>Maldives</button>
        <button onClick={() => handlePlace("Male")}>Male</button>
        <button onClick={() => handlePlace("Manali")}>Manali</button>
        <button onClick={() => handlePlace("Munnar")}>Munnar</button>
        <button onClick={() => handlePlace("Kargil")}>Kargil</button>
        <button onClick={() => handlePlace("Kochi")}>Kochi</button>
        <button onClick={() => handlePlace("Bangalore")}>Bangalore</button>
        <button onClick={() => handlePlace("Mahabalipuram")}>
          Mahabalipuram
        </button>
        <button onClick={() => handlePlace("Calicut")}>Calicut</button>
      </div>

      <div>
        <div>
          <select style={{ borderRadius: "10px" }} onChange={handlePrice}>
            <option>Sort By Price</option>
            <option value="desc">High Price</option>
            <option value="asc" >Low Price</option>
          </select>
        </div>

        <div>
          <label>Search Place : ----- </label>
          <input
            placeholder="search places"
            style={{ border: "2px solid black" }}
            onChange={handleSearch}
          />
          <button onClick={handleSearchSubmit}>Search</button>
        </div>

        <div>
          <select style={{ borderRadius: "10px" }} onChange={handlePlaceFor}>
            <option value="friends">Friends</option>
            <option value="family">Family</option>
            <option value="honeymoon">Honeymoon</option>
          </select>
        </div>

        <div>
          <select onChange={handleRating}>
            <option > Sort By Rating</option>
            <option value="desc" >High Rating</option> 
            <option value="asc" >Low Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HolidayPlaces;
