import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const appendValue = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    { label: "C", onClick: clear, className: "btn-accent" },
    { label: "/", onClick: () => appendValue("/") },
    { label: "*", onClick: () => appendValue("*") },
    { label: "-", onClick: () => appendValue("-") },
    { label: "7", onClick: () => appendValue("7") },
    { label: "8", onClick: () => appendValue("8") },
    { label: "9", onClick: () => appendValue("9") },
    { label: "+", onClick: () => appendValue("+") },
    { label: "4", onClick: () => appendValue("4") },
    { label: "5", onClick: () => appendValue("5") },
    { label: "6", onClick: () => appendValue("6") },
    { label: "=", onClick: calculate, className: "btn-equal" },
    { label: "1", onClick: () => appendValue("1") },
    { label: "2", onClick: () => appendValue("2") },
    { label: "3", onClick: () => appendValue("3") },
    { label: "0", onClick: () => appendValue("0"), className: "btn-zero" },
    { label: ".", onClick: () => appendValue(".") },
  ];

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="keypad">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={btn.onClick}
              className={`btn ${btn.className || ""}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
