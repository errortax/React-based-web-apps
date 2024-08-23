//onChange event handler

import React ,{useState} from "react";

function Mycomponent(){
 const [name, setName] = useState("Guest");
 const [quantity, setQuantity] = useState(0);
 
 function handleName(event){
    setName(event.target.value);
 }

 function handleQuantity(event){
    setQuantity(event.target.value);
 }




 return(<div>
    <input value={name} onChange={handleName} type="text"></input>
    <p>Name: {name}</p>
    <input value={quantity} onChange={handleQuantity} type="number"></input>
    <p>Quantity: {quantity}</p>

 </div>);


}

export default Mycomponent;