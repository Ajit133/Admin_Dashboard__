const GeneralForm = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-black">General Elements</h1>

      <form
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3	rounded-lg mt-10"
        action="">
        <div className="flex items-center" style={{"marginLeft":"-14px"}}>
          <button><img className="w-7 h-7 object-cover " src="arrow-left-5-svgrepo-com.svg" alt="" /></button> 
          <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
         Create General Elements 
        </h1>
          </div>
        <div className="mt-3">
          {" "}
          <label className="mx-auto text-black" htmlFor="">
            Email <span className="text-red-500"> *</span>
          </label>{" "}
          <br />
          <input
            type="email"
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
