import React,{useState} from "react";

function CarList(){
 const [car, setCar] = useState([])
 const [carName, setCatName] = useState();
 const [carModel, setCarModel] = useState();
 const [carYear, setCarYear] = useState(new Date().getFullYear());

 
 function handleCarAdd(){
  const newCar = {name:carName,
                  model: carModel,
                  year: carYear};
    
  setCar([...car, newCar]);
  setCarYear(new Date().getFullYear());
  setCarModel("");
  setCatName("");

  }
 

 function handleCarRemove(index){
  setCar(car.filter((_, i)=> i !== index));
 }

function handleCarNameChange(event){
  setCatName(event.target.value);
}
function handleCarModelChange(event){
  setCarModel(event.target.value);
}

function handleCarYearChange(event){
  setCatName(event.target.value);
}







  return (<div>
    <h1>List of Cars</h1>
    <ul>
      {car.map((car, index) => (
        <li key={index} onClick={()=> handleCarRemove(index)}>
          {car.name} - {car.model} - {car.year}
         
        </li>
      ))}
    </ul>
    <label>Car name: </label>
    <input type="text" value={carName} onChange={handleCarNameChange}></input>
    <br></br>
    <label>Car Model: </label>
    <input type="text" value={carModel} onChange={handleCarModelChange}></input>
    <br></br>
    <label>Car year: </label>
    <input type="number" value={carYear} onChange={handleCarYearChange}></input>
    <br></br>
    <button onClick={handleCarAdd}>Add Car </button> 

  </div>);


}


export default CarList;