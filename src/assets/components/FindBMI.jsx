import React, { useRef, useState } from "react";
const FindBMI = () => {
  const heightRef = useRef("");
  const weightRef = useRef("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const height = Number(heightRef.current.value);
    const weight = Number(weightRef.current.value);
    if (height > 0 && weight > 0) {
      const bmi = weight / height ** 2;
      setOutput(bmi.toFixed(2));
      heightRef.current.value = "";
      weightRef.current.value = "";
    } else {
      setOutput("");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 sm:w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          BMI Finder
        </h1>
        <div className="mb-4">
          <input
            ref={heightRef}
            type="number"
            placeholder="Enter your height (meters)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>
        <div className="mb-4">
          <input
            ref={weightRef}
            type="number"
            placeholder="Enter your weight (kg)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold py-2 rounded-lg hover:scale-105 transform transition duration-300"
        >
          Calculate
        </button>

        {output && (
          <p className="mt-4 text-lg font-medium text-center text-gray-700 opacity-100 transition-opacity duration-500">
            Your BMI is: {output}
          </p>
        )}
      </div>
    </div>
  );
};

export default FindBMI;
