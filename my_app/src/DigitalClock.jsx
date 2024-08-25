import React,{useEffect, useState} from "react";

function DigitalClock(){
   const [time, setTime] = useState(new Date());
   useEffect(()=>{
    const intervalid = setInterval(()=>{
        setTime(new Date());
    },1000);
    return () =>{
        clearInterval(intervalid);
    }
   },[]);

   function formateTime(){
       let hours = time.getHours();
       let minutes = time.getMinutes();
       let seconds = time.getSeconds();
       let ampm = hours >= 12 ? 'PM' : 'AM';
       hours = hours % 12;
       hours = hours ? hours : 12;
       hours = hours < 10 ? hours : hours;
       minutes = minutes < 10 ? minutes : minutes;
       seconds = seconds < 10 ? seconds : seconds;
       return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
   }

  function padZero(num){
        return num < 10 ? '0'+num : num;
  }

return(
    <div className="clock-container">
            <div className="clock">
                   <span>{formateTime()}</span>
            </div>
    </div>
);
}

export default DigitalClock;