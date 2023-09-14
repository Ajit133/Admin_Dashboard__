// import { useState } from "react";
import screenfull from "screenfull";

const FullScreen = () => {
    const handleClick = ()=>{
       if(screenfull.isEnabled){
         if(screenfull.isFullscreen){
            screenfull.exit();
         } else{
            screenfull.request();
            
         }
       }
    }
    return (
        <div>
            <button onClick={handleClick}><img src="/expand.svg" alt="" className="icon" /></button>
        </div>
    );
};

export default FullScreen;