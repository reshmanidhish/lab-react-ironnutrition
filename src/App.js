import foodsJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row,Col } from 'antd';
import AddFoodForm from './components/AddFoodForm';
function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const handleAddFood = (newFood) => {
    // Use the spread operator to create a new array with the new food added to the existing foods
    setFoods([...foods, newFood]);
  };
  const handleDeleteFood = (foodToDelete) => {
    // Filter out the food item to delete from the foods array and update the state
    const updatedFoods = foods.filter((food) => food !== foodToDelete);
    setFoods(updatedFoods);
  };
  const handleSearch = (searchText) => {
    // Filter the foods based on the search text and update the filteredFoods state
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredFoods(filtered);
  };
  return (
    <div className="App">
     <Row gutter={[16, 16]}>
     {foods.map((food, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <FoodBox food={food}  onDeleteFood={handleDeleteFood} />
          </Col>
        ))}
      </Row>
      <AddFoodForm onAddFood={handleAddFood} />
    </div>
  );
}

export default App;
