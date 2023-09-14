import { createContext } from "react";
import { useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
const HolidayContext = createContext();

export const HolidayContextProvider = ({ children }) => {
  console.log(children);
  const [data, setData] = useState([]);
  const [destination, setDestination] = useState("Ladakh");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [searchVal , setSearchVal] = useState("");
  const [showDestination, setShowDestination] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSearch,setShowSearch] = useState(false);
  const [placeFor,setPlaceFor] = useState("");
  const [showPlaceFor,setShowPlaceFor] = useState(false)

  const handleDestination = (e) => {
    setDestination(e.target.value);
    setShowDestination(true);
  };

  function handlePlace(p) {
    setPlace(p);
    setShowPlace(true);
  }
  function handlePlaceFor(e) {
    setPlaceFor(e.target.value);
    setShowPlaceFor(true);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
    setShowPrice(true);
  }

  function handleSearch (e) {
  setSearchVal(e.target.value)
  }

  function handleSearchSubmit(){
    setShowSearch(true);
  }

  console.log("showSearch   " + showSearch)

  // console.log("place" + place)
  // console.log(showDestination);
  // console.log("showPlace  " + showPlace )
  // console.log(destination);
  console.log(searchVal)

  console.log("price " + price);
  console.log(showPrice)
  useEffect(() => {
    const fetchData = async (destination, place,searchVal) => {
      let url = `http://localhost:3000/holiday`;
      if (showDestination) {
        url = `http://localhost:3000/holiday?state=${destination}`;
      } else {
        url = url;
      }
      if (showPlace) {
        url = `http://localhost:3000/holiday?place=${place}`;
      } else {
        url = url;
      }

      if (showPrice==true && price === "asc") {
        url = `http://localhost:3000/holiday?_sort=price&_order=asc`;
      } 
       if (price === "desc") {
        url = `http://localhost:3000/holiday?_sort=price&_order=desc`;
      } 
      if(showSearch){
        url=`http://localhost:3000/holiday?q=${searchVal}`
      }else{
        url=url;
      }
      if(showPlaceFor){
        url=`http://localhost:3000/holiday?type=${placeFor}`
      }

      console.log(url);

      try {
        const result = await fetch(url);
        const res = await result.json();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(destination, place,searchVal,placeFor,showPlaceFor);
  }, [destination, place ,showPrice,price,searchVal,showSearch,placeFor,showPlaceFor]);



  return (
    <HolidayContext.Provider
      value={{
        data,
        destination,
        handlePrice,
        handleDestination,
        setDestination,
        showDestination,
        handlePlace,
        handleSearch,
        handleSearchSubmit,
        handlePlaceFor
      }}
    >
      {children}
    </HolidayContext.Provider>
  );
};

export default HolidayContext;
