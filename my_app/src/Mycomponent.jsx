//onChange event handler

import React ,{useState} from "react";

function Mycomponent(){
 const [name, setName] = useState("Guest");
 const [quantity, setQuantity] = useState(0);
 const [comment, setComment] = useState();
 const [payment, setPayment] = useState("");
 const [delivery, setDelivery] = useState("");
 
 function handleName(event){
    setName(event.target.value);
 }

 function handleQuantity(event){
    setQuantity(event.target.value);
 }

 function handleComment(event){
    setComment(event.target.value);
 }
 function handlePayment(event){
    setPayment(event.target.value);
 }
 function handleDelivery(event){
    setDelivery(event.target.value);
 }

 return(<div>
    <input value={name} onChange={handleName} type="text"></input>
    <p>Name: {name}</p>
    <input value={quantity} onChange={handleQuantity} type="number"></input>
    <p>Quantity: {quantity}</p>
    <textarea value={comment} onChange={handleComment} placeholder="enter a comment"/>
    <p>Comment: {comment}</p>
    <select value={payment} onChange={handlePayment}>
        <option value="">select an option</option>
        <option value="credit">Credit Card</option>
        <option value="debit">Debit Card</option>
        <option value="netbanking">Net Banking</option>
        <option value="upi">UPI</option>

    </select>
    <p>Payment: {payment}</p>
<p>Pick up delivery</p>


<lable>
<input type="radio"value="home-delivery" checked={delivery==="home-delivery"} onChange={handleDelivery}></input>
Home delivery
</lable>
<input type="radio"value="Store delivery" checked={delivery === "Store delivery"} onChange={handleDelivery}></input>
<lable>Store delivery</lable>

<p> delivery type: {delivery}</p>

 </div>);


}

export default Mycomponent;