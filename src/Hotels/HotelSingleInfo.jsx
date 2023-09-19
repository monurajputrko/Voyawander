import { useEffect, useState } from "react";
import styles from "./HotelSingleInfo.module.css";
import Carousel from "./Carousel";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleProduct } from "../Redux/payment/action-creator";
import { IoLocationOutline } from "react-icons/io5";

const HotelSingleInfo = () => {
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
  const [people, setPeople] = useState(0);
  const [isBookVisible, setIsBookVisible] = useState(false);

  const handleBookShow = () => {
    setIsBookVisible(true);
  };

  const hotelSingleData = useSelector((state) => state.singleproduct);

  console.log(hotelSingleData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carousel = [
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/3934/3934837/images/c5bb318a_z.jpg",
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/3934/3934837/images/2be175ee_z.jpg",
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/3934/3934837/images/27cd3faa_z.jpg",
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/3934/3934837/images/c7881667_z.jpg",
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/3934/3934837/images/1f5c1e89_z.jpg",
    "https://fastui.cltpstatic.com/image/upload/w_1016,h_624,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/3934/3934837/images/222df449_z.jpg",
  ];

  const isAvailable = () => {
    // e.preventDefault();
    handleBookShow();
    alert("Room available !");
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.hotel_info}>
        <div className={styles.carosel}>
          <Carousel images={carousel} />
        </div>
        <div className={styles.hotel_data}>
          <p className={styles.headline}>{hotelSingleData.title}</p>
          <div className={styles.location}>
            <IoLocationOutline size={"25px"} />
            <p>Location: {hotelSingleData.location}</p>
          </div>
          <p className={`${styles.headline} ${styles.lasthead}`}>Activities:</p>
          <p>Fitness centre</p>
          <p>Spa and wellness centre</p>
          <p>Yoga classes</p>
          <h2>₹ {hotelSingleData.price_per_day}</h2>
          {/* </div> */}

          {/* <div className={styles.check_availability}> */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <label htmlFor="">Check-In</label>
            <input
              required={true}
              onChange={(e) => setInDate(e.target.value)}
              type="date"
              name=""
              id=""
              min="2023-09-18"
            />
            <br />
            <label htmlFor="">Check-Out</label>
            <input
              required={true}
              onChange={(e) => setOutDate(e.target.value)}
              type="date"
              name=""
              id=""
              min="2023-09-18"
            />
            <br />
            <label htmlFor="">Guests</label>
            <input
              onChange={(e) => setPeople(e.target.value)}
              type="number"
              name="guests"
              placeholder="1"
            />
            <br />
            {!isBookVisible && (
              <button onClick={isAvailable}>Check Availability</button>
            )}
            {isBookVisible && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    updateSingleProduct({
                      title: hotelSingleData.title,
                      price_per_day: hotelSingleData.price_per_day || 0,
                      group_size: +people || 1,
                      act_price: hotelSingleData.price_per_day || 0,
                      tour_length: 10,
                      start_date: inDate,
                      end_date: outDate,
                      save_price:
                        hotelSingleData.price_per_day -
                          hotelSingleData.price_per_day || 0,
                    })
                  );
                  navigate("/payment");
                }}>
                Book Now
              </button>
            )}
          </form>

          {/* <h2>Check-In: 2.00 PM</h2>
          <h2>Check-Out: 11.00AM</h2> */}
        </div>
      </div>

      <h1>HOTEL AMENITIES</h1>
      <div className={styles.hotel_aminities}>
        <div className={styles.activities}>
          <h3>Activities - Indoor & Outdoor</h3>
          <ul>
            <li>Full Services Health Spa</li>
            <li>Massage</li>
            <li>Kids Play Area</li>
            <li>Transportation Service</li>
            <li>Porter</li>
            <li>Gym</li>
          </ul>
        </div>

        <div className={styles.services}>
          <h3>Services</h3>
          <ul>
            <li>Lounge</li>
            <li>Housekeeping</li>
            <li>Wedding services</li>
            <li>Business center</li>
            <li>Babysitting or child care</li>
            <li>24-Hour Front Desk</li>
          </ul>
        </div>

        <div className={styles.general}>
          <h3>General</h3>
          <ul>
            <li>Dining</li>
            <li>Food & Beverages</li>
            <li>Conference Room</li>
            <li>Boutique</li>
            <li>Non-smoking Rooms</li>
            <li>Multilingual staff</li>
          </ul>
        </div>

        <div className={styles.media}>
          <h3>Media & Entertainment</h3>
          <ul>
            <li>TV</li>
          </ul>
        </div>

        <div className={styles.Parking}>
          <h3>Parking & Transportation</h3>
          <ul>
            <li>Parking</li>
          </ul>
        </div>

        <div className={styles.Safety}>
          <h3>Safety & Security</h3>
          <ul>
            <li>24-Hour Security</li>
          </ul>
        </div>
      </div>

      <h1>REVIEWS</h1>
      <div className={styles.reviews}>
        <div className={styles.single_review}>
          <div className={styles.top_portion_review}>
            <h4>Bina Soni</h4>
            <h4>4/5</h4>
          </div>
          <p>
            We had a lovely time staying at Sterling Goa Varca Resort. The rooms
            were great and the food in the dining area was also amazing. They
            had a lovely indoor pool and a lot of other activities which you
            could do right there in the resort. The beach was a short walk from
            the resort and was really lovely. I strongly recommend this place
            for people who want to have a nice, quiet, easy time visiting Goa
            for its beauty and beach experience.
          </p>
        </div>
        <div className={styles.single_review}>
          <div className={styles.top_portion_review}>
            <h4>kamakshi anubhav naresh</h4>
            <h4>4.2/5</h4>
          </div>
          <p>
            Extremely courteous staff.. hospitable.. great location.. great
            location. Lot of activities for kids. Sterling properties never
            disappoint. All the properties I have been to have been the same..
            comfortable and relaxing.
          </p>
        </div>
        <div className={styles.single_review}>
          <div className={styles.top_portion_review}>
            <h4>Atul Haldonkar</h4>
            <h4>3.6/5</h4>
          </div>
          <p>
            Beautiful stay! Hotel Arthur is a perfect place to stay in. It is
            close to the barca beach. The room was very pleasant, it was cozy
            and clean. Breakfast was good.The full hotel team has always been
            friendly, patient and helpful. That impressed me the most.They have
            holiday outdoor activities for kids and Adults which was amazing
            enjoyed lot.
          </p>
        </div>

        <div className={styles.single_review}>
          <div className={styles.top_portion_review}>
            <h4>Vijay Shankar</h4>
            <h4>5/5</h4>
          </div>
          <p>
            Even though you can go here n think you have arrived to a great
            beach . You won't. The property folks think they are gods and won't
            even give you a bottle of water. Apparently a box of ice is charged
            200 bucks. Worst part is the food. Prefer ordering it from Zomato.
            Would never ever go there. Worse than a haunted place
          </p>
        </div>
        <div className={styles.single_review}>
          <div className={styles.top_portion_review}>
            <h4>Virot Komhli</h4>
            <h4>2.5/5</h4>
          </div>
          <p>
            Avoid this resort. I booked expecting it to be good since a Sterling
            property. The rooms are big, have a balcony and airy but that's it!
            Maintenance is very poor. AC didn't work properly on 1st day and
            after several follow ups it was fixed the next evening.
          </p>
        </div>
        <div className={styles.single_review}>
          <div className={styles.top_portion_review}>
            <h4>Sleepy Joe</h4>
            <h4>4.1/5</h4>
          </div>
          <p>
            Decent pool and comfortable rooms with all facilities. The bathrooms
            need a little remodelling... Overall a good bang for the buck.
          </p>
        </div>
      </div>

      <h1>HIGHLIGHTS</h1>
      <div className={styles.highlights}>
        <h2>Enjoy a luxurious experience in a beautiful setting!</h2>
        <p>
          Sterling Goa Varca is a 4-star resort located in Southern Goa. The
          property is merely 850 metres from Varca Beach and 2.5 km from San
          Thome Museum. Some rooms offer a pleasant and scenic view of palm
          trees and pool.
        </p>
        <h2>Hotel Facilities</h2>
        <p>
          The resort features a spa, a swimming pool and a state-of-the-art
          gymnasium. Additional facilities include 24-hour front desk, travel
          counter, concierge, currency exchange, baggage storage and parking. It
          offers various adventure activities such as boat cruises, hiking,
          dolphin watching, fishing, water sports and city tours. The resort
          also features a game room, which is equipped with video games.
        </p>
        <h2>Room Facilities</h2>
        <p>
          The resort offers 71 spacious accommodation options that comprise
          Classic Rooms with balcony, Premiere Range Rooms, and Privilege
          Suites. All the accommodations are air-conditioned and feature a host
          of modern amenities like TV, a mini-bar, tea/coffee maker and separate
          sitting area. The attached bathrooms are equipped with free
          toiletries.
        </p>
        <h2>Dining</h2>
        <p>
          Guests can relish local, traditional and continental cuisines at the
          in-house restaurant. The resort also has a bar on-site where patrons
          can relax and unwind.
        </p>
        <h2>Important Landmarks</h2>
        <p>
          The resort is around 8 km from Madgaon Railway Station and 28 km from
          Goa International Airport. Other key attraction near the resort
          include San Thome Museum (2.5 km), Fatrade Beach (3 km), Benaulim
          Beach (5.5 km), and Pandava Caves (9 km).For business travellers,
          Panjim - the city centre of Goa is 41.5 km away from the resort. The
          Portugal India business (PIB) hub, established in 2017, is located in
          the capital.
        </p>
        <h2>
          What makes this property a first choice among travellers is its
          exceptional setting and excellent services.
        </h2>
        <h2>Book Sterling Goa Varca now and revel in the best!</h2>
      </div>

      <h1>HOTEL POLICIES</h1>
      <div className={styles.hotel_policies}>
        <ul>
          <li>
            Yatra shall not be responsible or be liable for any denied check-in
            or cancellation of booking or denial of entry through the state
            borders or any such like, due to the government-mandated guidelines.
          </li>
          <li>
            The primary guest must be at least 18 years of age to check into
            this hotel(s).
          </li>
          <li>
            As per Government regulations, It is mandatory for all guests above
            18 years of age to carry a valid photo identity card & address proof
            at the time of check-in. In case, check-in is denied by the hotel(s)
            due to lack of required documents, you cannot claim for the refund &
            the booking will be considered as NO SHOW.
          </li>
          <li>
            Unless mentioned, the tariff does not include charges for optional
            room services (such as telephone calls, room service, mini bar,
            snacks, laundry extra bed etc.). In case, such additional charges
            are levied by the hotel(s), we shall not be held responsible for it.
          </li>
          <li>
            Extra bed can be accommodated with a folding cot or a mattress,
            subject to room size & availability.
          </li>
          <li>
            The hotel(s) reserves the right to decline accommodation to
            localites/same city residents / Posing Couples. Yatra.com will not
            be responsible for any check-in declined by the hotel(s) or any
            refunds due to the above mentioned reason.
          </li>
          <li>
            The hotelier may charge your Card/Account for additional
            cancellation charges, if any.
          </li>
          <li>
            All hotel(s) charge a compulsory Gala Dinner Supplement on Christmas
            and New Year's eve. Other special supplements may also be applicable
            during festival periods such as Dusshera, Diwali etc. Any such
            charge would have to be cleared directly at the hotel(s).
          </li>
          <li>
            In case of an increase in the hotel(s) tariff (due to an event or
            festive occasion) the customer is liable to pay the difference, if
            the period of stay falls within this duration.
          </li>
          <li>
            Invoice for hotel stay must be collected at the time of checkout,
            directly from the hotel.
          </li>
          <li>Local ID proof & Pan card will not be acceptable as ID proof.</li>
          <li>
            Yatra.com will not be responsible for any service issues at the
            hotel(s)
          </li>
          <li>
            For Day Use booking, extension of stay beyond the time slots booked
            will levy additional charges.
          </li>
        </ul>
      </div>

      <h1>FAQs</h1>
      <div className={styles.faq}>
        <h2>How do I know my reservation was booked ?</h2>
        <p>
          You will receive an SMS and email on confirmation of your hotel(s)
          booking.
        </p>
        <h2>Do I need to confirm my reservation ?</h2>
        <p>
          There is no need to confirm your reservation. If you still feel you
          would like to verify that your reservation was made, you can do so by
          writing to our Customer Support Team or by contacting our customer
          services team.
        </p>
        <h2>How do I cancel/amend a hotel(s) reservation?</h2>
        <p>
          To cancel a booking log in to My Bookings section or call our call
          center on 0120-6907420 (all networks).
          <br />
          To amend a booking call our call center on 0120-6907420 (all
          networks).
        </p>
        <h2>
          Is there a cancellation policy for hotel(s) booked on Yatra.com?
        </h2>
        <p>
          The cancellation policy for hotel(s) bookings varies according to
          hotel(s) and room type. For more information, please check the
          cancellation policy mentioned next to the price for the room type. If
          you are cancelling after the check-in date, there will be no refund.
          In all cases, you'll be charged a standard cancellation fee of Rs. 250
          per booking over and above the hotel(s)'s own cancellation charges.
        </p>
        <h2>How do I pay for the gala dinner?</h2>
        <p>
          Gala dinner charges which are applicable for Christmas and New Year
          dates would be extra and payable directly to the hotel(s). Please
          check with the hotel(s) directly for more information on the same.
        </p>
      </div>
    </div>
  );
};

export default HotelSingleInfo;
