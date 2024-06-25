import React from 'react';
import { Card } from 'react-bootstrap';

const Diets = () => {
  const dailyItems = [
    'Fresh Fruits',
    'Vegetables',
    'Whole Grains',
    'Lean Proteins (e.g., chicken, fish, tofu)',
    'Nuts and Seeds',
    'Dairy or Dairy Alternatives',
    'Plenty of Water'
  ];

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Daily Recommended Items</Card.Title>
        <Card.Text>
          Here are 7 items you should consider including in your diet every day:
        </Card.Text>
        <ul>
          {dailyItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Diets;
