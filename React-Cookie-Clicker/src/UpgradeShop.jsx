import { shopData } from "./Components/ShopData";
import BuyButton from "./Components/BuyButton";
import "./UpgradeShop.css";

export default function UpgradeShop({ count, setCount, cps, setCPS }) {
  return (
    <>
      {shopData.map((item) => {
        return (
          <div className="shopItems">
            <p>{item.Level}</p>
            <p>Cost: {item.cookieCost}</p>
            <p>CPS: {item.cookiesPerSecond}</p>
            <BuyButton
              count={count}
              item={item}
              setCount={setCount}
              cps={cps}
              setCPS={setCPS}
            />
          </div>
        );
      })}
    </>
  );
}
