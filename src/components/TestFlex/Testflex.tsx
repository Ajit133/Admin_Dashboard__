const Testflex = () => {
    return (
        <>

      <form
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
        <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
          Shipping Details
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
            Address
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="City"
              style={{ width: "100%" }}
              className="mx-auto mt-2 input  text-black bg-slate-50 input-bordered input-info  max-w-xs"
            />
            <br />{" "}
          </div>

          <div className="mt-3 grow">
            <label className="mx-auto text-black" htmlFor="">
            Product Images
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
        <div className="flex flex-row ">
        <div className="mt-3 grow">
        <input type="file" className="file-input  file-input-bordered file-input-info w-full max-w-xs" />
        </div>

        </div>
        <div className="mr-px mt-3 ">
          <button className="text-white rounded bg-blue-500 p-2 ">Save</button>
          <button className="text-white rounded bg-red-600 p-2 mx-3">
            Cancel
          </button>
        </div>
      </form>
    </>
    );
};

export default Testflex;