import React, { useContext, useEffect, useState } from "react";
import HolidaysCard from "../HolidayPage/HolidaysCard";
import styles from "./Holidays.module.css";
import HolidayContext from "../HolidayContext";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import HolidayPlaces from "../HolidayPlaces/HolidayPlaces";
const Holidays = () => {
  const { data, showDestination } = useContext(HolidayContext);
  const {} = useContext(HolidayContext);
  return (
    <div className={styles.HolidayComponent}>
      <HolidayPlaces />
      {data.length <= 0 ? (
        <div>
          {" "}
          <img src="https://media1.giphy.com/media/MF1z8yeGEauJfZNwOL/giphy.gif" />
        </div>
      ) : (
        <div>
          {" "}
          {data.map((holi) => {
            return <HolidaysCard key={holi.id} {...holi} />;
          })}
        </div>
      )}
      <HolidayFooter/>
    </div>
  );
};

export default Holidays;
