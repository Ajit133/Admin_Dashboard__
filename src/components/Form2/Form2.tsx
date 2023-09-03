import { useState } from 'react';
import './Form2.scss';
import { useNavigate } from 'react-router-dom';



const Form2 = () => {
    const [images,setImage] = useState("");
    const [actions,setActions] = useState("");
    const [status,setStatus] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [age,setAge] = useState("");
    const [fullname,setFullname] = useState("");
    

    const navigate = useNavigate();
    const handleForm = (e: { preventDefault: () => void; })=>{
        console.log(images,actions,status,firstname,lastname,age,fullname); 
        e.preventDefault()
        navigate('/');
    }

    return (
        <div className='form2'>
             <form onSubmit={handleForm} >
                    {/* <h1>This name is {props.userData}</h1> */}
                     <label htmlFor="fname"  >Images</label>  
                     <input type="file" onChange={(e)=>setImage(e.target.value)} placeholder='Upload Photo' />
                     <label htmlFor="fname" >Actions</label>  
                     <input type="text" onChange={(e)=>setActions(e.target.value)} placeholder='Actions' />
                     <label htmlFor="fname" >Status</label>  
                     <input type="text" onChange={(e)=>setStatus(e.target.value)} placeholder='Enter Status' />
                     <label htmlFor="fname" >First Name</label>  
                     <input type="text" onChange={(e)=>setFirstname(e.target.value)} placeholder='First name' />
                     <label htmlFor="fname" >Last Name</label>  
                     <input type="text"  onChange={(e)=>{setLastname(e.target.value)}} placeholder='Last Name' />
                     <label htmlFor="fname" >Age</label>  
                     <input type="text" onChange={(e)=>{setAge(e.target.value)}}  placeholder='Age' />
                     <label htmlFor="fname" >Full Name</label>  
                     <input type="text"  placeholder='Full Name' onChange={(e)=>{setFullname(e.target.value)}} />
                     <input type='submit' className='submit' />             
             </form>
        </div>
    );
};

export default Form2;
// Images,Actions,Status,First Name,Last Name,Age,Full Name
