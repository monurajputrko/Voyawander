import React from "react";
import styles from "./HomePage.module.css";
import roundImage from "./images/roundtwoimage.png";
import mountains from "./images/mountains.png";
import Filter from "./filter/Filter";
import ContactUs from "../contact-us/ContactUs";
import BorderBox from "../common-styles/BorderBox";
import { useDispatch } from "react-redux";
import { updateSingleProduct } from "../../Redux/payment/action-creator";
import { useNavigate } from "react-router";
import { setSingleProduct } from "../../Redux/singleproduct/action-creator";

function HomePage() {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  return (
    <BorderBox>
      {/* first section  */}
      <div className={styles.first_section}>
        <div className={styles.left_side_first}>
          <img src={roundImage} className={styles.rounded_image_first} />
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)"
            className={styles.rounded_image_first}
          /> */}
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/m_destination-kasauli-landscape_l_400_640.jpg"
            className={styles.rounded_image_first}
          /> */}
        </div>

        <div className={styles.right_side_first}>
          <h1 className="">Explore the beauty of Journey</h1>
          <p>
            Join our community of travel enthusiasts and discover new places,
            meet new people, and make lasting memories, Book with us and
            experience the world like never before
          </p>
          <button>Learn more</button>
        </div>
      </div>

      {/* second section */}
      <div className={styles.second_section}>
        <Filter />
        <h1>We Offer the Best</h1>
        <p>
          Our team of travel experts is dedicated to ensure that have the
          vacation of a lifetime. Choose us for your next adventure and see wh
          the best in the bussiness
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/0/614.png"
              />
            </div>
            <h2>Interantional Tours</h2>
            <p>
              Explore the world like never before with our interantional tours.
              Discover new cultures, meet enw peopl;e, and create memories that
              will last a lifetime
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3127/3127995.png"
              />
            </div>
            <h2>Travel Community</h2>
            <p>
              Join our travel community and connect with like-minded travelers
              from around the world. Share tips, stories, and advice on your
              next adventure.
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
              />
            </div>
            <h2>Interantional Tours</h2>
            <p>
              Explore the world like never before with our interantional tours.
              Discover new cultures, meet enw peopl;e, and create memories that
              will last a lifetime
            </p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className={styles.third_section}>
        <h1>Great locations across the World</h1>
        <p>
          Travel to the most breathtaking and exotic locations across the globe
          with us. From the majestic mountains of Patagonia to the pristine
          beaches of Bali, we'll take you there.
        </p>
        <div className={styles.map_wrapper}>
          <img src="https://www.looptelecom.com/uploads/files/About/map-worldwide.png" />
        </div>
      </div>

      {/* fourth section */}
      <div className={styles.third_section}>
        <h1>Find Popular Destinations</h1>
        <p>
          Escape the ordinary and explore the extraordinary - with our
          handpicked selection of destinations and travel deals, you'll be apple
          to create the trip of your dreams.
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.product_card}>
            <div>
              <img src="https://media.istockphoto.com/id/1138147310/photo/aerial-view-of-speed-boat-in-motion-in-blue-sea-in-italy.jpg?s=612x612&w=0&k=20&c=eYDlULXeI47BCgpMYPhlBvbqn4OBUo8zej3WVNAu7Ms=" />
            </div>
            <h2>Magical Maldives</h2>
            <p>7N / 8D</p>
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 3900 / person</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Magical Maldives",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Book Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://www.ripplesnigeria.com/wp-content/uploads/2021/06/Dubai.png" />
            </div>
            <h2>Dazzling dubai</h2>
            <p>7N / 8D</p>
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 3900 / person</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Dazzling dubai",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Book Now
              </button>
            </div>
          </div>
          <div
            className={styles.product_card}
            onClick={() => {
              dispatch(
                setSingleProduct({
                  id: 1,
                  state: "Ladakh",
                  place: "Leh",
                  type: "friends",
                  rating: 4.5,
                  stay: 1,
                  title: "Best Of Ladakh - Standard",
                  image:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494575827/Pangong_Lake.jpg",
                  image1:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
                  image2:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
                  image3:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
                  image4:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
                  image5:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
                  image6:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
                  image7:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
                  price: 4125,
                  overview:
                    "Short Escape tour of Ladakh this trip you will witness some of the most beautiful monasteries, while you are in the monastery you will get a birds eye of the spectacular Ladakh’s mountain range. The sky view of the Ladakh’s Valleys, Mountains and City is best viewed from high tops of the Monasteries and Palace, The drive to Khardung-la is a memorable one as you are going to the Highest Mountain Top in the world known as “K TOP” sightseeing of Leh Palace, Pathar Sahib Gompa, Charismatic Magnetic Hill, Hall of Fame museum, The World’s Highest motorable road KHARDUNGLA pass makes your holiday a memorable journey.",
                  about:
                    "Leh is an enchanting utopia that literally makes you feel on top of the world. A prominent city in the Ladakh region of Jammu and Kashmir, it is a place where the stars shine brighter and the majestic Himalayas loom over you. For the travelers who really want to experience peaceful bliss with a slice of adventure, Leh is the perfect destination. You can engage in adrenaline-pumping adventure sports of the place or discover your spiritual side in one of the district’s numerous monasteries, such as Thiksey Monastery and Shanti Stupa. Adventure lovers, bikers in particular, will love to explore the never-ending stretches of mountain paths around the city. Equally fascinating is the culture of Leh. Kind-hearted people with warm smiles on their faces, greet you wherever you go and make you feel at home. Roam around the narrow paths of the City Market, and get engulfed with the irresistibl",
                })
              );
            }}>
            <div>
              <img src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/road-trips-in-Rajasthan.jpg" />
            </div>
            <h2>Royal Rajasthan</h2>
            <p>7N / 8D</p>
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 3900 / person</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Royal Rajasthan",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src={mountains} />
        <div className={styles.fade}></div>
      </div>
      {/* fifth section */}
      <ContactUs />
    </BorderBox>
  );
}

export default HomePage;
