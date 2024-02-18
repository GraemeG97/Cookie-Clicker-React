import { useEffect } from "react";
import "./Timer.css";

export default function Timer({ count, setCount, cps }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preCount) => preCount + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h3>Cookie's: {count}</h3>
    </div>
  );
}
