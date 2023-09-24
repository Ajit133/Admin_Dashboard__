import { useState } from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const handleForm = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        console.log(fname,lname,email,address,country,region,city,zip)
        setFname("");
  }
  return (
    <>
      <div className="flex justify-between m-auto bg-white text-black p-5 rounded-md " style={{"width":"850px"}}>
      <h1 className="text-3xl font-bold text-sky-600">Shipping Details</h1>
      <div className="flex text-black   justify-end gap-1">
            <div>
              <Link to="/">
                <span className="text-sky-600">Apps</span>
              </Link>
            </div>
            <span>/</span>
            <div>
              <Link to="/users">
                <span className="text-sky-600">Form</span>
              </Link>
            </div>
          </div>

      </div>
      <form
        onSubmit={handleForm}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
          <div className="flex justify-between">  
        <div className="flex items-center" style={{"marginLeft":"-14px"}}>
          <button><img className="w-7 h-7 object-cover " src="arrow-left-5-svgrepo-com.svg" alt="" /></button> 
          <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
         Shipping Details 
        </h1>
          </div>
          </div>

        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              First Name <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Name"
              onChange={(e)=>setFname(e.target.value)}
              className="mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              Last Name <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e)=>setLname(e.target.value)}
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Email Address <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Type Email"
              onChange={(e)=>setEmail(e.target.value)}
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              AddressLine1
            </label>{" "}
            <br />
            <input
              type="address"
              placeholder="Contact Number"
              onChange={(e)=>setAddress(e.target.value)}
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">
          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Country
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Country"
              onChange={(e)=>setCountry(e.target.value)}
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              Country/Region
            </label>{" "}
            <br />
            <input
              type="number"
              onChange={(e)=>setRegion(e.target.value)}
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
              City
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="City"
              onChange={(e)=>setCity(e.target.value)}
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              Zip/Postal
            </label>{" "}
            <br />
            <input
              type="number"
              placeholder="Zip/Postal"
              onChange={(e)=>setZip(e.target.value)}
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>
        </div>

        <div className="mr-px mt-3 ">
        <button className="text-white rounded bg-sky-500 hover:bg-sky-700  p-2 px-8 ">Save</button>
          <button className="text-white rounded bg-red-600 hover:bg-red-700 p-2 px-8 mx-3">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default Shipping;
