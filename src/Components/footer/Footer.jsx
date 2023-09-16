import React from "react";
import styles from "./Footer.module.css";
import BorderBox from "../common-styles/BorderBox";

function Footer() {
  return (
    <BorderBox>
      <div className={styles.footer}>
        <div>
          <h2>Voyawander</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            reiciendis eius rem, consequuntur natus dolor eum eligendi similique
            sunt ipsum fugiat saepe quae necessitatibus quam aliquam dicta porro
            nulla. Quam.
          </p>
        </div>
        <div>
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: "rgb(28,173,254)" }}
          />
          <i
            className="fa-brands fa-linkedin fa-xl"
            style={{ color: "rgb(28,173,254)" }}
          />
          <i
            className="fa-brands fa-facebook fa-xl"
            style={{ color: "rgb(28,173,254)" }}
          />
        </div>
      </div>
    </BorderBox>
  );
}

export default Footer;
