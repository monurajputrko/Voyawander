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
        `https://voyawander-json-szvk.onrender.com/${value}Place`
      );
      console.log(res);
      setLocations(res.data);
    } catch (er) {
      console.error(er);
      setLocations([
        "Mumbai",
        "Hydrabad",
        "Bangalore",
        "Leh",
        "Srinagar",
        "Pangong",
        "Maldives",
        "Male",
        "Mauriitus",
        "Mauritius",
        "Dubai",
        "Manali",
        "Kargil",
        "Munnar",
        "Kochi",
        "Bangalore",
        "Mahabalipuram",
        "Calicut",
      ]);
    }
  };

  const handleFilterChange = (e) => {
    if (e.target.value !== "") {
      setFilter((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  const handleCategoryChange = (e) => {
    if (e.target.value !== "") {
      makeRequest(e.target.value);
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
        <select
          name="category"
          onChange={(e) => {
            handleFilterChange(e);
            handleCategoryChange(e);
          }}>
          <option value={""}>Category</option>
          <option value="flight">Flight</option>
          <option value="hotel">Hotel</option>
          <option value="holidays">Holiday</option>
        </select>
        <select name="location" onChange={handleFilterChange}>
          <option value={""}>Location</option>
          {locations.map((single, i) => {
            return (
              <option key={i} value={single.toLowerCase()}>
                {single}
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
