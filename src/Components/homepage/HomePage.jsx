import React from "react";
import styles from "./HomePage.module.css";
import roundImage from "./images/roundtwoimage.png";
import mountains from "./images/mountains.png";
import Filter from "./filter/Filter";

function HomePage() {
  return (
    <>
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
                <h4>₹ 8000 / person</h4>
              </div>
              <button>Book Now</button>
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
                <h4>₹ 8000 / person</h4>
              </div>
              <button>Book Now</button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/road-trips-in-Rajasthan.jpg" />
            </div>
            <h2>Royal Rajasthan</h2>
            <p>7N / 8D</p>
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 8000 / person</h4>
              </div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src={mountains} />
        <div className={styles.fade}></div>
      </div>
      {/* fifth section */}
      <div className={`${styles.third_section} ${styles.fifth_section}`}>
        <h1>Get in touch</h1>
        <p>
          Don't wait, reach out to us now and let us help your plan your next
          vacation. Our dedicated team is always here to answer your question
          and make your travelk dreams a reality.
        </p>
        <div className={styles.contact_form}>
          <form onSubmit={() => {}}>
            <div>
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Mobile" />
            </div>
            <input type="text" placeholder="Message" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default HomePage;
