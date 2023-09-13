import screenfull from "screenfull";

const FullScreen = () => {
    const handleClick = ()=>{
       if(screenfull.isEnabled){
         screenfull.request(); 
       }
    }
    return (
        <div>
            <button onClick={handleClick}><img src="/expand.svg" alt="" className="icon" /></button>
        </div>
    );
};

export default FullScreen;