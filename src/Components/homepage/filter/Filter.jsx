import React, { useState } from "react";
import styles from "../HomePage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Filter() {
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    location: "",
    category: "",
    people: "",
  });

  const makeRequest = async (value) => {
    try {
      const res = await axios.get(
        `https://voyawander-json-szvk.onrender.com/${value}`
      );
      console.log(res);
      setLocations(res.data);
    } catch (er) {
      console.error(er);
    }
  };

  const handleFilterChange = (e) => {
    if (e.target.value !== "") {
      makeRequest(e.target.value);
      setFilter((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  const handleSearchClick = () => {
    if (
      filter.category !== "" &&
      filter.location !== "" &&
      filter.people !== ""
    ) {
      navigate(
        `/${filter.category}?location=${filter.location}&people=${filter.people}`
      );
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className={styles.filter_outer}>
      <div>
        <select name="category" onChange={handleFilterChange}>
          <option value={""}>Category</option>
          <option value="flight">Flight</option>
          <option value="hotel">Hotel</option>
          <option value="holiday">Holiday</option>
        </select>
        <select name="location" onChange={handleFilterChange}>
          <option value={""}>Location</option>
          {locations.map((single, i) => {
            return (
              <option key={i} value={single.place}>
                {single.place}
              </option>
            );
          })}
        </select>
        <select name="people" onChange={handleFilterChange}>
          <option value={""}>People</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default Filter;
