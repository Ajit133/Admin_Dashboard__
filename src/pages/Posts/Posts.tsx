// import Form from '../../components/Form/Form';
import { useState } from "react";
import "./posts.scss";

const Posts = () => {
  const [title,setTitle] = useState("");
  const [tags,setTags] = useState("");
  const [description,setDescription] = useState("")
  const handleTextarea = (e)=>{
      console.log(title,tags,description)
      e.preventDefault()
  }

  return (
    <div className="posts">
      <h1 className="text-5xl font-bold">Post Page</h1>
    <form className="mt-5" onSubmit={handleTextarea}>
        <label className="text-lg" >Form Title</label>
        <input className="mt-2 p-4 text-black rounded bg-slate-100" placeholder="Write title" onChange={(e)=>setTitle(e.target.value)} type="text" />
        <div className="mt-2">
        <label className="mt-3 text-lg">Tags</label>
        <input type="text" className="mt-2 p-4 text-black bg-slate-100 rounded" placeholder="Write tags" onChange={(e)=>setTags(e.target.value)} />
        </div>
        <div className="mt-3">
        <p ><label className="mt-2 text-lg" >Description</label></p> 
        <textarea
              onChange={(e)=>setDescription(e.target.value)}
              className="mt-2 p-4 w-96 text-black rounded bg-slate-100"
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}></textarea> 
          </div><br/>
      <button className="bg-sky-500 hover:bg-sky-700 p-4 rounded">Submit</button>
    </form>
    </div>
  );
};

export default Posts;
