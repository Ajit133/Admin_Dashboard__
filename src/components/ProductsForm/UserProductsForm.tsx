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
        <form
        onSubmit={handleForm}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
          <div className="flex justify-between">
          <div className="flex items-center">
          <button><img className="w-7 h-7 object-cover " src="arrow-left-5-svgrepo-com.svg" alt="" /></button> 
          <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
         Create Product
        </h1>
          </div>
          <div className="flex text-black  justify-end gap-1">
            <div>
              <Link to="/">
                <span className="">Apps</span>
              </Link>
            </div>
            <span>/</span>
            <div>
              <Link to="/">
                <span>Product</span>
              </Link>
            </div>
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
          <button className="text-white rounded bg-blue-500 p-2 ">Save</button>
          <button className="text-white rounded bg-red-600 p-2 mx-3">
            Cancel
          </button>
        </div>
      </form>
    );
};

export default UserProductsForm;
// img,title,color,price,producer,CreateAt,instock            
