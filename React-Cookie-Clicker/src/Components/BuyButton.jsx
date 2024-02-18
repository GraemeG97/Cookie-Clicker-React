import { shopData } from "./ShopData";

export default function BuyButton({ item, count, setCount, cps, setCPS }) {
  function handleBuy() {
    if (item.cookieCost >= count) {
      setCount((count) => count - item.cookieCost);
      setCPS((cps) => cps + item.cookiesPerSecond);
    } else {
      alert("You best keep clicking brokie");
    }
  }

  return <button onClick={handleBuy}>Buy</button>;
}
