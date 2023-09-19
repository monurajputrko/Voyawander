import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateSingleProduct } from "../Redux/payment/action-creator";
import styles from "./HotelComponent.module.css";
import { useConst } from "@chakra-ui/react";
import HolidayContext from "../Holiday/HolidayContext";
import { useContext } from "react";
import { setSingleProduct } from "../Redux/singleproduct/action-creator";

const HotelComponent = ({
  hotel: {
    title,
    image,
    price,
    rating,
    location,
    city,
    category,
    reviewCount,
    id,
  },
  group_size,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSinglePage = () => {};

  return (
    <div
      className={styles.hotel_component}
      onClick={() => {
        dispatch(
          setSingleProduct({
            title: title,
            price_per_day: price,
            group_size: 1,
            act_price: price,
            tour_length: 10,
            save_price: price - price,
            location: location,
          })
        );
        navigate("/singlepage");
      }}>
      <div>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{location}</p>
      <div>
        <div>
          <p>Starts from</p>
          <h4>₹ {price} / night + taxes</h4>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              updateSingleProduct({
                title: title,
                price_per_day: price,
                group_size: 1,
                act_price: price,
                tour_length: 10,
                save_price: price - price,
                location: location,
              })
            );
            navigate("/payment");
          }}>
          Book Now
        </button>
      </div>
    </div>
  );
};
export default HotelComponent;
