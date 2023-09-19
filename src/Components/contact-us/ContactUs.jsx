import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import axios from "axios";

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformdata] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setformdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={`${styles.third_section} ${styles.fifth_section}`}>
      {isLoading && (
        <div
          className={styles.loadingscreen}
          style={{
            backgroundColor: "rgb(0,0,0, 0)",
          }}>
          <img
            src={
              "https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
            }
          />
        </div>
      )}
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
            setIsLoading(true);
            axios
              .post(
                `https://https://voyawander-json-szvk.onrender.com/contact`,
                formData
              )
              .then((res) => {
                alert("Message added!");
                setIsLoading(false);
              })
              .catch((er) => {
                alert("Some error occured!");
                setIsLoading(false);
              });
          }}>
          <div>
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={handleOnChange}
              name="phone"
              type="phone"
              placeholder="Mobile"
            />
          </div>
          <input
            onChange={handleOnChange}
            name="message"
            type="text"
            placeholder="Message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
