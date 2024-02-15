import { useState, useEffect } from "react";
import React from "react";
import "./CookieButton.css";

export default function CookieButton() {
  const [cookies, setCookies] = useState(0);

  function updateClickCookies() {
    setCookies(cookies + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preCount) => preCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function resetCookieCount() {
    setCookies(0);
  }

  return (
    <div className="cookies-container">
      <p>Cookies: {cookies}</p>
      <button className="cookie-button">
        {" "}
        <img src="./cookie.png" onClick={updateClickCookies} />
      </button>
      <button className="resetbtn" onClick={resetCookieCount}>
        Reset Cookies
      </button>
    </div>
  );
}
