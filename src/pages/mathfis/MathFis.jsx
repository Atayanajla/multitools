import { useState, useRef } from "react";
import BasicCalculator from "./basic/Basic";
import BmiCalculator from "./bmi/Bmi";
import Suhu from "./suhu/Suhu";

const MathFis = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div>
        <div className="flex justify-center gap-2">
          <button onClick={scrollLeft}>◀</button>

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto whitespace-nowrap scroll-smooth"
          >
            <button
              onClick={() => setActiveTab("basic")}
              className={activeTab === "basic" ? "border-b-2 border-blue-500" : "text-gray-400"}
            >
              Basic
            </button>
            <button
              onClick={() => setActiveTab("bmi")}
              className={activeTab === "bmi" ? "border-b-2 border-blue-500" : "text-gray-400"}
            >
              BMI
            </button>
            <button
              onClick={() => setActiveTab("suhu")}
              className={activeTab === "suhu" ? "border-b-2 border-blue-500" : "text-gray-400"}
            >
              Suhu
            </button>
          </div>

          <button onClick={scrollRight}>▶</button>
        </div>

        <div>
          {activeTab === "basic" && <BasicCalculator />}
          {activeTab === "bmi" && <BmiCalculator />}
          {activeTab === "suhu" && <Suhu />}
        </div>
      </div>
    </div>
  );
};

export default MathFis;
