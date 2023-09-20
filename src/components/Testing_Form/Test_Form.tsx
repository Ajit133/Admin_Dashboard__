import { useState } from "react";
import { Link } from "react-router-dom";

const TestForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleForm = (e: { preventDefault: () => void }) => {
    console.log(name, number, address);
    e.preventDefault();
  };
  return (
    <>
       <div className="flex justify-between m-auto bg-white text-black p-5 rounded-md " style={{"width":"850px"}}>
      <h1 className="text-3xl font-bold">Create Client</h1>
      <div className="flex text-black   justify-end gap-1">
            <div>
              <Link to="/">
                <span className="">Apps</span>
              </Link>
            </div>
            <span>/</span>
            <div>
              <Link to="/users">
                <span>Users</span>
              </Link>
            </div>
          </div>

      </div>
      <form
        onSubmit={handleForm}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3	rounded mt-10"
        action="">
          <div className="flex justify-between">
        <div className="flex items-center" style={{"marginLeft":"-14px"}}>
          <button><img className="w-7 h-7 object-cover " src="arrow-left-5-svgrepo-com.svg" alt="" /></button> 
          <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
         Create Client
        </h1>
          </div>
      
            
          </div>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            Name <span className="text-red-500"> *</span>
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Name"
            style={{ width: "100%" }}
            onChange={(e) => setName(e.target.value)}
            className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
          />
          <br />{" "}
        </div>
        <div className="mt-3">
          <label className="mx-auto text-black" htmlFor="">
            Contact Number <span className="text-red-500"> *</span>
          </label>{" "}
          <br />
          <input
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Contact Number"
            className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
          />
          <br />
        </div>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            Address <span className="text-red-500"> *</span>
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            className="mx-auto text-black bg-slate-50 mt-2 input input-bordered input-info w-full max-w-xs"
          />{" "}
        </div>
        <div className="mr-px mt-3">
          <button className="text-white rounded bg-blue-500 p-2 ">Save</button>
          <button className="text-white rounded bg-red-600 p-2 mx-3">
            Cancel
          </button>
        </div>
      </form>
      {/* flex Form */}
    </>
  );
};

export default TestForm;
