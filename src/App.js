import './App.css';

import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid positive numbers for height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBMI);

    if (calculatedBMI < 18.5) {
      setStatus("Underweight");
      setColor("blue");
    } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
      setStatus("Normal weight");
      setColor("green");
    } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
      setStatus("Overweight");
      setColor("orange");
    } else {
      setStatus("Obese");
      setColor("red");
    }
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2>BMI (Body Mass Index) Calculator</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ padding: "8px", width: "250px", margin: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ padding: "8px", width: "250px", margin: "5px" }}
        />
      </div>

      <button
        onClick={calculateBMI}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Calculate BMI
      </button>

      {bmi && (
        <div style={{ marginTop: "30px" }}>
          <h3>Your BMI: {bmi}</h3>
          <h3 style={{ color }}>{status}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
