import {useState} from "react";

const GeneralForm = () => {

   const [email,setEmail] =useState("");
   const [password,setPassword] = useState("");
   const [readonly, setReadonly ] = useState("");
   const [number,setNumber] = useState("");
   const [url,setUrl] = useState(""); 
  
   const handleForm = (e: { preventDefault: () => void; })=>{
       console.log(email,password,readonly,number,url)
       e.preventDefault()
   }

  return (
    
    <>
      <h1 className="text-5xl font-bold text-black">General Elements</h1>

      <form
        onSubmit={handleForm}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3	rounded-lg mt-10"
        action="">
        <h1 className="font-serif font-bold text-lg text-black border-b-2    border-sky-500">
          Create General Form
        </h1>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            Email <span className="text-red-500"> *</span>
          </label>{" "}
          <br />
          <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Name"
            className="mx-auto mt-2 input bg-slate-50 input-bordered input-info w-full max-w-xs"
          />
          <br />{" "}
        </div>
        <div className="mt-3">
          <label className="mx-auto text-black" htmlFor="">
             Password<span className="text-red-500"> *</span>
          </label>{" "}
          <br />
          <input
            type="number"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Contact Number"
            className=" mt-2 mx-auto bg-slate-50 input input-bordered input-info w-full max-w-xs"
          />
          <br />
        </div>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            ReadOnly 
          </label>{" "}
          <br />
          <input
            type="text"
            onChange={(e)=>setReadonly(e.target.value)}
            placeholder="Address"
            className="mx-auto bg-slate-50 mt-2 input input-bordered input-info w-full max-w-xs"
          />{" "}
        </div>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            Number 
          </label>{" "}
          <br />
          <input
            type="text"
            onChange={(e)=>setNumber(e.target.value)}
            placeholder="Address"
            className="mx-auto bg-slate-50 mt-2 input input-bordered input-info w-full max-w-xs"
          />{" "}
        </div>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            URL 
          </label>{" "}
          <br />
          <input
            type="text"
            onChange={(e)=>setUrl(e.target.value)}
            placeholder="Address"
            className="mx-auto bg-slate-50 mt-2 input input-bordered input-info w-full max-w-xs"
          />{" "}
        </div>
        <div className="mr-px mt-3">
          <button className="text-white rounded bg-blue-500 p-2 ">Save</button>
          <button className="text-white rounded bg-red-600 p-2 mx-3">
            Cancel
          </button>
        </div>
      </form>
    </>
    
  );
};

export default GeneralForm;
