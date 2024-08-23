//onChange event handler

import React ,{useState} from "react";

function Mycomponent(){
 const [name, setName] = useState("");
 
 function handleName(event){
    setName(event.target.value);
 }

 return(<div>
    <input value={name} onChange={handleName}></input>
    <p>Name: {name}</p>
 </div>);


}

export default Mycomponent;