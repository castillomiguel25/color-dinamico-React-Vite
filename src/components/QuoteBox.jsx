import { useState } from "react";
import React from "react";
import pharses from "../pharses.json";
import "../App.css";



const colors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#00BCD4",
  "#4CAF50",
  "#8BC34A",
  "#FF9800",
  "#FF9800",
];

const QuoteBox = () => {
  

  const pharseRandom = Math.floor(Math.random() * pharses.length);
  const [index, setIndex] = useState(pharseRandom);
  const changePharse = () => {
    const pharseRandom = Math.floor(Math.random() * pharses.length);
    setIndex(pharseRandom);

    const colorRandom = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[colorRandom]}; color: ${colors[colorRandom]}`;

  };

  return (
    <div className="QuoteBox">
      <i className="fa-solid fa-quote-right "></i>
      <h3>{pharses[index].quote}</h3>
      <h4>{pharses[index].author}</h4>
      <button onClick={changePharse}>1</button>
    </div>
  );
};

export default QuoteBox;

