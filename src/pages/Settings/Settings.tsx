import { useState } from "react";
import "./settings.scss";
import Testflex from "../../components/TestFlex/Testflex";

const Settings = () => {
  const [title,setTitle] = useState("");
  const [timezone,setTimezone] = useState("");
  const [dataFormat,setDateformat] = useState("");
  const [email,SetEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [photo,setPhoto] = useState("");
  const [city,setCity] = useState("");

  const handleForm = (e: { preventDefault: () => void; })=>{
       console.log(title,timezone,city,dataFormat,email,phone,address,photo)
       e.preventDefault()
  }

  return (
    <div className="bg-slate-400 w-full h-full pl-4 rounded-md">
      <div className="ml-6  antialiased mr-3 ">
      <h1 className="font-bold text-black text-2xl mt-3 ">General Setting</h1>
      <div className="border-b-4 border-white text-2xl "><span className="text-black ">Manage General Setting</span></div>
      </div>
      <form
        onSubmit={handleForm}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
        <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
        General Setting
        </h1>

        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
            Title <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="Name"
              onChange={(e)=>setTitle(e.target.value)}
              className="mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
            Time Zone <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e)=>setTimezone(e.target.value)}
              placeholder="Last Name"
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
            Date Format <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e)=>setDateformat(e.target.value)}
              placeholder="Type Email"
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
            Email
            </label>{" "}
            <br />
            <input
              type="address"
              onChange={(e)=>SetEmail(e.target.value)}
              placeholder="Contact Number"
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>

        </div>
        <div className="flex flex-row justify-center">
          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
            Phone
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Country"
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
            Address
            </label>{" "}
            <br />
            <input
              type="number"
              onChange={(e)=>setAddress(e.target.value)}
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
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>
        </div>
        <div className=" ">
        <div className="mt-3">
        <label className="mx-auto  text-black" htmlFor="">
            Product Images
            </label><br/>
        <input onChange={(e)=>setPhoto(e.target.value)} type="file" className="file-input mt-3  file-input-bordered file-input-info w-full max-w-xs" />
        </div>

        </div>
        <div className="mr-px mt-3">
        <button className="btn btn-accent">Save</button>
        <button className="btn btn-secondary mx-3">Cancel</button>

        </div>
      </form>
    </div>
  );
};

export default Settings;


