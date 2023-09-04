// import Form2 from '../../components/Form2/Form2';
import "./formsection.scss";

const FormSection = () => {
  return (
    <div className="formsection">
      <>
        <h1 className="text-3xl font-bold">Create Client</h1>

        <form
        className="p-5 mx-auto m-5 bg-slate-50 w-2/3 	rounded mt-10"
        action="">
        <h1 className="font-serif font-medium text-black border-b-2 text-2xl  border-sky-500">
        Create Client
        </h1>

        <div className="flex flex-row justify-center">

          <div className="mt-3 grow">
            {" "}
            <label className="mx-auto text-black" htmlFor="">
            Images <span className="text-red-500"> *</span>
            </label>{" "}
            <br />
            <input type="file" className="file-input mt-3  file-input-bordered file-input-info w-full max-w-xs" />

            {/* <input
              type="text"
              placeholder="Name"
              className="mt-2 mx-auto text-black bg-slate-50 input input-bordered input-info w-full max-w-xs"
            /> */}
            <br />{" "}
          </div>

          <div className="mt-3 mr-12 grow">
            <label className="mx-auto text-black" htmlFor="">
            Actions<span className="text-red-500"> *</span>
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
            Status <span className="text-red-500"> *</span>
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
            First Name
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
            Last Name
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
            Age
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

        <div className="mr-px mt-3 ">
          <button className="text-white rounded bg-blue-500 p-2 ">Save</button>
          <button className="text-white rounded bg-red-600 p-2 mx-3">
            Cancel
          </button>
        </div>
      </form>
        {/* flex Form */}
      </>
    </div>
  );
};

export default FormSection;
