import React, { useState } from 'react';
import { Form, Button, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';


const BMIForm = ({ onBMICalculate }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height <= 0 || height > 300 || weight <= 0 || weight > 700) {
      setError('Please enter plausible values for height and weight.');
      return;
    }

    setError('');
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    onBMICalculate(bmi, height, weight);
  };

  return (
    <Form onSubmit={calculateBMI} className="bmi-form">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>
          Height (cm)
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Enter your height in centimeters (e.g., 170)</Tooltip>}
          >
            <i className="fas fa-info-circle ml-2"></i>
          </OverlayTrigger>
        </Form.Label>
        <Form.Control
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          min="0"
          max="300"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Weight (kg)
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Enter your weight in kilograms (e.g., 70)</Tooltip>}
          >
            <i className="fas fa-info-circle ml-2"></i>
          </OverlayTrigger>
        </Form.Label>
        <Form.Control
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          min="0"
          max="700"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Calculate BMI
      </Button>
    </Form>
  );
};

export default BMIForm;

