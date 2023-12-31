import { useState } from "react";
import './Products.scss';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserProductsForm = () => {
    const navigate = useNavigate();
    const handleForm = (e: { preventDefault: () => void; })=>{
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
      <div className="userproductform">
        <div className="flex justify-between m-auto bg-white text-black p-5 rounded-md " style={{"width":"850px"}}>
      <h1 className="text-3xl font-bold text-sky-600">Create Client</h1>
      <div className="flex text-black  justify-end gap-1">
            <div>
              <Link to="/">
                <span className="text-sky-600">Apps</span>
              </Link>
            </div>
            <span>/</span>
            <div>
              <Link to="/users">
                <span className="text-sky-600">Product</span>
              </Link>
            </div>
          </div>
      </div>
        <form
        onSubmit={handleForm}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
          <div className="flex justify-between">
          <div className="flex items-center">
          <Link to="/products"><img className="w-7 h-7 object-cover " src="arrow-left-5-svgrepo-com.svg" alt="" /></Link> 
          <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
         Create Product
        </h1>
          </div>
          </div>
        

        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Image <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Name"
              onChange={(e)=>setImage(e.target.value)}
              className="mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              Title <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e)=>setTitle(e.target.value)}
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Color <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Type Email"
              onChange={(e)=>setColor(e.target.value)}
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              Price
            </label>{" "}
            <br />
            <input
              type="number"
              placeholder="Contact Number"
              onChange={(e)=>setPrice(e.target.value)}
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">
          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Producer
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Country"
              onChange={(e)=>setproducer(e.target.value)}
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow mr-15">
            <label className="mx-auto text-black" htmlFor="">
              Create At
            </label>{" "}
            <br />
            <input
              type="time"
              onChange={(e)=>setCreateat(e.target.value)}
              placeholder="Country/Region"
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">
          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              In Stock
            </label>{" "}
            <br />
            <input
              type="Number"
              placeholder="City"
              onChange={(e)=>setInstock(e.target.value)}
              style={{ width: "100%" }}
              className="mx-auto mt-2 input   text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>
        </div>

        <div className="mr-px mt-3 ">
        <button className="text-white rounded bg-sky-500 hover:bg-sky-700  p-2 px-8 ">Save</button>
          <button className="text-white rounded bg-red-600 hover:bg-red-700 p-2 px-8 mx-3">
            Cancel
          </button>
        </div>
      </form>
      </div>
    );
};

export default UserProductsForm;
// img,title,color,price,producer,CreateAt,instock            
