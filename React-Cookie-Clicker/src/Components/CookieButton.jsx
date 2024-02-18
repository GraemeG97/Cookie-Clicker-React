import "./CookieButton.css";

export default function CookieButton({ count, setCount }) {
  function updateClickCookies() {
    setCount((count) => count + 1);
    console.log("cookie clicked");
  }

  function resetCookieCount() {
    setCount(0);
  }

  return (
    <div className="cookies-container">
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
