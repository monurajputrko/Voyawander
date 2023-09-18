import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import Style from "../Login/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../Redux/auth/action";
import logo from "../../Images/logo_website.png";

export const Login = () => {
  const [values, setvalues] = useState({
    email: "",
    pass: "",
  });
  const [google, setGoogle] = useState("");
  const [isError, setIserror] = useState("");
  const [submitbutton, setSubmitButton] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth);
  console.log(isAuth);
  if (isAuth.isAuth) {
    navigate("/");
  }

  const handlesubmit = () => {
    if (!values.email || !values.pass) {
      setIserror("Please Fill All Fields");
      return;
    }

    setIserror("");
    setSubmitButton(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButton(false);
        console.log(res);
        navigate("/");
      })
      .catch((error) => setIserror(error.message), setSubmitButton(false));
    console.log(values);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setGoogle(data.user.email);
        localStorage.setItem("email", data.user.email);
        dispatch(setUserLogin(data.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setGoogle(localStorage.getItem("email"));
  }, []);

  return (
    <div className={Style.container}>
      <div className={Style.inner}>
        <div>
          <img src={logo} className={Style.logo} />
          <h1 className={Style.welcome}>Welcome Back</h1>
        </div>
        <div>
          <input
            className={Style.input}
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) =>
              setvalues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <br />
        <div>
          <input
            className={Style.input}
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) =>
              setvalues((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
        </div>
        <div>
          <p className={Style.dont}>{isError}</p>
        </div>
        <button
          className={Style.btn}
          onClick={handlesubmit}
          disabled={submitbutton}>
          Login
        </button>
        <p>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ or ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</p>
        <div className={Style.appLogo}>
          <img
            className={Style.images}
            onClick={handleGoogle}
            src="https://slackmojis.com/emojis/195-google/download"
          />
          <img
            className={Style.images}
            src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png"
          />
          <img
            className={Style.images}
            src="https://twemoji.twitter.com/content/dam/twemoji-twitter/Twitter_Social_Icon_Circle_Color.png.twimg.1920.png"
          />
        </div>
        <p className={Style.dont}>Don't have an account?</p>
        <button className={Style.btn} onClick={handleSignup}>
          Sign up
        </button>
        <p className={Style.dont}>Create an account to join us!</p>
      </div>
    </div>
  );
};
