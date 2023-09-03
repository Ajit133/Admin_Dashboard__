import { useState } from "react";
import './Products.scss';
import { useNavigate } from "react-router-dom";

const UserProductsForm = () => {
    const navigate = useNavigate();
    const handleForm = (e)=>{
          console.log(image,title,color,price,producer,createat,instock);
          e.preventDefault()
          navigate("/")
          
    }
    const [image,setImage] = useState('');
    const [title,setTitle] = useState('');
    const [color,setColor] = useState('');
    const [price,setPrice] = useState('');
    const [producer,setproducer] = useState('');
    const [createat,setCreateat] = useState('');
    const [instock,setInstock] = useState('');

    return (
        <div className="productsForm">
            <form onSubmit={handleForm} >
                    {/* <h1>This name is {props.userData}</h1> */}
                     <label htmlFor="fname"  >Images</label>  
                     <input type="file" onChange={(e)=>setImage(e.target.value)} placeholder='Upload Photo' />
                     <label htmlFor="fname" >Title</label>  
                     <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='Actions' />
                     <label htmlFor="fname" >Color</label>  
                     <input type="text" onChange={(e)=>setColor(e.target.value)} placeholder='Enter Status' />
                     <label htmlFor="fname" >Price</label>  
                     <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder='First name' />
                     <label htmlFor="fname" >Producer</label>  
                     <input type="text"  onChange={(e)=>{setproducer(e.target.value)}} placeholder='Last Name' />
                     <label htmlFor="fname" >CreateAt</label>  
                     <input type="text" onChange={(e)=>{setCreateat(e.target.value)}}  placeholder='Age' />
                     <label htmlFor="fname" >InStock</label>  
                     <input type="text"  placeholder='Full Name' onChange={(e)=>{setInstock(e.target.value)}} />
                     <input type='submit' className='submit' /> 
             </form>
        </div>
    );
};

export default UserProductsForm;
// img,title,color,price,producer,CreateAt,instock            
