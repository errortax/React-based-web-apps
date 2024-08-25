import React,{useState, createContext} from "react";
import CompB from "./CompB";

export const UserContext = createContext();

function CompA(){


    
    const [user, setUser] = useState("John Doe");
    
return(
    <div className="box">
    <h1>CompA</h1>
    <p>Hello {user}</p>
    {/* component A is now the provider of the component */}
    <UserContext.Provider value={user}>
    <CompB user={user}/>
        </UserContext.Provider>


 </div>
);
}

export default CompA;