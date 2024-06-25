import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

const DietPlan = ({ record, onDelete }) => {
  const { id, bmi, height, weight } = record;

  const getDietPlan = () => {
    if (bmi < 18.5) {
      return (
        <div>
          <p>Your BMI indicates that you are underweight. You should include more calories in your diet. Here are some suggestions:</p>
          <ul>
            <li>Include more nuts and seeds</li>
            <li>Eat dried fruits and dairy products</li>
            <li>Include more protein-rich foods like eggs, meat, and legumes</li>
            <li>Drink smoothies and shakes</li>
            <li>Eat more frequently</li>
            <li>Add healthy fats like avocados and olive oil to your meals</li>
            <li>Stay hydrated</li>
          </ul>
        </div>
      );
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return (
        <div>
          <p>Your BMI is in the normal range. Maintain a balanced diet with a variety of foods:</p>
          <ul>
            <li>Fruits and vegetables</li>
            <li>Whole grains</li>
            <li>Lean proteins like chicken, fish, and tofu</li>
            <li>Nuts and seeds</li>
            <li>Dairy or dairy alternatives</li>
            <li>Healthy fats like avocados and olive oil</li>
            <li>Stay hydrated</li>
          </ul>
        </div>
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      return (
        <div>
          <p>Your BMI indicates that you are overweight. Focus on a diet with fewer calories:</p>
          <ul>
            <li>Eat more fruits and vegetables</li>
            <li>Choose whole grains over refined grains</li>
            <li>Lean proteins like chicken, fish, and legumes</li>
            <li>Avoid high-calorie foods and sugary drinks</li>
            <li>Include healthy fats in moderation</li>
            <li>Stay hydrated</li>
            <li>Control portion sizes</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <p>Your BMI indicates that you are obese. It's important to consult with a healthcare provider for a personalized diet plan. Here are some general suggestions:</p>
          <ul>
            <li>Focus on eating more fruits and vegetables</li>
            <li>Choose whole grains over refined grains</li>
            <li>Include lean proteins in your diet</li>
            <li>Avoid high-calorie foods and sugary drinks</li>
            <li>Eat smaller portions</li>
            <li>Include healthy fats in moderation</li>
            <li>Stay hydrated</li>
          </ul>
        </div>
      );
    }
  };

  const getWarning = () => {
    if (weight < 0.5) {
      return (
        <Alert variant="warning">
          The weight seems extremely low. Please ensure you have entered the correct weight.
        </Alert>
      );
    } else if (height > 250) {
      return (
        <Alert variant="warning">
          The height seems extremely high. Please ensure you have entered the correct height.
        </Alert>
      );
    } else if (bmi >= 40) {
      return (
        <Alert variant="danger">
          Your BMI indicates severe obesity. It's strongly recommended to consult with a healthcare provider.
        </Alert>
      );
    }
    else if (bmi <=5) {
      return (
        <Alert variant="danger">
          Your BMI indicates severe thinness or an underlying medical condition. It's strongly recommended to consult with a healthcare provider.
        </Alert>
      );
    }
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Button variant="danger" className="float-end" onClick={() => onDelete(id)}>Delete</Button>
        <Card.Title>Your BMI: {bmi}</Card.Title>
        <Card.Text>{getDietPlan()}</Card.Text>
        {getWarning()}
      </Card.Body>
    </Card>
  );
};

export default DietPlan;
