import { useState } from 'react';
import './Form.scss';


const Form = () => {
  const [actions,setActions] = useState('');
  const [status,setStatus] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastname] = useState('');
  const [age,setAge] = useState('');
  const [fullName,setFullName] = useState('');

  return (
   <div className='fullform'>
    <h1>Add New </h1>
     <form className="w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Actions
          </label>
          <input
            value={actions} onChange={(e)=>setActions(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Enter Actions"
          />
          {/* <p className="text-white-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Status
      </label>
      <input value={status} onChange={(e)=>setStatus(e.target.value)} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Status" />
    </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            First Name
          </label>
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Enter the Name"
          />
          {/* <p className="text-white-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input value={lastName} onChange={(e)=>setLastname(e.target.value)} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Status" />
    </div>
      </div> 
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Age 
          </label>
          <input value={age} onChange={(e)=>setAge(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Enter the Age"
          />
          {/* <p className="text-white-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Full Name 
      </label>
      <input value={fullName} onChange={(e)=>setFullName(e.target.value)}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Full Name" />
    </div>
      </div>
      </form>
      </div>
  );
};

export default Form;
// Images,Actions,Status,First Name,Last Name,Age,Full Name

// My First Form 
// <form>
    //  <label>
    //      Actions:
    //     <input value={actions} onChange={e => setActions(e.target.value)} />
    //  </label>
    //  <label>
    //      Status:
    //     <input value={status} onChange={e => setStatus(e.target.value)} />
    //  </label>
    //  <label>
    //      FirstName:
    //     <input value={firstName} onChange={e => setFirstName(e.target.value)} />
    //  </label>
    //  <label>
    //       Lastname:
    //     <input value={lastName} onChange={e => setLastname(e.target.value)} />
    //  </label>
    //  <label>
    //       Age:
    //     <input value={age} onChange={e => setAge(e.target.value)} />
    //  </label>
    //  <label>
    //       FullName:
    //     <input value={fullName} onChange={e => setFullName(e.target.value)} />
    //  </label>
    // </form>