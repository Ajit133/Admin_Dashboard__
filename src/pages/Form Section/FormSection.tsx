// import Form2 from '../../components/Form2/Form2';
import { useState } from "react";
import "./formsection.scss";
import { Link } from "react-router-dom";

const FormSection = () => {
  const [image, setImage] = useState("");
  const [action, setAction] = useState("");
  const [status, setStatus] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log(image, action, status, firstname, lastName, age);
    e.preventDefault();
  };

  return (
    <div className="formsection">
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
        onSubmit={handleSubmit}
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <button>
              <img
                className="w-7 h-7 object-cover "
                src="arrow-left-5-svgrepo-com.svg"
                alt=""
              />
            </button>
            <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
              Create Client
            </h1>
          </div>
          {/* <div className="flex text-black  justify-end gap-1">
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
          </div> */}
        </div>

        <div className="flex flex-row justify-center">
          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Images <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="file"
              onChange={(e) => setImage(e.target.value)}
              className="file-input mt-3 file-input-bordered file-input-info w-full max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 mr-12 grow">
            <label className="mx-auto text-black" htmlFor="">
              Actions<span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e) => setAction(e.target.value)}
              placeholder="Action"
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
              Status <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Type Email"
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              First Name
            </label>{" "}
            <br />
            <input
              type="address"
              onChange={(e) => setFirstName(e.target.value)}
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
              Last Name
            </label>{" "}
            <br />
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Country"
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
              Age
            </label>{" "}
            <br />
            <input
              type="number"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Country/Region"
              className=" mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            />
            <br />
          </div>
        </div>

        <div className="mr-px mt-3 ">
          <button className="text-white rounded bg-blue-500 p-2 ">Save</button>
          <button className="text-white rounded bg-red-600 p-2 mx-3">
            Cancel
          </button>
        </div>
      </form>
      {/* flex Form */}
    </div>
  );
};

export default FormSection;
