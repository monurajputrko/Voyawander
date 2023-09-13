import React from "react";
import styles from "./HomePage.module.css";
import roundImage from "./images/roundtwoimage.png";
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
    </>
  );
}

export default HomePage;
