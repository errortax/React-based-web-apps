import React,{useState} from "react";

function ArrayState(){
const [food, setFood] = useState(["Pizza", "Burger", "Pasta","Noodles", "Ice-cream"])

function handleFoodName(){
    const newFood = document.getElementById("foodName").value;
    document.getElementById("foodName").value = "";
    setFood(f=> [...f, newFood]);
}
function handleRemoveFood(index){
    setFood(food.filter((_,i)=> i !==index));
}
return(<div>
    <h1>List of Food</h1>
    <ul>
        {food.map((food, index)=>
        <li 
        key={index} onClick={()=> handleRemoveFood(index)}>
            {food}
            </li>)}
    </ul>
    <input type="text" placeholder="enter a food name"  id="foodName"></input>
    <br></br>
    <button onClick={handleFoodName}>Add Food</button>
</div>);
}

export default ArrayState;