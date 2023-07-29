import { Card, Button, Space } from 'antd';

// function FoodBox({food}){

    const FoodBox = ({ food, onDeleteFood }) => {
        const { name, calories, image, servings } = food;
      
        const handleDelete = () => {
          // Pass the food item to the parent component (App) to handle the deletion
          onDeleteFood(food);
        };

    return(

      
        <Space direction="vertical" size={16} wrap>
        <Card title={food.name} style={{ width: 300 }}>
          
        
            <img src={food.image} alt="" width={60} />
            <p>calories: {food.calories}</p>
            <p> Servings:{food.servings}</p>
           <p>Total Calories:{food.calories*food.servings}kcal</p>
           <Button type="primary" onClick={handleDelete}>Delete
           </Button>
          </Card>
          </Space>  
       

    )
}

export default FoodBox