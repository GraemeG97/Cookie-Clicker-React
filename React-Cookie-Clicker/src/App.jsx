import { useState } from "react";
import "./App.css";
import CookieButton from "./Components/CookieButton";
import Timer from "./Components/Timer";
import UpgradeShop from "./UpgradeShop";

export default function App() {
  const [count, setCount] = useState(0);
  const [cps, setCPS] = useState(1);
  return (
    <main className="main-game">
      <div className="cookieContainer">
        <Timer count={count} setCount={setCount} cps={cps} />
        <CookieButton count={count} setCount={setCount} />
        <div className="upgrades">
          <h3>Welcome to the Upgrade Shop</h3>
          <UpgradeShop
            count={count}
            setCount={setCount}
            cps={cps}
            setCPS={setCPS}
          />
        </div>
      </div>
    </main>
  );
}
