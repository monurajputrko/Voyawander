import React, { useContext, useEffect, useState } from "react";
import HolidaysCard from "./HolidaysCard";
import HolidayFooter from "../HolidayFooter/HolidayFooter";
import HolidaySearch from "./HolidaySearch";
import HolidayContext from "../HolidayContext";
import HolidayPlaces from "../HolidayPlaces/HolidayPlaces";

const Holidays = () => {
  const { data, showDestination } = useContext(HolidayContext);
  const {  } = useContext(HolidayContext);
  return (
    <div>
    <HolidayPlaces/>
      {!showDestination ? (
        <HolidaySearch />
      ) : (
        <div>
          {data.map((holi) => {
            return <HolidaysCard key={holi.id} {...holi} />;
          })}
        </div>
      )}

      <HolidayFooter />
    </div>
  );
};

export default Holidays;
