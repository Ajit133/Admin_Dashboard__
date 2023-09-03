import DataTable from "../../components/dataTable/DataTable";
import {  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from "../../dummy_data";
import './Users.scss';
import { useState } from "react";
// import Add from "../../components/Add/Add";
// import Form from "../../components/Form/Form";
import FormSection from "../Form Section/FormSection";

import { Link } from "react-router-dom";
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field:"img",headerName:"Avatar",width:100,
   renderCell: (params)=>{
      return <img src={params.row.img || "/noavatar.png"} alt=""/>
   }},
   { field:"actions",headerName:"Actions",width:100,
   renderCell: ()=>{
      return <div className="action">
        <div className="view">View</div>
        <div className="delete">Delete</div>
      </div>
   }},
   
   {field:"status",headerName:"Status",width:100,type:"boolean"},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


const Users = () => { 
    const [open,setOpen] = useState(false);
   
       
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <Link to="/formsection">
                   <button onClick={()=>setOpen(true)}>Add New Users</button>
                </Link>
                   
            </div>
            
             <DataTable slug="users" columns={columns} rows={userRows} />
             {/* {open && <Add slug="user" columns={columns} setOpen={setOpen} />} */}
             {/* {open && <Form slug="user" columns={columns} setOpen={setOpen} />} */}
             {open && <FormSection />}

        </div>
    );
};

export default Users;