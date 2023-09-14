import "./Notes.scss";

const Notes = () => {


  return (
    <div className="notes">
      <h1 className="text-3xl">Notes ....... </h1>
      <form >
        <div className="mt-3">
          <label className="text-xl">Enter Title</label>
          <br />
          <input
            type="text"
            style={{ width: "100%" }}
            className="mt-2 p-4 w-96 text-black bg-slate-100 rounded"
            placeholder="Enter Title"
          />
        </div>

        <div className="mt-3">
          <label className="text-xl" htmlFor="">
            Enter Description
          </label>
          <br />
          <textarea
            className="mt-5 p-4 text-black rounded bg-slate-100"
            cols={30}
            placeholder="Enter Description"
            style={{ color: "black", width: "100%" }}
            rows={10}></textarea>{" "}
          <br />
        </div>
        <button
          className="bg-sky-500 mt-2 hover:bg-sky-700 p-4 rounded"
          style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Notes;
