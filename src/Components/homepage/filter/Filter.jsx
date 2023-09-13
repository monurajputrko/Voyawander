import React from "react";
import styles from "../HomePage.module.css";

function Filter() {
  return (
    <div className={styles.filter_outer}>
      <div>
        <select className="text-lg text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option value={""}>Location</option>
          <option value="India">Assam</option>
          <option value="India">Goa</option>
        </select>
        <select className="text-lg text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option value={""}>Category</option>
          <option value="India">Flight</option>
          <option value="India">Hotel</option>
          <option value="India">Holiday</option>
        </select>
        <select className="text-lg text-gray-500 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
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
      <button>Search</button>
    </div>
  );
}

export default Filter;
