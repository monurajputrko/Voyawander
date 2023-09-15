
import styles from "./HotelComponent.module.css";

const HotelComponent = ({hotel}) => {
    const {title, image, price, rating, location, city, category, reviewCount} = hotel;
    
    return <div className={styles.hotel_component}>
            <div >
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{location}</p>
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ {price} / night + taxes</h4>
              </div>
              <button>Book Now</button>
            </div>
          </div>
}
export default HotelComponent;