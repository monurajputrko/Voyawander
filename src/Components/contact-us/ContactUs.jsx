import React from "react";
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={`${styles.third_section} ${styles.fifth_section}`}>
      <h1>Get in touch</h1>
      <p>
        Don't wait, reach out to us now and let us help your plan your next
        vacation. Our dedicated team is always here to answer your question and
        make your travelk dreams a reality.
      </p>
      <div className={styles.contact_form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div>
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Mobile" />
          </div>
          <input type="text" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
