

import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';

const AddFoodForm = ({ onAddFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleAddFood = () => {
    // Basic validation before adding the food
    if (!name || !image || !calories || !servings) {
      alert('Please fill in all fields.');
      return;
    }

    // Creating a new food object
    const newFood = {
      name,
      image,
      calories: parseInt(calories, 10),
      servings: parseInt(servings, 10),
    };

    // Pass the new food object to the parent component (App) to update the food list
    onAddFood(newFood);

    // Clear the form fields after adding the food
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <Form>
      <Form.Item label="Name">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Image">
        <Input value={image} onChange={(e) => setImage(e.target.value)} />
      </Form.Item>
      <Form.Item label="Calories">
        <Input value={calories} onChange={(e) => setCalories(e.target.value)} type="number" />
      </Form.Item>
      <Form.Item label="Servings">
        <Input value={servings} onChange={(e) => setServings(e.target.value)} type="number" />
      </Form.Item>
      <Button type="primary" onClick={handleAddFood}>
        Add Food
      </Button>
    </Form>
  );
};

export default AddFoodForm;
