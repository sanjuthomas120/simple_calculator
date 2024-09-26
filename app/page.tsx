"use client";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
    "←",
    "(",
    ")",
    "%",
  ];
  const handleButtonClick = (item: string) => {
    setInput((prev) => prev + item);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const handleBackSpace = () => {
    setInput((prev) => prev.slice(0, -1));
  };
  return (
    <div className=" container h-100vh d-flex justify-content-center align-items-center mt-6">
      <div>
        Simple Calculator
        <div className="border rounded p-[20px] shadow-md">
          <input
            type="text"
            className="w-full h-[56px] text-[24px] text-right mb-[10px] p-[5px] border-gray-900 text-black rounded"
            value={input}
            readOnly
          />
          <div className="grid grid-cols-4 gap-2.5">
            {buttons.map((item, index) => {
              if (item === "C") {
                return (
                  <button
                    key={index}
                    className="p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]"
                    onClick={handleClear}
                  >
                    {item}
                  </button>
                );
              } else if (item === "=") {
                return (
                  <button
                    key={index}
                    className="p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]"
                    onClick={handleCalculate}
                  >
                    {item}
                  </button>
                );
              } else if (item === "←") {
                return (
                  <button
                    key={index}
                    className="p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]"
                    onClick={handleBackSpace}
                  >
                    {item}
                  </button>
                );
              } else {
                return (
                  <button
                    key={index}
                    className="p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]"
                    onClick={() => handleButtonClick(item)}
                  >
                    {item}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
