import React,{useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("#FFF");

    function handleColor(event){
        setColor(event.target.value);
    }

    return(<div className = "colorPickerdiv">
        <h1>Color Picker</h1>
        <div className="color-display" 
        style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>  Select the color
        </label>
        <input type="color" value={color} onChange={handleColor}></input>
       
    </div>);
   


}

export default ColorPicker;