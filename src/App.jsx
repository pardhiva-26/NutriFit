import React, { useState, useEffect } from "react";
import BMIForm from "./components/BMIForm";
import DietPlan from "./components/DietPlan";
import Diets from "./components/Diets";
import { Container, Navbar, Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [bmiRecords, setBmiRecords] = useState(() => {
    const savedRecords = localStorage.getItem("bmiRecords");
    return savedRecords ? JSON.parse(savedRecords) : [];
  });

  useEffect(() => {
    localStorage.setItem("bmiRecords", JSON.stringify(bmiRecords));
  }, [bmiRecords]);

  const handleBMICalculate = (bmi, height, weight) => {
    const newRecord = { id: Date.now(), bmi, height, weight };
    setBmiRecords([newRecord, ...bmiRecords]);
  };

  const handleDelete = (id) => {
    const updatedRecords = bmiRecords.filter((record) => record.id !== id);
    setBmiRecords(updatedRecords);
  };

  const handleDeleteAll = () => {
    setBmiRecords([]);
    localStorage.removeItem("bmiRecords");
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Diet Plan Based on BMI</Navbar.Brand>
          <Button variant="danger" onClick={handleDeleteAll}>
            Delete All
          </Button>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <div className="preset">
        <BMIForm onBMICalculate={handleBMICalculate} />
        <Diets />
        </div>
        {bmiRecords.map((record) => (
          <DietPlan key={record.id} record={record} onDelete={handleDelete} />
        ))}
       
      </Container>
    </div>
  );
};

export default App;
