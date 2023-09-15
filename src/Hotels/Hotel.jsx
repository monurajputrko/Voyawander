import axios from "axios";
import { useEffect, useState } from "react";
import HotelComponent from "./HotelComponent";
import styles from "../Hotels/HotelComponent.module.css";
import { useSearchParams } from "react-router-dom";

const Hotel = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("location"));

  const initialData = [];

  const [apiData, setApiData] = useState(initialData);
  const [page, setPage] = useState(1);
  const [currItems, setCurrItems] = useState(0);
  const [sortOrder, setOrderBy] = useState("");
  const [pageNumbers, setPageNumbers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const people = searchParams.get("people") || 1; // will give us the people, if people param is there it will provide us number or else it will give us 1

  let primaryURL = `https://voyawander-json-szvk.onrender.com/hotels?_page=1&_limit=12`;

  // checking for search params if available then adding one q param or else go with normal page
  let url = searchParams.get("location")
    ? `https://voyawander-json-szvk.onrender.com/hotels?q=${searchParams.get(
        "location"
      )}_page=${page}&_limit=12`
    : `https://voyawander-json-szvk.onrender.com/hotels?_page=${page}&_limit=12`;

  const fetchApiData = async (sortOrder, page, url, search) => {
    if (sortOrder === "default") {
      // setIsLoading(true);
      url = primaryURL;
    } else if (sortOrder === "aToZasc") {
      setIsLoading(true);
      url = `${primaryURL}&_sort=title&_order=asc`;
    } else if (sortOrder === "aToZdesc") {
      setIsLoading(true);
      url = `${primaryURL}&_sort=title&_order=desc`;
    } else if (sortOrder === "priceAsc") {
      setIsLoading(true);
      url = `${primaryURL}&_sort=price&_order=asc`;
    } else if (sortOrder === "priceDesc") {
      setIsLoading(true);
      url = `${primaryURL}&_sort=price&_order=desc`;
    } else if (sortOrder === "ratingsAsc") {
      setIsLoading(true);
      url = `${primaryURL}&_sort=rating&_order=asc`;
    } else if (sortOrder === "ratingsDesc") {
      setIsLoading(true);
      url = `${primaryURL}&_sort=rating&_order=desc`;
    } else if (search !== "") {
      setIsLoading(false);
      url = `https://voyawander-json-szvk.onrender.com/hotels?q=${search}`;
    }
    console.log(url);

    try {
      const res = await axios.get(url);
      setCurrItems(res.data.length);
      const totalItems = res.headers.get(`X-Total-Count`);
      const totalPagesFinal = Math.ceil(totalItems / 12);
      let pageNumbersTemp = Array.from(
        { length: totalPagesFinal },
        (_, index) => index + 1
      );
      setPageNumbers(pageNumbersTemp);
      const finalData = res.data;
      setApiData(finalData);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchApiData(sortOrder, page, url, search);
  }, [sortOrder, page, search, url]);

  return (
    /*isLoading ? <h1 className={styles.loading}>Page Loading, Please Wait a Moment !</h1> : */ <div>
      <div className={styles.filters_div}>
        <div className={styles.search}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
        <div className={styles.sort_price}>
          <select
            name="sortingFunctionality"
            id="sortingFunctionality"
            onChange={(event) => {
              setOrderBy(event.target.value);
            }}>
            Sort By:
            <option value="default">Default</option>
            <option value="aToZasc">Sort A to Z</option>
            <option value="aToZdesc">Sort Z to A</option>
            <option value="priceAsc">Price - Low to High</option>
            <option value="priceDesc">Price - High to Low</option>
            <option value="ratingsAsc">Ratings - Low to High</option>
            <option value="ratingsDesc">Ratings - High to Low</option>
          </select>
        </div>
      </div>
      <div className={styles.allhotels}>
        {apiData?.map((hotel) => {
          return (
            <div>
              <HotelComponent key={hotel.title} hotel={hotel} />
            </div>
          );
        })}
      </div>
      {isLoading ? (
        <h1 className={styles.no_items}>
          Page Loading, Please Wait a Moment !
        </h1>
      ) : (
        ""
      )}
      ;
      {currItems === 0 && isLoading === false ? (
        <h1 className={styles.no_items}>No Results Found !</h1>
      ) : (
        ""
      )}
      ;
      {isError ? (
        <h1 className={styles.no_items}>
          Oops !!! Error Occured While Loading the Page.
        </h1>
      ) : (
        ""
      )}
      <div className={styles.pagination}>
        {pageNumbers.map((num, index) => {
          return (
            <button onClick={() => setPage(num)} key={index}>
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
