import React, { useContext, useEffect, useState } from "react";
import HolidaysCard from "../HolidayPage/HolidaysCard"
import styles from "./Holidays.module.css"
import HolidayContext from "../HolidayContext";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import HolidayPlaces from "../HolidayPlaces/HolidayPlaces";
const Holidays = () => {
  const { data, showDestination } = useContext(HolidayContext);
  const {} = useContext(HolidayContext);
  return (
    <div className={styles.HolidayComponent}>
    <HolidayPlaces/>
      {data.map((holi) => {
        return <HolidaysCard key={holi.id} {...holi} />;
      })}
      <HolidayFooter/>
    </div>
  );
};

export default Holidays;
