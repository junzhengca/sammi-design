"use client";

import { useEffect, useMemo, useState } from "react";
import { Counter } from "@logiccore/counter";

const counter = new Counter("65ef4ad2-bd50-4f8e-a638-7ea086e8b9e9");

export const VisitorCounter = () => {
  const [count, setCount] = useState("000,000");

  const digits = useMemo(() => {
    return count.toString().split("");
  }, [count]);

  useEffect(() => {
    counter
      .increment()
      .then(() => {
        return counter.get();
      })
      .then((count) => {
        setCount(
          count.count
            .toString()
            .padStart(6, "0")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      });
  }, []);

  return (
    <div className="flex justify-center items-center gap-2">
      {digits.map((digit, index) => {
        if (digit === ",") {
          return (
            <span key={index} className="text-lg">
              {digit}
            </span>
          );
        }
        return (
          <div className="digit" key={index}>
            <div className={`digit-tape-container digit-${digit}`}>
              <div className="digit-tape-digit">1</div>
              <div className="digit-tape-digit">2</div>
              <div className="digit-tape-digit">3</div>
              <div className="digit-tape-digit">4</div>
              <div className="digit-tape-digit">5</div>
              <div className="digit-tape-digit">6</div>
              <div className="digit-tape-digit">7</div>
              <div className="digit-tape-digit">8</div>
              <div className="digit-tape-digit">9</div>
              <div className="digit-tape-digit">0</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
