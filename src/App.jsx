import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./pharses.json";
import QuoteBox from "./components/QuoteBox";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Card />
    </div>
  );
}

export default App;
