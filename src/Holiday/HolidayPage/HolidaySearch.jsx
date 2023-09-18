import React, { useContext } from "react";
import HolidayContext from "../HolidayContext";
import styles from "./HolidaySearch.module.css";
const HolidaySearch = () => {
  const { handleDestination, destination, setDestination,handleDeparture } =
    useContext(HolidayContext);
  console.log(destination);

  return (
    <div className={styles.HolidaySearch_Compo}>
      <div className={styles.departure}>
        <label>Departure From</label>
        <select onChange={handleDeparture}>
          <option value="New Delhi">New Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Patna">Patna</option>
        </select>
      </div>
      <div className={styles.destination}>
        <label>Destination</label>
        <select onChange={handleDestination}>
          <option value="all">All Destinations</option>
          <option value="Ladakh">Ladakh</option>
          <option value="Maldives">Maldives</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Kerala">Kerala</option>
          <option value="Dubai">Dubai</option>
          <option value="Manali">Manali</option>
        </select>
      </div>
    </div>
  );
};

export default HolidaySearch;
