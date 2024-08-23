import React, {useState} from "react";

function UpdateState(){
 const [car, setCar] = useState({name:"Audi", model:"Q7",color: "black", year: 2021});

 function handleName(event){
     setCar(c => ({...car, name: event.target.value}));
 }

 function handleModel(event){
    setCar(c=>({...car, model: event.target.value}));
}
function handleColor(event){
    setCar(c=>({...car, color: event.target.value}));
}
function handleYear(event){
    setCar(c=>({...car, year: event.target.value}));
}

 return(<div>
    <p>Name of your car: {car.name} model {car.model} {car.color} {car.year} </p>
   <input type="text" onChange={handleName} value={car.name}/>
   <input type="text" onChange={handleModel} value={car.model}/>
   <input type="text" onChange={handleColor} value={car.color}/>
   <input type="number" onChange={handleYear} value={car.year}/>
   
 </div>);
}

export default UpdateState;