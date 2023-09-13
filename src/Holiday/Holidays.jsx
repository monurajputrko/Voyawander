import React, { useEffect, useState } from "react";
import HolidaysCard from "./HolidaysCard";
import HolidayFooter from "./HolidayFooter/HolidayFooter";

const Holidays = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch(`http://localhost:3000/holiday`);
      const res = await result.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    {data.map((holi)=>{
    return    <HolidaysCard key={holi.id} {...holi} />
    })}
    <HolidayFooter/>
    </div>
  );
};

export default Holidays;
