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
          <p className="font-semibold">Explore the beauty of Journey</p>
          <p className="font-semibold">
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
      </div>
    </>
  );
}

export default HomePage;
